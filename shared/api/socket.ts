import { Socket } from 'socket.io-client';
import { ILobby, ILobbySession } from './models';

interface ServerToClientEvents {
  LOBBY_CREATED: (lobby: ILobby) => void;
  DELETE_LOBBY: (lobby: ILobby) => void;
  USER_LEAVE_LOBBY: (lobby: ILobby) => void;
  UPDATE_LOBBY: (lobby: ILobby) => void;
  GAME_SESSION_CREATED: (session: ILobbySession) => void;
}

interface ClientToServerEvents {
  CONNECTION: () => void;
  DISCONNECT: () => void;
  CREATE_LOBBY: (userId: string) => void;
  JOIN_LOBBY: (lobbyId: string, userId: string) => void;
  LEAVE_LOBBY: (userId: string) => void;
  GET_GAME_SESSION: (lobbyId: string) => void;
}

type AppSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

export type { ClientToServerEvents, ServerToClientEvents, AppSocket };
