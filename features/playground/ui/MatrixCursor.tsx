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

    const imagePromises = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const value = matrix[row][col];
        if (value === 1) {
          const imagePromise = new Promise((resolve, reject) => {
            const image = new Image();
            image.src = `/images/type_card/${selectedType}.png`;
            image.onload = () => resolve(image);
            image.onerror = () =>
              reject(new Error(`Failed to load image: ${image.src}`));
          });
          imagePromises.push(imagePromise);
        } else {
          const imagePromise = new Promise((resolve, reject) => {
            const image = new Image();
            image.src = `/images/type_card/cell.png`;
            image.style.display = 'none';
            image.onload = () => resolve(image);
            image.onerror = () =>
              reject(new Error(`Failed to load image: ${image.src}`));
          });
          imagePromises.push(imagePromise);
        }
      }
    }

    Promise.all(imagePromises)
      .then((loadedImages) => {
        loadedImages.forEach((image, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          ctx.drawImage(
            image as CanvasImageSource,
            col * cellSize,
            row * cellSize,
            cellSize,
            cellSize
          );
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
        'absolute opacity-50 z-10 pointer-events-none ' +
        (isVisibleMatrixCursor ? 'cursor-none' : '')
      }
      onMouseMove={changeCursorPositionHandler}
    />
  );
};

export default MatrixCursor;
