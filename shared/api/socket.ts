import { Socket } from 'socket.io-client';
import { ILobby, ILobbyPlayerMap } from './models';

interface ServerToClientEvents {
  LOBBY_CREATED: (lobby: ILobby) => void;
  DELETE_LOBBY: (lobby: ILobby) => void;
  USER_LEAVE_LOBBY: (lobby: ILobby) => void;
  UPDATE_LOBBY: (lobby: ILobby) => void;

  GAME_SESSION_CREATED: (session: ILobbyPlayerMap) => void;
  UPDATE_GAME_SESSION: (session: ILobbyPlayerMap) => void;
}

interface ClientToServerEvents {
  CONNECTION: () => void;
  DISCONNECT: () => void;
  CREATE_LOBBY: (userId: string) => void;
  JOIN_LOBBY: (lobbyId: string, userId: string) => void;
  LEAVE_LOBBY: (userId: string) => void;

  CREATE_GAME_SESSION: (lobbyId: string, userId: string) => void;
  REMOVE_GAME_SESSION: (lobbyId: string, userId: string) => void;
}

type AppSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

export type { ClientToServerEvents, ServerToClientEvents, AppSocket };
