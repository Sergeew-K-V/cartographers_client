'use client';

import { useState } from 'react';
import { AlertList, Button, ImageCustom } from '@/shared/ui';
import { grid } from './config';

const classDivider = 'text-3xl w-full flex justify-center';

function PlaygroundPage(): JSX.Element {
  const [coinsData, setCoinsData] = useState<number[]>([]);
  return (
    <main className="min-h-[calc(100vh-64px)] p-6 bg-secondary-50">
      <div className="container min-w-full relative">
        <div className="grid grid-cols-3 w-full justify-items-center">
          <div className="grid grid-rows-4 max-h-fit">
            <div className="row-start-3">
              <div className="mb-2">Game stats</div>
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
                        'px-6 py-4 whitespace-nowrap font-bold text-primary-700'
                      }
                    >
                      Kirill
                    </th>
                    <td className="px-6 py-4">No</td>
                    <td className="px-6 py-4">120</td>
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
              <div className="absolute top-[50px] left-[37px] z-10 uppercase whitespace-nowrap font-bold text-primary-700">
                Kirill
              </div>
              <div className="absolute top-[110px] left-[37px] z-10 uppercase whitespace-nowrap font-bold text-primary-700">
                Legendary
              </div>
              <div className="absolute bottom-[120px] left-[97px] z-10 w-[490px] h-[30px] grid grid-cols-15">
                {coinsData.map((coin) => (
                  <div key={coin} className={classDivider}>
                    \
                  </div>
                ))}
              </div>
              <div className="absolute bottom-[35px] left-[30px] grid grid-cols-4 w-[480px] z-10 uppercase whitespace-nowrap font-bold text-primary-700">
                <div className="grid grid-cols-2 gap-2">
                  <div className="grid grid-cols-2 gap-x-2">
                    <span className="text-xl">A</span>
                    <span className="text-xl">B</span>
                    <span>13</span>
                    <span>14</span>
                  </div>
                  <div className="flex items-center">27</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="grid grid-cols-2 gap-x-2">
                    <span className="text-xl">B</span>
                    <span className="text-xl">C</span>
                    <span>13</span>
                    <span>14</span>
                  </div>
                  <div className="flex items-center">27</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="grid grid-cols-2 gap-x-2">
                    <span className="text-xl">C</span>
                    <span className="text-xl">D</span>
                    <span>13</span>
                    <span>14</span>
                  </div>
                  <div className="flex items-center">27</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="grid grid-cols-2 gap-x-2">
                    <span className="text-xl">D</span>
                    <span className="text-xl">A</span>
                    <span>13</span>
                    <span>14</span>
                  </div>
                  <div className="flex items-center">27</div>
                </div>
              </div>
              <div className="absolute bottom-[60px] right-[47px] z-10 uppercase whitespace-nowrap font-bold text-primary-700">
                120
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-4 h-full">
            <div className="flex flex-col gap-y-2 justify-center items-center">
              <span className="uppercase font-bold text-xl">Current card</span>
              <ImageCustom
                src="/images/cards/card_1.png"
                width={600}
                className="w-52"
                alt="Current card"
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-y-2 justify-center items-center">
                <span className="font-bold">Previous card</span>
                <ImageCustom
                  src="/images/cards/card_3.png"
                  width={200}
                  className="w-32 hover:animate-wiggle"
                  alt="Previous card"
                />
              </div>
              <div className="flex flex-col gap-y-2 justify-center items-center">
                <span className="font-bold">
                  Remaining cards in the deck 6/13
                </span>
                <ImageCustom
                  src="/images/other/explore_back.jpg"
                  width={600}
                  className="w-32"
                  alt="Previous card"
                />
              </div>
            </div>
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
