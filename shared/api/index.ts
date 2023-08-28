import fetchLobby from './fetchLobby';
import fetchUser from './fetchUser';

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

export { fetchUser, fetchLobby };
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
