'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { HubControl } from '@/features/hub';
import { GameSessionInfoRows, UserInfo } from '@/entities/hub';
import { ILobby, IUser, getLobbies, getUser } from '@/shared/api';
import {
  findLobbyByLobbyId,
  isHostLobby,
  useAuth,
  useSocket,
} from '@/shared/lib';
import { Button, Loader } from '@/shared/ui';

const HubPage = (): JSX.Element => {
  const { push } = useRouter();
  const { socket } = useSocket();
  const { getUserId, getToken, logout } = useAuth();
  const [user, setUser] = useState<IUser | null>(null);
  const [lobbyList, setLobbyList] = useState<ILobby[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useQuery(
    'get-user',
    () => {
      getUser(getToken(), getUserId())
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

  const { refetch: refetchLobbies } = useQuery(
    'get-lobbies',
    () => {
      getLobbies(getToken())
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
    if (!socket.connected) {
      console.log('🚀 ~ useEffect ~ socket.connected1:', socket.connected);
      socket.connect();
    }
    console.log('🚀 ~ useEffect ~ socket.connected2:', socket.connected);

    socket.on('LOBBY_CREATED', (targetLobby: ILobby) => {
      setLobbyList((prevLobbyList) => [...prevLobbyList, targetLobby]);

      if (isHostLobby(targetLobby, getUserId())) {
        setIsLoading(true);
        push(`/hub/playground/${targetLobby.id}`);
      }
    });

    socket.on('LOBBY_UPDATED', (lobbyId, data) => {
      const targetLobby = findLobbyByLobbyId(lobbyList, lobbyId);
      if (targetLobby) {
        const updatedLobby = { ...targetLobby, ...data };

        setLobbyList((prevLobbyList) =>
          prevLobbyList.map((lobby) =>
            lobby.id === updatedLobby.id ? updatedLobby : lobby
          )
        );
      }
    });

    socket.on('LOBBY_DELETED', (lobbyId) => {
      setLobbyList((prevList) =>
        prevList.filter((lobby) => lobby.id !== lobbyId)
      );
    });

    return () => {
      socket.removeAllListeners('LOBBY_CREATED');
      socket.removeAllListeners('LOBBY_UPDATED');
      socket.removeAllListeners('LOBBY_DELETED');
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
            <table className="text-sm text-left text-secondary-500 rounded-full min-w-[500px]">
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
                      onClick={() => refetchLobbies()}
                      className="primary-button"
                    >
                      Refresh
                    </Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {user &&
                  lobbyList.map((lobby) => (
                    <GameSessionInfoRows
                      hostName={lobby.host}
                      numberOfPlayers={lobby.players.length}
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
          {user && <UserInfo user={user} />}
          <HubControl />
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default HubPage;
