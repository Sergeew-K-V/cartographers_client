'use client';

import { SocketEvents } from '@/shared/api';
import { useSocket } from '@/shared/lib';
import { Button } from '@/shared/ui';

function HubControl() {
  const { socket } = useSocket();

  const handleCreateLobby = () => {
    if (socket) {
      socket.emit(SocketEvents.CREATE_LOBBY);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-y-4">
      <div className="w-40">
        <Button onClick={handleCreateLobby} className="primary-button">
          Create lobby
        </Button>
      </div>
    </div>
  );
}

export default HubControl;
