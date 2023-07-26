'use client';

import { createContext, useContext } from 'react';
import { io } from 'socket.io-client';
import { AppSocket } from '../api';

interface ISocketContext {
  socket: AppSocket;
}

export const socket: AppSocket = io(
  process.env.NEXT_PUBLIC_SERVER_URL as string,
  {
    autoConnect: false,
  }
);

export const SocketContext = createContext<ISocketContext>({ socket });

export const useSocket = () => useContext(SocketContext);
