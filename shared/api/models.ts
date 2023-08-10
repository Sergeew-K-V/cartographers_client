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

interface IFieldCell {
  id: number;
  image: string;
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
  remainingCards: string[];
  playedCards: string[];
  enemyCards: string[];
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

export type { IUser, IAlert, ILobby, IGameSession, IFieldCell, IUserGameData };
