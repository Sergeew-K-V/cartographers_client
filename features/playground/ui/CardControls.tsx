'use client';

import { Dispatch, SetStateAction } from 'react';
import { IGameCardData } from '@/shared/api';
import { Button, ImageCustom } from '@/shared/ui';

interface CardControlsProps {
  cardData: IGameCardData | null;
  setCardData: Dispatch<SetStateAction<IGameCardData | null>>;
}

const CardControls = ({ cardData, setCardData }: CardControlsProps) => {
  const rotateCardMatrix = (direction: 'left' | 'right') => {
    if (cardData && cardData.matrix) {
      const matrix = cardData.matrix;
      if (direction === 'left') {
        const result = matrix[0]
          .map((_, colIndex) => matrix.map((row) => row[colIndex]))
          .reverse();
        setCardData({ ...cardData, matrix: result });
      } else if (direction === 'right') {
        const result = matrix[0]
          .map((_, colIndex) => matrix.map((row) => row[colIndex]))
          .map((row) => row.reverse());
        setCardData({ ...cardData, matrix: result });
      }
    }
  };

  const mirrorCardMatrix = () => {
    if (cardData && cardData.matrix) {
      const result = cardData.matrix.map((row) => row.slice().reverse());
      setCardData({ ...cardData, matrix: result });
    }
  };
  if (cardData && cardData.card && cardData.matrix) {
    return (
      <div className="mt-4">
        <div className="flex">
          <div className="w-44 m-4 ml-0">
            <Button
              className="primary-button flex justify-evenly items-center"
              onClick={() => rotateCardMatrix('left')}
            >
              <ImageCustom
                src="/images/other/rotate-left.png"
                alt="rotate-left"
                className="w-8"
              />
              <span>Rotate left</span>
            </Button>
          </div>
          <div className="w-44 m-4 ml-0">
            <Button
              className="primary-button flex justify-evenly items-center"
              onClick={() => rotateCardMatrix('right')}
            >
              <ImageCustom
                src="/images/other/rotate-right.png"
                alt="rotate-right"
                className="w-8"
              />
              <span>Rotate right</span>
            </Button>
          </div>
        </div>
        <div className="w-44 m-4 ml-0 row-start-1">
          <Button
            className="primary-button flex justify-evenly items-center"
            onClick={mirrorCardMatrix}
          >
            <ImageCustom
              src="/images/other/flip.png"
              alt="rotate-right"
              className="w-8"
            />
            <span>Mirror</span>
          </Button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CardControls;
