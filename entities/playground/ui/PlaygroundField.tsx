import { useState } from 'react';
import { ImageCustom } from '@/shared/ui';
import { ISeason } from '../api';

interface PlaygroundFieldProps {
  grid: { id: number; image: string }[][];
  coinsData: number[];
}

const classDivider = 'text-3xl w-full flex justify-center';

function PlaygroundField({ grid, coinsData }: PlaygroundFieldProps) {
  const [gamePoints, setGamePoint] = useState<ISeason[]>([
    { season: 'A', score: 13 },
  ]);

  return (
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
  );
}

export default PlaygroundField;
