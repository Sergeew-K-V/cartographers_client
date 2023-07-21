'use client';

import { PropsWithChildren } from 'react';
import { Socket, io } from 'socket.io-client';
import { SocketContext } from '@/shared/lib';

export const SocketProvider = ({ children }: PropsWithChildren) => {
  const socket: Socket = io(process.env.NEXT_PUBLIC_SERVER_URL as string, {
    autoConnect: false,
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
