'use client';

import { createContext, useContext } from 'react';
import { io } from 'socket.io-client';
import { AppSocket } from '../api';

interface ISocketContext {
  socket: AppSocket;
}
if (!process.env.NEXT_PUBLIC_SERVER_URL) {
  throw new Error('NEXT_PUBLIC_SERVER_URL is not defined');
}

export const socket: AppSocket = io(process.env.NEXT_PUBLIC_SERVER_URL, {
  path: process.env.NEXT_PUBLIC_RUN_TYPE === 'prod' ? '/socket/' : '',
  autoConnect: false,
});

export const SocketContext = createContext<ISocketContext>({ socket });

export const useSocket = () => useContext(SocketContext);
