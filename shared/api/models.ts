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

type IGameCardType =
  | 'city'
  | 'wood'
  | 'ground'
  | 'water'
  | 'enemy'
  | 'mountain'
  | 'ruins'
  | 'cell';

type IFieldCell = 1 | 0;

interface IGameCard {
  id: string;
  img: string;
  name: string;
  cost: number;
  type: IGameCardType[];
  matrix: IFieldCell[][];
  coinsMatrix?: IFieldCell[][];
}

interface IGameSession {
  id: string;
  rules: string[];
  winner: string;
  host: string;
  time: number;
  players: IUserGameData[];
  isStarted: boolean;
  currentCard: string | null;
  poolOfCards: string[];
  playedCards: string[];
  enemyCards: string[];
}

interface IGameSessionClient {
  id: string;
  rules: string[];
  winner: string;
  host: string;
  time: number;
  players: IUserGameData[];
  isStarted: boolean;
  currentCard: IGameCard | null;
  poolOfCardsNumber: number;
  playedCards: string[];
}

interface IUserGameData {
  _id: string;
  nickname: string;
  gameField: IFieldCell[][];
  isReady: boolean;
  score: number;
  coins: number;
  rang: string;
  points: number[][];
}

export type {
  IUser,
  IAlert,
  ILobby,
  IGameSession,
  IFieldCell,
  IUserGameData,
  IGameCardType,
  IGameCard,
  IGameSessionClient,
};
