'use client';

import { Dispatch, SetStateAction } from 'react';
import { ICardMatrix, IGameCard, IGameCardData } from '@/shared/api';
import { isEqualMatrix } from '@/shared/lib';

interface SelectMatrixShapeProps {
  card: IGameCard;
  matrix: ICardMatrix;
  cardData: IGameCardData;
  setCardData: Dispatch<SetStateAction<IGameCardData | null>>;
}

const SelectMatrixShape = ({
  card,
  matrix,
  setCardData,
  cardData,
}: SelectMatrixShapeProps) => {
  const isMatrix = card.matrix.length !== 0;
  const isCoinsMatrix = card.coinsMatrix;

  const changeCardDataMatrix = (matrix: ICardMatrix) => {
    cardData && setCardData({ ...cardData, matrix });
  };

  const isActive = (matrix: ICardMatrix, cardMatrix: ICardMatrix) => {
    return isEqualMatrix(matrix, cardMatrix)
      ? 'border-2 border-white border-dashed '
      : '';
  };

  if (!isMatrix) {
    return null;
  }

  if (!isCoinsMatrix && card.type[0] === 'enemy') {
    return (
      <div
        className={
          'absolute top-[32.2%] left-[24.5%] w-[23.5%] h-[18.3%] border-2 border-white border-dashed'
        }
        onClick={() => changeCardDataMatrix(card.matrix)}
      />
    );
  }

  if (!isCoinsMatrix) {
    return (
      <div
        className={
          'absolute top-[41.1%] left-[3.2%] w-[44.7%] h-[9.8%] border-2 border-white border-dashed'
        }
        onClick={() => changeCardDataMatrix(card.matrix)}
      />
    );
  }

  return (
    <>
      {card.coinsMatrix && (
        <div
          className={
            'absolute top-[41.1%] left-[3.2%] w-[23%] h-[9.8%] cursor-pointer' +
            ' ' +
            isActive(matrix, card.coinsMatrix)
          }
          onClick={() =>
            card.coinsMatrix && changeCardDataMatrix(card.coinsMatrix)
          }
        />
      )}
      <div
        className={
          'absolute top-[41.1%] left-[25%] w-[23%] h-[9.8%] cursor-pointer' +
          ' ' +
          isActive(matrix, card.matrix)
        }
        onClick={() => changeCardDataMatrix(card.matrix)}
      />
    </>
  );
};

export default SelectMatrixShape;
