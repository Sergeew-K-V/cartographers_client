'use client';

import { GameSessionInfo } from '@/shared/api';
import { Button } from '@/shared/ui';

function GameSessionInfoRow({
  hostName,
  numberOfPlayers,
  status,
}: GameSessionInfo) {
  return (
    <tr
      className={
        'border-b' +
        ' ' +
        (status === 'Not started' ? 'bg-secondary-200' : 'bg-white')
      }
    >
      <th
        scope="row"
        className={'px-6 py-4 font-medium text-secondary-900 whitespace-nowrap'}
      >
        {hostName}
      </th>
      <td className="px-6 py-4">{numberOfPlayers}/4</td>
      <td className="px-6 py-4">{status}</td>
      <td className="px-6 py-4 w-32">
        <Button
          className="primary-button"
          onClick={() => console.log('connect to lobby')}
          disabled={status === 'In game' ? true : false}
        >
          Connect
        </Button>
      </td>
    </tr>
  );
}

export default GameSessionInfoRow;
