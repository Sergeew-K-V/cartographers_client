'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PlaygroundField } from '@/features/playground';
import { PlayerTable, CardView } from '@/entities/playground';
import { ILobbyPlayerMap } from '@/shared/api';
import { useAuth, useSocket } from '@/shared/lib';
import { Button, ImageCustom } from '@/shared/ui';
import { SEASONS } from './config';

function PlaygroundPage({
  params,
}: {
  params: { lobbyId: string };
}): JSX.Element {
  const lobbyId = params.lobbyId;
  const { getUserId } = useAuth();
  const { socket } = useSocket();
  const [gameSession, setGameSession] = useState<ILobbyPlayerMap>();
  const { push } = useRouter();

  const leaveLobbyHandler = () => {
    push('/hub');
    socket.emit('LEAVE_LOBBY', getUserId());
    socket.emit('REMOVE_GAME_SESSION', lobbyId, getUserId());
  };

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    socket.emit('CREATE_GAME_SESSION', lobbyId, getUserId());

    socket.on('GAME_SESSION_CREATED', (session: ILobbyPlayerMap) => {
      setGameSession(session);
    });

    socket.on('UPDATE_GAME_SESSION', (session: ILobbyPlayerMap) => {
      setGameSession(session);
    });

    return () => {
      socket.removeAllListeners('GAME_SESSION_CREATED');
      socket.removeAllListeners('UPDATE_GAME_SESSION');
    };
  }, []);

  return (
    <div className="container min-w-full relative">
      <div className="grid grid-cols-3 w-full justify-items-center">
        <div className="grid grid-cols-1">
          <div className="flex gap-2 h-fit">
            <div>
              <ImageCustom
                width={100}
                height={100}
                src="/images/other/stage_a.png"
                alt="stage-a"
              />
            </div>
            <div>
              <ImageCustom
                width={100}
                height={100}
                src="/images/other/stage_b.png"
                alt="stage-b"
              />
            </div>
            <div>
              <ImageCustom
                width={100}
                height={100}
                src="/images/other/stage_c.png"
                alt="stage-c"
              />
            </div>
            <div>
              <ImageCustom
                width={100}
                height={100}
                src="/images/other/stage_d.png"
                alt="stage-d"
              />
            </div>
          </div>
          <div className="flex gap-2 h-fit">
            <div>
              <ImageCustom
                width={100}
                height={100}
                src="/images/points_card/city_1.png"
                alt="city_1"
              />
            </div>
            <div>
              <ImageCustom
                width={100}
                height={100}
                src="/images/points_card/fields_1.png"
                alt="fields_1"
              />
            </div>
            <div>
              <ImageCustom
                width={100}
                height={100}
                src="/images/points_card/form_1.png"
                alt="form_1"
              />
            </div>
            <div>
              <ImageCustom
                width={100}
                height={100}
                src="/images/points_card/wood_1.png"
                alt="wood_1"
              />
            </div>
          </div>
          {gameSession && (
            <PlayerTable playerList={gameSession as ILobbyPlayerMap} />
          )}
        </div>
        <div>
          {gameSession && (
            <PlaygroundField
              seasonsData={SEASONS}
              coinsData={(gameSession as ILobbyPlayerMap)[getUserId()].coins}
              grid={(gameSession as ILobbyPlayerMap)[getUserId()].gameField}
            />
          )}
        </div>
        <div className="grid grid-cols-1 gap-y-4 h-full">
          <CardView />
          <div className="flex gap-x-4 items-center">
            <div className="w-32">
              <Button className="primary-button">Submit step</Button>
            </div>
            <div className="w-32">
              <Button className="primary-button">Reset step</Button>
            </div>
            <div className="w-32">
              <Button onClick={leaveLobbyHandler} className="primary-button">
                Leave lobby
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaygroundPage;
