import { getLobbies } from './lobby';
import type {
  IUser,
  IAlert,
  ILobby,
  IGameSession,
  IUserGameData,
  ICell,
  IGameSessionClient,
  IGameCardType,
  IGameCard,
  IGameCardData,
  ICardMatrix,
  IGameFieldMatrix,
  IGameFieldCell,
} from './models';
import {
  ClientToServerEvents,
  ServerToClientEvents,
  AppSocket,
} from './socket';
import { getUser } from './user';

export { getUser, getLobbies };
export type {
  IUser,
  IAlert,
  ILobby,
  ClientToServerEvents,
  ServerToClientEvents,
  AppSocket,
  IGameSession,
  IUserGameData,
  ICell,
  IGameSessionClient,
  IGameCardType,
  IGameCard,
  IGameCardData,
  ICardMatrix,
  IGameFieldMatrix,
  IGameFieldCell,
};
