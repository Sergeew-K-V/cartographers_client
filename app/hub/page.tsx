'use client';

import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { HubControl, fetchLobbyList } from '@/features/hub';
import { GameSessionInfoRows, UserInfo } from '@/entities/hub';
import { ILobby, IUser, fetchUser } from '@/shared/api';
import {
  createLobby,
  deleteLobby,
  updateLobby,
  useAuth,
  useSocket,
} from '@/shared/lib';
import { Button } from '@/shared/ui';

const HubPage = (): JSX.Element => {
  const { socket } = useSocket();
  const { getUserId, getToken, logout } = useAuth();
  const [user, setUser] = useState<IUser>({ email: '', nickname: '' });
  const [lobbyList, setLobbyList] = useState<ILobby[]>([]);

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

  const { refetch: refetchLobbyList } = useQuery(
    'getLobbyList',
    () => {
      fetchLobbyList(getToken())
        .then((res) => {
          setLobbyList(res.data);
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
    socket.connect();

    socket.on('LOBBY_CREATED', (targetLobby: ILobby) => {
      createLobby(setLobbyList, targetLobby);
    });

    socket.on('UPDATE_LOBBY', (targetLobby: ILobby) =>
      updateLobby(lobbyList, setLobbyList, targetLobby)
    );

    socket.on('USER_LEAVE_LOBBY', (targetLobby: ILobby) =>
      updateLobby(lobbyList, setLobbyList, targetLobby)
    );

    socket.on('DELETE_LOBBY', (targetLobby: ILobby) =>
      deleteLobby(lobbyList, setLobbyList, targetLobby)
    );

    return () => {
      socket.removeAllListeners('LOBBY_CREATED');
      socket.removeAllListeners('UPDATE_LOBBY');
      socket.removeAllListeners('USER_LEAVE_LOBBY');
      socket.removeAllListeners('DELETE_LOBBY');
    };
  }, [lobbyList]);

  return (
    <>
      <div className="container min-w-full relative">
        <h1 className="mb-4 text-xl font-semibold text-secondary-700">
          Welcome to Hub
        </h1>
        <div className="flex gap-4">
          <div className="relative w-fit h-96 overflow-y-auto shadow-md sm:rounded-lg">
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
                      onClick={() => refetchLobbyList()}
                      className="primary-button"
                    >
                      Refresh
                    </Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {lobbyList.map((lobby) => (
                  <GameSessionInfoRows
                    hostName={lobby.host}
                    numberOfPlayers={lobby.userList.length}
                    status={lobby.isStarted}
                    lobbyId={lobby.id}
                    user={user}
                    key={lobby.id}
                  />
                ))}
              </tbody>
            </table>
            {lobbyList.length === 0 && (
              <div className="flex justify-center w-full">
                No games running or not started
              </div>
            )}
          </div>
          <UserInfo user={user} />
          <HubControl lobbyId={getUserId()} />
        </div>
      </div>
    </>
  );
};

export default HubPage;
