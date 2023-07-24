'use client';

import { useRouter } from 'next/navigation';
import { IUser, SocketEvents } from '@/shared/api';
import { useAuth, useSocket } from '@/shared/lib';
import { Button } from '@/shared/ui';

interface HubControlProps {
  user: IUser;
}

function HubControl({ user }: HubControlProps) {
  const { socket } = useSocket();
  const { logout } = useAuth();
  const { push } = useRouter();

  const handleCreateLobby = () => {
    if (socket) {
      socket.emit(SocketEvents.CREATE_LOBBY, user);
      push('/hub/playground');
    }
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
