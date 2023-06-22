'use client';

import { AlertList, Button, ImageCustom } from '@/shared/ui';

const grid = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
];

function PlaygroundPage(): JSX.Element {
  return (
    <main className="min-h-[calc(100vh-64px)] p-6 bg-secondary-50">
      <div className="container min-w-full relative">
        <div className="grid grid-cols-3 w-full justify-items-center">
          <div className="">
            <table className="text-sm text-left text-secondary-500 shadow-xl">
              <thead className="text-xs text-secondary-700 uppercase bg-secondary-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Player
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ready for next card
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Current Score
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={'border-b text-center'}>
                  <th
                    scope="row"
                    className={
                      'px-6 py-4 font-medium text-secondary-900 whitespace-nowrap'
                    }
                  >
                    You
                  </th>
                  <td className="px-6 py-4">No</td>
                  <td className="px-6 py-4">1230123</td>
                </tr>
                <tr className={'border-b text-center'}>
                  <th
                    scope="row"
                    className={
                      'px-6 py-4 font-medium text-secondary-900 whitespace-nowrap'
                    }
                  >
                    Vadim
                  </th>
                  <td className="px-6 py-4">No</td>
                  <td className="px-6 py-4">69</td>
                </tr>
                <tr className={'border-b text-center'}>
                  <th
                    scope="row"
                    className={
                      'px-6 py-4 font-medium text-secondary-900 whitespace-nowrap'
                    }
                  >
                    Danil
                  </th>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">-69</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="">
            <div className="relative">
              <ImageCustom
                src={'/images/other/Cartographers_game_field.png'}
                alt={'Game field'}
                className="relative border-2 border-secondary-900"
                width={600}
              />
              <div className="grid grid-cols-11 absolute top-[166px] left-12 z-10">
                {/* top-40 left-12 */}
                {grid.map((row, indexRow) =>
                  row.map((cell, indexCell) => (
                    <div
                      key={`${indexRow} + ${indexCell}`}
                      className="w-[46px] h-[46px] hover:bg-primary-100 opacity-70"
                      onClick={() =>
                        console.log('indexRow,indexCell:', indexRow, indexCell)
                      }
                    />
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 h-fit">
            <div className="flex">
              <div>
                <span>Current card</span>
                <ImageCustom
                  src="/images/cards/card_1.png"
                  width={200}
                  alt="Current card"
                />
              </div>
              <div>
                <span>Previous card</span>
                <ImageCustom
                  src="/images/cards/card_3.png"
                  width={200}
                  alt="Current card"
                />
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="w-40">
                <Button>Reset</Button>
              </div>
              <div className="w-40">
                <Button>Submit</Button>
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
