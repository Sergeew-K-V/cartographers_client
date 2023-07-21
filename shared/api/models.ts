interface IUser {
  email: string;
  _id?: string;
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

interface IAlert {
  type: 'danger' | 'success';
  text: string;
}

export type { IUser, GameSessionInfo, IAlert };
