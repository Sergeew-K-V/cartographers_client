'use client';

import { useAuthContext } from '@/shared/lib';
import { Button } from '@/shared/ui';

const PlaygroundPage = (): JSX.Element => {
  const { logout } = useAuthContext();
  return (
    <main>
      <h1>PlaygroundPage</h1>
      <div className="w-28">
        <Button onClick={() => logout()}>Logout</Button>
      </div>
    </main>
  );
};

export default PlaygroundPage;
