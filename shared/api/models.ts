interface IUser {
  email: string;
  _id?: string;
  password: string;
  nickname?: string;
  rang?: string;
  gameStats?: {
    rate: number;
    wins: number;
    loses: number;
  };
}

interface GameSessionInfo {
  hostName: string;
  numberOfPlayers: number;
  status: 'In game' | 'Not started';
}

export type { IUser, GameSessionInfo };
