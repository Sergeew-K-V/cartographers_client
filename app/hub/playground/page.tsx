'use client';

import { CardView, PlayerTable, PlaygroundField } from '@/entities/playground';
import { SocketEvents } from '@/shared/api';
import { useAuth, useSocket } from '@/shared/lib';
import { Button, LinkButton } from '@/shared/ui';
import { COINS, GRID, PLAYERS, SEASONS } from './config';

function PlaygroundPage(): JSX.Element {
  const { logout, getUserId } = useAuth();
  const { socket } = useSocket();

  const leaveLobbyHandler = () => {
    socket.emit(SocketEvents.LEAVE_LOBBY, getUserId());
  };

  return (
    <div className="container min-w-full relative">
      <div className="grid grid-cols-3 w-full justify-items-center">
        <div className="grid grid-rows-4 max-h-fit">
          <PlayerTable playerList={PLAYERS} />
          <div className="w-40">
            <LinkButton href="/hub" className="primary-button">
              Go to hub
            </LinkButton>
          </div>
          <div className="w-40">
            <Button onClick={leaveLobbyHandler} className="primary-button">
              Leave lobby
            </Button>
          </div>
        </div>
        <div>
          <PlaygroundField
            seasonsData={SEASONS}
            coinsData={COINS}
            grid={GRID}
          />
        </div>
        <div className="grid grid-cols-1 gap-y-4 h-full">
          <CardView />
          <div className="flex gap-x-4 items-center">
            <div className="w-32">
              <Button className="primary-button">Submit step</Button>
            </div>
            <div className="w-32">
              <Button className="primary-button">Reset step</Button>
            </div>
            <div className="w-32">
              <Button className="primary-button" onClick={() => logout()}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaygroundPage;
