'use client';

import { useAuth } from '@/shared/lib';
import { Button } from '@/shared/ui';

function HubControl() {
  const { logout } = useAuth();
  return (
    <div className="grid grid-cols-1 gap-y-4">
      <div className="w-40">
        <Button className="primary-button">Create lobby</Button>
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
