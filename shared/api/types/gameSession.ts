type IGameCardType =
  | 'city'
  | 'wood'
  | 'ground'
  | 'water'
  | 'enemy'
  | 'mountain'
  | 'ruins'
  | 'cell';

type ICell = 1 | 0;

type ICardMatrix = ICell[][];

type IGameFieldMatrix = IGameFieldCell[][];

interface IGameFieldCell {
  value: ICell;
  type: IGameCardType;
}

interface IGameCard {
  id: string;
  img: string;
  name: string;
  cost: number;
  type: IGameCardType[];
  matrix: ICardMatrix;
  coinsMatrix?: ICardMatrix;
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
  id: string;
  nickname: string;
  gameField: IGameFieldMatrix;
  isReady: boolean;
  score: number;
  coins: number;
  rang: string;
  points: number[][];
}

interface IGameCardData {
  card: IGameCard | null;
  type: IGameCardType;
  matrix: ICardMatrix | null;
}

export type {
  IGameCardData,
  IUserGameData,
  IGameSessionClient,
  IGameSession,
  IGameCard,
  ICardMatrix,
  ICell,
  IGameCardType,
  IGameFieldMatrix,
  IGameFieldCell,
};
