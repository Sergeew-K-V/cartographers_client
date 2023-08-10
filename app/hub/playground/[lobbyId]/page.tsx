'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  GameControls,
  HostControls,
  PlaygroundField,
} from '@/features/playground';
import {
  PlayerTable,
  CardView,
  GameSessionStages,
  GameSessionRules,
} from '@/entities/playground';
import { IGameSession, IUserGameData } from '@/shared/api';
import { useAuth, useSocket } from '@/shared/lib';
import { Button, ImageCustom, Loader } from '@/shared/ui';
import { findPlayerById, isHost } from './utils';

interface PlaygroundPageProps {
  params: { lobbyId: string };
}

function PlaygroundPage({ params }: PlaygroundPageProps): JSX.Element {
  const lobbyId = params.lobbyId;
  const { getUserId } = useAuth();
  const { socket } = useSocket();
  const { push } = useRouter();
  const [gameSession, setGameSession] = useState<IGameSession>();
  const [playerData, setPlayerData] = useState<IUserGameData>();
  const [isLoading, setIsLoading] = useState(false);

  const leaveLobbyHandler = () => {
    setIsLoading(true);
    push('/hub');
    socket.emit('LEAVE_LOBBY', getUserId());
    socket.emit('REMOVE_GAME_SESSION', lobbyId, getUserId());
  };

  const rerollPointCardsHandler = () => {
    socket.emit('REROLL_POINT_CARDS', lobbyId, getUserId());
  };

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    socket.emit('CREATE_GAME_SESSION', lobbyId, getUserId());

    socket.on('GAME_SESSION_CREATED', (session) => {
      setGameSession(session);
      setPlayerData(findPlayerById(session, getUserId()));
    });

    socket.on('GAME_SESSION_UPDATED', (session) => {
      setGameSession(session);
      setPlayerData(findPlayerById(session, getUserId()));
    });

    return () => {
      socket.removeAllListeners('GAME_SESSION_CREATED');
      socket.removeAllListeners('GAME_SESSION_UPDATED');
    };
  }, []);

  return (
    <div className="container min-w-full relative">
      {gameSession && playerData && (
        <div className="grid grid-cols-3 w-full justify-items-center">
          <div className="">
            <GameSessionStages />
            <GameSessionRules gameSession={gameSession} />
            <PlayerTable playerList={gameSession.players} />
          </div>
          <div>{<PlaygroundField playerData={playerData} />}</div>
          <div className="grid grid-cols-1 gap-y-4 h-full">
            <CardView
              currentCard={gameSession.currentCard}
              remainingCards={gameSession.remainingCards}
            />
            <div className="grid items-center w-fit">
              <GameControls />
              <div className="flex gap-2">
                {isHost(gameSession, playerData) && (
                  <HostControls
                    rerollPointCardsHandler={rerollPointCardsHandler}
                  />
                )}
                <div className="w-32">
                  <Button
                    onClick={leaveLobbyHandler}
                    className="primary-button"
                  >
                    Leave lobby
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </div>
  );
}

export default PlaygroundPage;
