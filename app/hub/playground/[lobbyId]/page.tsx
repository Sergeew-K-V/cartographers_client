'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchLobby } from '@/features/playground';
import { PlayerTable, PlaygroundField, CardView } from '@/entities/playground';
import { ILobby } from '@/shared/api';
import { useAuth, useSocket } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { PLAYERS, SEASONS, COINS, GRID } from './config';

function PlaygroundPage({
  params,
}: {
  params: { lobbyId: string };
}): JSX.Element {
  const lobbyId = params.lobbyId;
  console.log('🚀 ~ file: page.tsx:19 ~ lobbyId:', lobbyId);
  const { logout, getUserId, getToken } = useAuth();
  const { socket } = useSocket();
  const [lobby, setLobby] = useState<ILobby>();
  const { push } = useRouter();

  const leaveLobbyHandler = () => {
    socket.emit('LEAVE_LOBBY', getUserId());
    push('/hub');
  };

  useQuery(
    '/lobbies/:_id',
    () => {
      fetchLobby(getToken(), lobbyId)
        .then((res) => {
          console.log('🚀 ~ file:', res.data);
          setLobby(res.data);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            logout();
          } else {
            console.log('err:', err);
            return '';
          }
        });
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="container min-w-full relative">
      <div className="grid grid-cols-3 w-full justify-items-center">
        <div className="grid grid-rows-4 max-h-fit">
          <PlayerTable playerList={PLAYERS} />
          <div className="row-start-4 w-40">
            <Button onClick={leaveLobbyHandler} className="primary-button">
              Leave lobby
            </Button>
          </div>
        </div>
        <div>
          <PlaygroundField
            seasonsData={SEASONS}
            coinsData={COINS}
            grid={GRID}
          />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaygroundPage;
