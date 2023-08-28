import {
  ICell,
  IGameCard,
  IGameCardData,
  IGameCardType,
  IGameSession,
  IGameSessionClient,
  IUserGameData,
  ICardMatrix,
  IGameFieldMatrix,
  IGameFieldCell,
} from './types';

interface IUser {
  email: string;
  _id?: string;
  nickname: string;
  rang?: string;
  gameStats?: {
    rate: number;
    wins: number;
    loses: number;
  };
}

interface IAlert {
  type: 'danger' | 'success';
  text: string;
}

interface ILobby {
  id: string;
  name: string;
  host: string;
  userList: IUser[];
  isStarted: boolean;
}

export type {
  IUser,
  IAlert,
  ILobby,
  IGameSession,
  ICell,
  IUserGameData,
  IGameCardType,
  IGameCard,
  IGameSessionClient,
  IGameCardData,
  ICardMatrix,
  IGameFieldMatrix,
  IGameFieldCell,
};
