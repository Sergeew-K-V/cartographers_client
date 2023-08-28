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

type IMatrix = IFieldCell[][];

interface IGameCard {
  id: string;
  img: string;
  name: string;
  cost: number;
  type: IGameCardType[];
  matrix: IMatrix;
  coinsMatrix?: IMatrix;
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
  gameField: IMatrix;
  isReady: boolean;
  score: number;
  coins: number;
  rang: string;
  points: number[][];
}

interface IGameCardData {
  card: IGameCard | null;
  type: string | null;
  matrix: IMatrix | null;
}

export type {
  IGameCardData,
  IUserGameData,
  IGameSessionClient,
  IGameSession,
  IGameCard,
  IMatrix,
  IFieldCell,
  IGameCardType,
};
