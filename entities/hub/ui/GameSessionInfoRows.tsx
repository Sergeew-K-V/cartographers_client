'use client';

import { useRouter } from 'next/navigation';
import { IUser, SocketEvents } from '@/shared/api';
import { useSocket } from '@/shared/lib';
import { Button } from '@/shared/ui';

interface GameSessionInfoProps {
  hostName: string;
  numberOfPlayers: number | string;
  status: boolean;
  lobbyId: string;
  user: IUser;
}

function GameSessionInfoRows({
  hostName,
  numberOfPlayers,
  status,
  lobbyId,
  user,
}: GameSessionInfoProps) {
  const { socket } = useSocket();
  const { push } = useRouter();

  const handleConnectToLobby = () => {
    if (socket) {
      socket.emit(SocketEvents.JOIN_LOBBY, lobbyId, user);
      push('/hub/playground');
    }
  };

  return (
    <tr
      className={'border-b' + ' ' + (status ? 'bg-secondary-200' : 'bg-white')}
    >
      <th
        scope="row"
        className={'px-6 py-4 font-medium text-secondary-900 whitespace-nowrap'}
      >
        {hostName}
      </th>
      <td className="px-6 py-4">{numberOfPlayers}/4</td>
      <td className="px-6 py-4">{status ? 'In game' : 'Not started'}</td>
      <td className="px-6 py-4 w-32">
        <Button
          className="primary-button"
          onClick={handleConnectToLobby}
          disabled={status}
        >
          Connect
        </Button>
      </td>
    </tr>
  );
}

export default GameSessionInfoRows;
