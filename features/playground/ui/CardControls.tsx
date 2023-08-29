'use client';

import { Dispatch, SetStateAction } from 'react';
import { ICardMatrix, IGameCardData, IGameCardType } from '@/shared/api';
import SelectMatrixShape from './SelectMatrixShape';
import SelectMatrixType from './SelectMatrixType';

interface CardControlsProps {
  cardData: IGameCardData | null;
  setCardData: Dispatch<SetStateAction<IGameCardData | null>>;
}

const CardControls = ({ cardData, setCardData }: CardControlsProps) => {
  const changeCardDataType = (type: IGameCardType) => {
    cardData && setCardData({ ...cardData, type });
  };

  const changeCardDataMatrix = (matrix: ICardMatrix) => {
    cardData && setCardData({ ...cardData, matrix });
  };

  if (cardData && cardData.card && cardData.matrix) {
    return (
      <>
        <SelectMatrixType
          card={cardData.card}
          cardType={cardData.type}
          changeCardDataType={changeCardDataType}
        />
        <SelectMatrixShape
          card={cardData.card}
          matrix={cardData.matrix}
          changeCardDataMatrix={changeCardDataMatrix}
        />
      </>
    );
  } else {
    return null;
  }
};

export default CardControls;
