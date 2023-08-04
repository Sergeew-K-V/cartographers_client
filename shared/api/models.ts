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

interface UserGameData {
  nickname: string;
  gameField: IFieldCell[][];
  isReady: boolean;
  score: number;
  coins: number;
  points: number[][];
}

interface IFieldCell {
  id: number;
  image: string;
}

interface IGameSession {
  [lobbyId: string]: ILobbySession;
}

interface ILobbySession {
  [userId: string]: UserGameData;
}

export type { IUser, IAlert, ILobby, IGameSession, ILobbySession, IFieldCell };
