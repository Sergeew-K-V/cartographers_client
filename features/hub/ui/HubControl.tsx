'use client';

import { useAuth, useSocket } from '@/shared/lib';
import { Button } from '@/shared/ui';

function HubControl() {
  const { socket } = useSocket();
  const { logout, getUserId } = useAuth();

  const handleCreateLobby = () => {
    socket.emit('CREATE_LOBBY', getUserId());
  };

  return (
    <div className="grid grid-cols-1 gap-y-4">
      <div className="w-40">
        <Button onClick={handleCreateLobby} className="primary-button">
          Create lobby
        </Button>
      </div>
      <div className="w-40">
        <Button className="primary-button" onClick={() => logout()}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default HubControl;
