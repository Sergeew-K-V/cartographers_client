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

interface IGameSessions {
  [lobbyId: string]: ILobbyPlayerMap;
}

interface ILobbyPlayerMap {
  [userId: string]: IUserGameData;
}

interface IUserGameData {
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

export type {
  IUser,
  IAlert,
  ILobby,
  IGameSessions,
  ILobbyPlayerMap,
  IFieldCell,
};
