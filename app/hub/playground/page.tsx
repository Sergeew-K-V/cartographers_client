'use client';

import { CardView, PlayerTable, PlaygroundField } from '@/entities/playground';
import { AlertList, Button } from '@/shared/ui';
import { COINS, GRID, PLAYERS, SEASONS } from './config';

function PlaygroundPage(): JSX.Element {
  return (
    <main className="min-h-[calc(100vh-64px)] p-6 bg-secondary-50">
      <div className="container min-w-full relative">
        <div className="grid grid-cols-3 w-full justify-items-center">
          <div className="grid grid-rows-4 max-h-fit">
            <PlayerTable playerList={PLAYERS} />
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
                <Button>Submit step</Button>
              </div>
              <div className="w-32">
                <Button>Reset step</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertList />
    </main>
  );
}

export default PlaygroundPage;
