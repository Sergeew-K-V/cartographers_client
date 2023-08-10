'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PlaygroundField } from '@/features/playground';
import { PlayerTable, CardView } from '@/entities/playground';
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
      {gameSession && (
        <div className="grid grid-cols-3 w-full justify-items-center">
          <div className="">
            <div className="flex gap-2 h-fit mb-2">
              <div>
                <ImageCustom src="/images/other/stage_a.png" alt="stage-a" />
              </div>
              <div>
                <ImageCustom src="/images/other/stage_b.png" alt="stage-b" />
              </div>
              <div>
                <ImageCustom src="/images/other/stage_c.png" alt="stage-c" />
              </div>
              <div>
                <ImageCustom src="/images/other/stage_d.png" alt="stage-d" />
              </div>
            </div>
            <div className="flex gap-2  h-fit mb-2">
              {gameSession.rules.map((rule) => {
                return (
                  <div key={rule}>
                    <ImageCustom src={rule} alt={rule} />
                  </div>
                );
              })}
              {playerData && isHost(gameSession, playerData) && (
                <div className="w-20">
                  <ImageCustom
                    src="/images/icons/refresh-icon.png"
                    alt="refresh-icon"
                    onClick={rerollPointCardsHandler}
                    className="cursor-pointer w-6 hover:rotate-180 transition-all"
                  />
                </div>
              )}
            </div>
            <PlayerTable playerList={gameSession.players} />
          </div>
          <div>{playerData && <PlaygroundField playerData={playerData} />}</div>
          <div className="grid grid-cols-1 gap-y-4 h-full">
            <CardView
              currentCard={gameSession.currentCard}
              remainingCards={gameSession.remainingCards}
            />
            <div className="grid items-center w-fit">
              <div className="flex gap-2">
                <div className="w-32">
                  <Button className="primary-button">Submit step</Button>
                </div>
                <div className="w-32">
                  <Button className="primary-button">Reset step</Button>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-32">
                  {playerData && isHost(gameSession, playerData) && (
                    <Button className="primary-button">Start game</Button>
                  )}
                </div>
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
