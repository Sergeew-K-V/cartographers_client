interface IUser {
  email: string;
  password: string;
}

interface GameSessionInfo {
  hostName: string;
  numberOfPlayers: number;
  status: 'In game' | 'Not started';
}

export type { IUser, GameSessionInfo };
