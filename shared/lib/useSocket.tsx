'use client';

import { createContext, useContext } from 'react';
import { Socket, io } from 'socket.io-client';

interface ISocketContext {
  socket: Socket;
}

export const socket: Socket = io(process.env.NEXT_PUBLIC_SERVER_URL as string, {
  autoConnect: false,
});

export const SocketContext = createContext<ISocketContext>({ socket });

export const useSocket = () => useContext(SocketContext);
