import { IMatrix } from '@/shared/api';

const compareMatrix = (firstMatrix: IMatrix, secondMatrix: IMatrix) => {
  if (firstMatrix.length !== secondMatrix.length) {
    return false;
  }

  for (let i = 0; i < firstMatrix.length; i++) {
    if (firstMatrix[i].length !== secondMatrix[i].length) {
      return false;
    }

    for (let j = 0; j < firstMatrix[i].length; j++) {
      if (firstMatrix[i][j] !== secondMatrix[i][j]) {
        return false;
      }
    }
  }

  return true;
};

export default compareMatrix;
