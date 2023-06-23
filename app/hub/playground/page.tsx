'use client';

import { AlertList, Button, ImageCustom } from '@/shared/ui';
import { grid } from './config';

function PlaygroundPage(): JSX.Element {
  return (
    <main className="min-h-[calc(100vh-64px)] p-6 bg-secondary-50">
      <div className="container min-w-full relative">
        <div className="grid grid-cols-3 w-full justify-items-center">
          <div className="grid grid-rows-4 max-h-fit">
            <div className="row-start-2">
              <div className="mb-2">Game stats</div>
              {/* <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-secondary-900 bg-secondary-50 min-w-fit shadow-2xl">
                  <h3>Player: Danil</h3>
                  <p>Score: 33</p>
                  <p>Ready: Yes</p>
                </div>
                <div className="border-2 border-secondary-900 bg-secondary-50 min-w-fit shadow-2xl">
                  <h3>Player: Vadim</h3>
                  <p>Score: 23</p>
                  <p>Ready: No</p>
                </div>
                <div className="border-2 border-secondary-900 bg-secondary-50 min-w-fit shadow-2xl">
                  <h3>Player: Test</h3>
                  <p>Score: 44</p>
                  <p>Ready: Yes</p>
                </div>
              </div> */}
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
          </div>
          <div className="">
            <div className="relative">
              <ImageCustom
                src={'/images/other/Cartographers_game_field.png'}
                alt={'Game field'}
                className="relative border-2 border-secondary-900"
                width={600}
              />
              <div className="grid grid-cols-11 absolute top-[165px] left-12 z-10">
                {grid.map((row, indexRow) =>
                  row.map((cell, indexCell) => (
                    <ImageCustom
                      key={`${indexRow} + ${indexCell}`}
                      src={cell.image}
                      alt="cell"
                      className="w-[46px] h-[46px] hover:scale-[1.08] hover:border-2 hover:border-secondary-900 hover:border-dashed"
                      onClick={() =>
                        console.log('indexRow,indexCell:', indexRow, indexCell)
                      }
                    />
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-4 h-full">
            <div className="flex flex-col justify-center items-center">
              <span className="uppercase font-bold text-xl">Current card</span>
              <ImageCustom
                src="/images/cards/card_1.png"
                width={200}
                alt="Current card"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold">Previous card</span>
              <ImageCustom
                src="/images/cards/card_3.png"
                width={200}
                className="w-32 hover:animate-wiggle"
                alt="Previous card"
              />
            </div>
            <div className="flex gap-x-4 items-center">
              <div className="w-40">
                <Button>Submit</Button>
              </div>
              <div className="w-40">
                <Button>Reset</Button>
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
