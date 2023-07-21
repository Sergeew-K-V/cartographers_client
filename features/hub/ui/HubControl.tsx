'use client';

import { IUser, SocketEvents } from '@/shared/api';
import { useSocket } from '@/shared/lib';
import { Button } from '@/shared/ui';

interface HubControlProps {
  user: IUser;
}

function HubControl({ user }: HubControlProps) {
  const { socket } = useSocket();

  const handleCreateLobby = () => {
    if (socket) {
      socket.emit(SocketEvents.CREATE_LOBBY, user);
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
