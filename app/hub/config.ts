import { GameSessionInfo } from '@/shared/api';

const games: GameSessionInfo[] = [
  {
    hostName: 'Test1',
    numberOfPlayers: 3,
    status: 'In game',
  },
  {
    hostName: 'Test2',
    numberOfPlayers: 1,
    status: 'Not started',
  },
];

export { games };
