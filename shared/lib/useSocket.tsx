import { createContext, useContext } from 'react';
import { Socket } from 'socket.io-client';

interface ISocketContext {
  socket: Socket | null;
}

const socket = null;

export const SocketContext = createContext<ISocketContext>({ socket });

export const useSocket = () => useContext(SocketContext);
