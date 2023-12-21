import {
  ICardMatrix,
  IGameCardType,
  IGameFieldCell,
  IGameFieldMatrix,
} from '@/shared/api';

const isAbleToSetMatrix = (
  matrix: ICardMatrix,
  gameField: IGameFieldMatrix,
  cardType: IGameCardType,
  column: number,
  row: number
) => {
  const newMatrix = [...gameField.map((row) => [...row])];

  for (let cardRow = 0; cardRow < matrix.length; cardRow++) {
    for (let cardCol = 0; cardCol < matrix[cardRow].length; cardCol++) {
      const rowIndex = row + cardRow;
      const cellIndex = column + cardCol;
      if (
        rowIndex >= newMatrix.length ||
        cellIndex >= newMatrix[rowIndex].length
      ) {
        console.log('out of matrix');
        return null;
      }
      if (
        rowIndex >= 0 &&
        rowIndex < newMatrix.length &&
        cellIndex >= 0 &&
        cellIndex < newMatrix[rowIndex].length
      ) {
        if (
          newMatrix[rowIndex][cellIndex].value === 1 &&
          matrix[cardRow][cardCol] !== 0
        ) {
          console.log('there is block');
          return null;
        }

        newMatrix[rowIndex][cellIndex] = matrix[cardRow][cardCol]
          ? { type: cardType, value: 1 }
          : newMatrix[rowIndex][cellIndex];
      }
    }
  }

  return newMatrix;
};

export default isAbleToSetMatrix;
