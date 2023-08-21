'use client';

import { IMatrix, IGameCard } from '@/shared/api';
import { compareMatrix } from '@/shared/lib';

interface SelectMatrixShapeProps {
  card: IGameCard;
  matrix: IMatrix;
  changeCardDataMatrix: (matrix: IMatrix) => void;
}

const SelectMatrixShape = ({
  card,
  matrix,
  changeCardDataMatrix,
}: SelectMatrixShapeProps) => {
  const isMatrix = card.matrix.length !== 0;
  const isCoinsMatrix = card.coinsMatrix;

  const isActive = (matrix: IMatrix, cardMatrix: IMatrix) => {
    return compareMatrix(matrix, cardMatrix)
      ? 'border-2 border-white border-dashed '
      : '';
  };

  if (!isMatrix) {
    return null;
  }

  if (!isCoinsMatrix && card.type[0] === 'enemy') {
    return (
      <div
        className={'game-card-matrix-enemy'}
        onClick={() => changeCardDataMatrix(card.matrix)}
      />
    );
  }

  if (!isCoinsMatrix) {
    return (
      <div
        className={'game-card-matrix-without-coinsMatrix'}
        onClick={() => changeCardDataMatrix(card.matrix)}
      />
    );
  }

  return (
    <>
      <div
        className={
          'game-card-matrix-shape-coinsMatrix' +
          ' ' +
          isActive(matrix, card.coinsMatrix as IMatrix)
        }
        onClick={() => changeCardDataMatrix(card.coinsMatrix as IMatrix)}
      />
      <div
        className={
          'game-card-matrix-shape-matrix' + ' ' + isActive(matrix, card.matrix)
        }
        onClick={() => changeCardDataMatrix(card.matrix)}
      />
    </>
  );
};

export default SelectMatrixShape;
