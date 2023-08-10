import { Socket } from 'socket.io-client';
import { ILobby, IGameSession } from './models';

interface ServerToClientEvents {
  LOBBY_CREATED: (lobby: ILobby) => void;
  LOBBY_DELETED: (lobby: ILobby) => void;
  LOBBY_UPDATED: (lobby: ILobby) => void;

  GAME_SESSION_CREATED: (session: IGameSession) => void;
  GAME_SESSION_UPDATED: (session: IGameSession) => void;
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
}

type AppSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

export type { ClientToServerEvents, ServerToClientEvents, AppSocket };
