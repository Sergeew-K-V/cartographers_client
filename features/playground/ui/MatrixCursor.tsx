'use client';

import { useEffect, useRef } from 'react';
import { ICardMatrix, IGameCardType } from '@/shared/api';

interface MatrixCursorProps {
  matrix: ICardMatrix;
  position: { x: number; y: number };
  isVisibleMatrixCursor: boolean;
  selectedType: IGameCardType;
  changeCursorPositionHandler: (event: React.MouseEvent) => void;
}

const MatrixCursor = ({
  matrix,
  position,
  changeCursorPositionHandler,
  isVisibleMatrixCursor,
  selectedType,
}: MatrixCursorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellSize = 46;
  const rows = matrix.length;
  const cols = matrix[0].length;
  const width = cols * cellSize;
  const height = rows * cellSize;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const value = matrix[row][col];

        if (value === 1) {
          const image = new Image();
          image.src = `/images/type_card/${selectedType}.png`;
          image.onload = () =>
            ctx.drawImage(
              image,
              col * cellSize,
              row * cellSize,
              cellSize,
              cellSize
            );
        } else {
          ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
      }
    }
  }, [matrix, rows, cols, cellSize, selectedType]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        top: position.y - cellSize,
        left: position.x - cellSize,
      }}
      className={
        'absolute opacity-80 z-10 pointer-events-none ' +
        (isVisibleMatrixCursor ? 'cursor-none' : '')
      }
      onMouseMove={changeCursorPositionHandler}
    />
  );
};

export default MatrixCursor;
