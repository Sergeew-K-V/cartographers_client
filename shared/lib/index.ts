import { AlertContext, useAlert } from './useAlerts';
import { AuthContext, useAuth } from './useAuth';
import { useSocket, socket, SocketContext } from './useSocket';
import {
  findLobbyByLobbyId,
  findLobbyByUserId,
  isHostLobby,
  countScore,
  isEqualMatrix,
  isAbleToSetMatrix,
} from './utils';

export {
  AuthContext,
  useAuth,
  AlertContext,
  useAlert,
  useSocket,
  socket,
  SocketContext,
  findLobbyByLobbyId,
  findLobbyByUserId,
  isHostLobby,
  countScore,
  isEqualMatrix,
  isAbleToSetMatrix,
};
