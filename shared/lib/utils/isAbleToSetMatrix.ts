import { ICardMatrix, IGameFieldMatrix } from '@/shared/api';

const isAbleToSetMatrix = (
  matrix: ICardMatrix,
  gameField: IGameFieldMatrix,
  column: number,
  row: number
) => {
  for (let cardRow = 0; cardRow < matrix.length; cardRow++) {
    for (let cardCol = 0; cardCol < matrix[cardRow].length; cardCol++) {
      const rowIndex = row + cardRow;
      const cellIndex = column + cardCol;
      if (
        rowIndex >= 0 &&
        rowIndex < gameField.length &&
        cellIndex >= 0 &&
        cellIndex < gameField[rowIndex].length
      ) {
        if (
          gameField[rowIndex][cellIndex].value === 1 &&
          matrix[cardRow][cardCol] !== 0
        ) {
          return false;
        }

        return true;
      }
    }
  }
};

export default isAbleToSetMatrix;
