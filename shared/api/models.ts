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

interface IGameSession {
  id: string;
  rules: string[];
  winner: string;
  host: string;
  currentCard: string | null;
  time: number;
  remainingCards: string[];
  playedCards: string[];
  enemyCards: string[];
  players: IUserGameData[];
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

interface IFieldCell {
  id: number;
  image: string;
}

export type { IUser, IAlert, ILobby, IGameSession, IFieldCell, IUserGameData };
