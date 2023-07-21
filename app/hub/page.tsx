'use client';

import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { HubControl } from '@/features/hub';
import { GameSessionInfoRow, UserInfo } from '@/entities/hub';
import { IUser, fetchUser } from '@/shared/api';
import { useAuth, useSocket } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { games } from './config';

const HubPage = (): JSX.Element => {
  const { socket } = useSocket();
  const { getUserId, getToken, logout } = useAuth();
  const [user, setUser] = useState<IUser>({ email: '' });

  useQuery(
    'getUser',
    () => {
      fetchUser(getUserId(), getToken())
        .then((res) => {
          setUser(res.data);
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

  useEffect(() => {
    socket?.connect();
    return () => {
      socket?.disconnect();
    };
  }, []);

  return (
    <>
      <div className="container min-w-full relative">
        <h1 className="mb-4 text-xl font-semibold text-secondary-700">
          Welcome to Hub
        </h1>
        <div className="flex gap-4">
          <div className="relative w-fit overflow-x-auto shadow-md sm:rounded-lg">
            <table className="text-sm text-left text-secondary-500 rounded-full">
              <thead className="text-xs text-secondary-700 uppercase bg-secondary-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Host
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Players
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Lobby status
                  </th>
                  <th scope="col" className="px-6 py-3 flex justify-center">
                    <Button
                      onClick={() => console.log('refresh')}
                      className="primary-button"
                    >
                      Refresh
                    </Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {games.map((game, index) => (
                  <GameSessionInfoRow
                    hostName={game.hostName}
                    numberOfPlayers={game.numberOfPlayers}
                    status={game.status}
                    key={index}
                  />
                ))}
              </tbody>
            </table>
            {games.length === 0 && (
              <div className="flex justify-center w-full">
                No games running or not started
              </div>
            )}
          </div>
          <UserInfo user={user} />
          <HubControl />
        </div>
      </div>
    </>
  );
};

export default HubPage;
