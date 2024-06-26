'use client';

import { useState } from 'react';
import { useAuth, useSocket } from '@/shared/lib';
import { Button, Loader } from '@/shared/ui';

const HubControl = () => {
  const { socket } = useSocket();
  const { logout, getUserId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateLobby = () => {
    socket.emit('CREATE_LOBBY', getUserId());
  };

  const handleLogout = () => {
    setIsLoading(true);
    logout();
  };

  return (
    <div className="grid grid-cols-2 h-full gap-2">
      <div className="w-40">
        <Button onClick={handleCreateLobby} className="primary-button">
          Create lobby
        </Button>
      </div>
      <div className="w-40">
        <Button className="primary-button" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default HubControl;
