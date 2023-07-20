'use client';

import { PropsWithChildren, useEffect } from 'react';
import { Socket, io } from 'socket.io-client';
import { SocketContext } from '@/shared/lib';

export const SocketProvider = ({ children }: PropsWithChildren) => {
  const socket: Socket = io(process.env.NEXT_PUBLIC_SERVER_URL as string, {
    autoConnect: false,
  });

  useEffect(() => {
    socket.on('success-connection', () => {
      console.log('connection instablished');
    });
  });

  return (
    <SocketContext.Provider
      value={{
        socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
