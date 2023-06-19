'use client';

import { useAuthContext } from '@/shared/lib';
import { Button } from '@/shared/ui';

const HubPage = (): JSX.Element => {
  const { logout } = useAuthContext();
  return (
    <main className="min-h-screen p-6 bg-secondary-50">
      <h1 className="mb-4 text-xl font-semibold text-secondary-700">
        Welcome to Hub
      </h1>
      <div className="container">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-3">
          <table className="w-full text-sm text-left text-secondary-500 rounded-full">
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
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-secondary-900 whitespace-nowrap"
                >
                  Test
                </th>
                <td className="px-6 py-4">3/4</td>
                <td className="px-6 py-4">In game</td>
                <td className="px-6 py-4 w-32">
                  <Button disabled>Connect</Button>
                </td>
              </tr>
              <tr className="border-b bg-secondary-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-secondary-900 whitespace-nowrap"
                >
                  Test2
                </th>
                <td className="px-6 py-4">1/4</td>
                <td className="px-6 py-4">Waiting</td>
                <td className="px-6 py-4 w-32">
                  <Button>Connect</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex gap-x-3">
          <div className="w-40">
            <Button>Create lobby</Button>
          </div>
          <div className="w-40">
            <Button onClick={() => logout()}>Logout</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HubPage;
