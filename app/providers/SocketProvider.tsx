'use client';

import { PropsWithChildren } from 'react';
import { SocketContext, socket } from '@/shared/lib';

export const SocketProvider = ({ children }: PropsWithChildren) => {
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
