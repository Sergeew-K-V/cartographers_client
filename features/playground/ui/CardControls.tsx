'use client';

import { Dispatch, SetStateAction } from 'react';
import {
  ICardMatrix,
  IGameCard,
  IGameCardData,
  IGameCardType,
} from '@/shared/api';
import SelectMatrixShape from './SelectMatrixShape';
import SelectMatrixType from './SelectMatrixType';

interface CardControlsProps {
  cardData: IGameCardData | null;
  setCardData: Dispatch<SetStateAction<IGameCardData | null>>;
}

const CardControls = ({ cardData, setCardData }: CardControlsProps) => {
  const changeCardDataType = (type: string | null) => {
    cardData && setCardData({ ...cardData, type });
  };

  const changeCardDataMatrix = (matrix: ICardMatrix | null) => {
    cardData && setCardData({ ...cardData, matrix });
  };

  if (cardData) {
    return (
      <>
        <SelectMatrixType
          card={cardData.card as IGameCard}
          cardType={cardData.type as IGameCardType}
          changeCardDataType={changeCardDataType}
        />
        <SelectMatrixShape
          card={cardData.card as IGameCard}
          matrix={cardData.matrix as ICardMatrix}
          changeCardDataMatrix={changeCardDataMatrix}
        />
      </>
    );
  } else {
    return null;
  }
};

export default CardControls;
