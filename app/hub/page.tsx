'use client';

import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { HubControl, fetchLobbyList } from '@/features/hub';
import { GameSessionInfoRows, UserInfo } from '@/entities/hub';
import { ILobby, IUser, SocketEvents, fetchUser } from '@/shared/api';
import { useAuth, useSocket } from '@/shared/lib';
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

    socket.on(SocketEvents.LOBBY_CREATED, (newLobby: ILobby) => {
      setLobbyList((lobby) => [...lobby, newLobby]);
    });

    socket.on(SocketEvents.UPDATE_LOBBY, (updatedLobby: ILobby) => {
      const filteredLobbies: ILobby[] = lobbyList.filter(
        (lobby) => lobby.id !== updatedLobby.id
      );

      setLobbyList([updatedLobby, ...filteredLobbies]);
    });

    socket.on(
      SocketEvents.USER_LEAVE_LOBBY,
      (targetLobby: ILobby, userList: IUser[]) => {
        const editedLobbyList: ILobby[] = lobbyList.map((lobby) => {
          if (lobby.id === targetLobby.id) {
            return { ...lobby, userList };
          } else {
            return lobby;
          }
        });
        setLobbyList([...editedLobbyList]);
      }
    );

    socket.on(SocketEvents.LEAVE_LOBBY, (leavedLobby: ILobby) => {
      const filteredLobbies: ILobby[] = lobbyList.filter(
        (lobby) => lobby.id !== leavedLobby.id
      );

      setLobbyList([...filteredLobbies]);
    });
  }, []);

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
          <HubControl user={user} />
        </div>
      </div>
    </>
  );
};

export default HubPage;
