import { HubControl } from '@/features/hub';
import { GameSessionInfoRow, UserInfo } from '@/entities/hub';
import { games } from './config';

const HubPage = (): JSX.Element => {
  return (
    <>
      <div className="container min-w-full relative">
        <h1 className="mb-4 text-xl font-semibold text-secondary-700">
          Welcome to Hub
        </h1>
        <div className="flex gap-4">
          <div className="relative w-fit overflow-x-auto shadow-md sm:rounded-lg">
            <table className="text-sm text-left text-secondary-500 rounded-full">
              <thead className="text-xs text-secondary-700 uppercase bg-secondary-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Host
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Players
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Lobby status
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {games.map((game, index) => (
                  <GameSessionInfoRow
                    hostName={game.hostName}
                    numberOfPlayers={game.numberOfPlayers}
                    status={game.status}
                    key={index}
                  />
                ))}
              </tbody>
            </table>
            {games.length === 0 && (
              <div className="flex justify-center w-full">
                No games running or not started
              </div>
            )}
          </div>
          <UserInfo />
          <HubControl />
        </div>
      </div>
    </>
  );
};

export default HubPage;
