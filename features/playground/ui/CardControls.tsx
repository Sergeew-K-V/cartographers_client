'use client';

import { Dispatch, SetStateAction } from 'react';
import { IFieldCell, IGameCard } from '@/shared/api';
import { compareMatrix } from '@/shared/lib';
import { ImageCustom } from '@/shared/ui';

interface CardControlsProps {
  currentCard: IGameCard | null;
  setCardType: Dispatch<SetStateAction<string | null>>;
  cardType: string | null;
  setMatrix: Dispatch<SetStateAction<IFieldCell[][] | null>>;
  matrix: IFieldCell[][] | null;
}

const CardControls = ({
  currentCard,
  setCardType,
  cardType,
  matrix,
  setMatrix,
}: CardControlsProps) => {
  return (
    <>
      <div
        className={
          'absolute flex' +
          ' ' +
          (currentCard?.type.length === 1 && 'top-[16rem] left-[6.2rem]') +
          ' ' +
          (currentCard?.type.length === 5 &&
            'gap-x-[0.2rem] top-[16.3rem] left-[1.3rem]') +
          ' ' +
          (currentCard?.type.length === 2 &&
            'gap-x-[4rem] top-[16rem] left-[2.8rem]')
        }
      >
        {currentCard?.type.map((type) => {
          if (
            type === 'ruins' ||
            (type === 'enemy' && currentCard.type.length < 5)
          ) {
            return;
          }
          return (
            <div
              key={type}
              className={
                'cursor-pointer ' +
                ' ' +
                (currentCard.type.length !== 5
                  ? 'w-[42px] h-[42px]'
                  : 'w-[36px] h-[36px]') +
                ' ' +
                (type === cardType
                  ? 'scale-[1.08] border-2 border-white border-dashed'
                  : '')
              }
            >
              <ImageCustom
                width={100}
                height={100}
                src={`/images/type_card/${type}.png`}
                alt={type}
                onClick={() => setCardType(type)}
              />
            </div>
          );
        })}
      </div>
      {currentCard &&
        currentCard?.matrix.length !== 0 &&
        (currentCard?.coinsMatrix ? (
          <>
            <div
              className={
                'absolute top-[19rem] left-[0.8rem] w-[6.4rem] h-[4rem] cursor-pointer' +
                ' ' +
                (compareMatrix(
                  matrix as IFieldCell[][],
                  currentCard.coinsMatrix
                )
                  ? 'border-2 border-white border-dashed '
                  : '')
              }
              onClick={() =>
                setMatrix(currentCard.coinsMatrix as IFieldCell[][])
              }
            />
            <div
              className={
                'absolute top-[19rem] left-[7.8rem] w-[6.4rem] h-[4rem] cursor-pointer' +
                ' ' +
                (compareMatrix(matrix as IFieldCell[][], currentCard.matrix)
                  ? 'border-2 border-white border-dashed '
                  : '')
              }
              onClick={() => setMatrix(currentCard.matrix)}
            />
          </>
        ) : (
          <div
            className={
              'absolute top-[19rem] left-[0.8rem] w-[13.4rem] h-[4rem] border-2 border-white border-dashed '
            }
            onClick={() => setMatrix(currentCard.matrix)}
          />
        ))}
    </>
  );
};

export default CardControls;
