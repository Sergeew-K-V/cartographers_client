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
import { IGameSessionClient, IUserGameData } from '@/shared/api';
import { useAuth, useSocket } from '@/shared/lib';
import { Button, Loader } from '@/shared/ui';
import { findPlayerById, isSessionHost } from './utils';

interface PlaygroundPageProps {
  params: { lobbyId: string };
}

const PlaygroundPage = ({ params }: PlaygroundPageProps): JSX.Element => {
  const lobbyId = params.lobbyId;
  const { getUserId } = useAuth();
  const { socket } = useSocket();
  const { push } = useRouter();
  const [gameSession, setGameSession] = useState<IGameSessionClient>();
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

  const handleChangeGameStatus = () => {
    if (gameSession) {
      if (gameSession.isStarted) {
        socket.emit('END_GAME', gameSession.id);
      } else {
        socket.emit('START_GAME', gameSession.id);
      }
    }
  };

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    if (!gameSession) {
      socket.emit('CREATE_GAME_SESSION', lobbyId, getUserId());
    }

    socket.on('GAME_SESSION_CREATED', (session) => {
      setGameSession(session);
      setPlayerData(findPlayerById(session, getUserId()));
    });

    socket.on('GAME_SESSION_UPDATED', (data) => {
      if (gameSession) {
        const updatedGameSession = { ...gameSession, ...data };

        setGameSession(updatedGameSession);
      }
    });

    return () => {
      socket.removeAllListeners('GAME_SESSION_CREATED');
      socket.removeAllListeners('GAME_SESSION_UPDATED');
    };
  }, [gameSession]);

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
              poolOfCardsNumber={gameSession.poolOfCardsNumber}
              playedCards={gameSession.playedCards}
            />
            <div className="grid items-center w-fit">
              <GameControls />
              <div className="flex gap-2">
                <HostControls
                  sessionStarted={gameSession.isStarted}
                  isSessionHost={isSessionHost(
                    gameSession.host,
                    playerData.nickname
                  )}
                  handleChangeGameStatus={handleChangeGameStatus}
                  rerollPointCardsHandler={rerollPointCardsHandler}
                />
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
};

export default PlaygroundPage;
