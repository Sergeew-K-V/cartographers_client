'use client';

import { useState } from 'react';
import { SeasonsCounter } from '@/entities/playground';
import { IGameCardData, IUserGameData } from '@/shared/api';
import { countScore } from '@/shared/lib';
import { ImageCustom } from '@/shared/ui';
import { renderCoins } from '../utils';
import MatrixCursor from './MatrixCursor';

interface PlaygroundFieldProps {
  playerData: IUserGameData;
  cardData: IGameCardData | null;
  setIsVisibleMatrixCursor: (state: boolean) => void;
  isVisibleMatrixCursor: boolean;
  matrixHandler: (row: number, column: number) => void;
}

const PlaygroundField = ({
  playerData,
  matrixHandler,
  cardData,
  isVisibleMatrixCursor,
  setIsVisibleMatrixCursor,
}: PlaygroundFieldProps) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const changeCursorPositionHandler = (event: React.MouseEvent) => {
    setCursorPos({ x: event.clientX, y: event.clientY });
  };
  return (
    <>
      <div className="relative" onMouseMove={changeCursorPositionHandler}>
        <ImageCustom
          src={'/images/other/Cartographers_game_field.png'}
          alt={'Game field'}
          className="relative border-2 border-secondary-900"
          width={600}
        />
        <div
          className={
            'grid grid-cols-11 absolute top-[165px] left-12 z-10 ' +
            (isVisibleMatrixCursor ? 'cursor-none' : '')
          }
          onMouseEnter={() =>
            cardData !== null && setIsVisibleMatrixCursor(true)
          }
          onMouseLeave={() =>
            cardData !== null && setIsVisibleMatrixCursor(false)
          }
        >
          {playerData.gameField.map((row, indexRow) =>
            row.map((cell, indexColumn) => (
              <ImageCustom
                key={`${indexRow} + ${indexColumn}`}
                src={`/images/type_card/${cell.type}.png`}
                alt={cell.type + '.png'}
                className={
                  'w-[46px] h-[46px] ' +
                  (!isVisibleMatrixCursor
                    ? 'hover:scale-[1.08] hover:border-2 hover:border-secondary-900 hover:border-dashed'
                    : '')
                }
                onClick={() => matrixHandler(indexRow, indexColumn)}
              />
            ))
          )}
        </div>
        <div className="absolute top-[50px] left-[37px] z-10 uppercase whitespace-nowrap font-bold text-primary-700">
          {playerData.nickname}
        </div>
        <div className="absolute top-[110px] left-[37px] z-10 uppercase whitespace-nowrap font-bold text-primary-700">
          {playerData.rang}
        </div>
        <div className="absolute bottom-[120px] left-[97px] z-10 w-[490px] h-[30px] grid grid-cols-15">
          {renderCoins(playerData.coins)}
        </div>
        <div className="absolute bottom-[35px] left-[25px] grid grid-cols-4 w-[480px] z-10 uppercase whitespace-nowrap font-bold text-secodary-700">
          {playerData.points.map((seasonList, index) => (
            <SeasonsCounter seasonsList={seasonList} key={index} />
          ))}
        </div>
        <div className="absolute w-[30px] text-center bottom-[60px] right-[47px] z-10 uppercase whitespace-nowrap font-bold text-secodary-700">
          {countScore(playerData)}
        </div>
      </div>
      {isVisibleMatrixCursor &&
        cardData?.matrix &&
        cardData?.matrix?.length !== 0 &&
        cardData.type && (
          <MatrixCursor
            matrix={cardData.matrix}
            position={cursorPos}
            isVisibleMatrixCursor={isVisibleMatrixCursor}
            selectedType={cardData.type}
            changeCursorPositionHandler={changeCursorPositionHandler}
          />
        )}
    </>
  );
};

export default PlaygroundField;
