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
            'grid grid-cols-11 absolute top-[19%] left-[8%] z-10 w-[84%] ' +
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
                  !isVisibleMatrixCursor
                    ? 'hover:scale-[1.08] hover:border-2 hover:border-secondary-900 hover:border-dashed'
                    : ''
                }
                onClick={() => matrixHandler(indexRow, indexColumn)}
              />
            ))
          )}
        </div>
        <div className="absolute top-[6%] left-[6%] 2xl:text-base text-xs z-10 uppercase whitespace-nowrap font-bold text-primary-700">
          {playerData.nickname}
        </div>
        <div className="absolute top-[13%] left-[6%] 2xl:text-base text-xs z-10 uppercase whitespace-nowrap font-bold text-primary-700">
          {playerData.rang}
        </div>
        <div className="absolute bottom-[14%] left-[16.2%] z-10 w-[81.7%] h-[3.5%] grid grid-cols-15">
          {renderCoins(playerData.coins)}
        </div>
        <div className="absolute bottom-[3.3%] 2xl:bottom-[4.3%] left-[3.6%] grid grid-cols-4 w-[80%] z-10 uppercase whitespace-nowrap font-bold text-secondary-700">
          {playerData.points.map((seasonList, index) => (
            <SeasonsCounter seasonsList={seasonList} key={index} />
          ))}
        </div>
        <div className="absolute w-[5%] text-center bottom-[7%] right-[7.9%] z-10 uppercase whitespace-nowrap font-bold text-secondary-700">
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
