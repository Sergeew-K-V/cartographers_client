import { Socket } from 'socket.io-client';
import { ILobby, IGameSessionClient } from './models';

type IUpdateDataLobby = IUpdateData<ILobby>;

type IUpdateDataGameSession = IUpdateData<IGameSessionClient>;

type IUpdateData<T> = {
  [key in keyof Omit<T, 'id'>]?: T[key];
};

interface ServerToClientEvents {
  LOBBY_CREATED: (lobby: ILobby) => void;
  LOBBY_DELETED: (lobbyId: string) => void;
  LOBBY_UPDATED: (lobbyId: string, data: IUpdateDataLobby) => void;

  GAME_SESSION_CREATED: (session: IGameSessionClient) => void;
  GAME_SESSION_UPDATED: (data: IUpdateDataGameSession) => void;
}

interface ClientToServerEvents {
  CONNECTION: () => void;
  DISCONNECT: () => void;
  CREATE_LOBBY: (userId: string) => void;
  JOIN_LOBBY: (lobbyId: string, userId: string) => void;
  LEAVE_LOBBY: (userId: string) => void;

  CREATE_GAME_SESSION: (sessionId: string, userId: string) => void;
  REMOVE_GAME_SESSION: (sessionId: string, userId: string) => void;
  REROLL_POINT_CARDS: (sessionId: string, userId: string) => void;
  PLAYER_SUBMIT_STEP: (lobbyId: string, userId: string) => void;

  START_GAME: (sessionId: string) => void;
  END_GAME: (sessionId: string) => void;
}

type AppSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

export type { ClientToServerEvents, ServerToClientEvents, AppSocket };
