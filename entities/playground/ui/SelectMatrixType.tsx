'use client';

import { Dispatch, SetStateAction } from 'react';
import { IGameCard, IGameCardData, IGameCardType } from '@/shared/api';
import CardTypePreview from './CardTypePreview';

interface SelectMatrixTypeProps {
  card: IGameCard;
  cardType: IGameCardType;
  cardData: IGameCardData;
  setCardData: Dispatch<SetStateAction<IGameCardData | null>>;
}

const SelectMatrixType = ({
  card,
  cardType,
  cardData,
  setCardData,
}: SelectMatrixTypeProps) => {
  const changeCardDataType = (type: IGameCardType) => {
    cardData && setCardData({ ...cardData, type });
  };

  const renderCardType = (type: IGameCardType) => {
    switch (type) {
      case 'ruins':
        return null;
      default:
        return (
          <CardTypePreview
            card={card}
            cardType={cardType}
            changeCardDataType={changeCardDataType}
            key={type}
            type={type}
          />
        );
    }
  };

  const countOfType = () => {
    if (card.type.length === 1 && card.type[0] === 'enemy')
      return 'top-[38%] left-[9.4%]';
    if (card.type.length === 1) return 'top-[15.3vw] left-[21.6%]';
    if (card.type.length === 2) return 'gap-x-[4.2vw] top-[34.4%] left-[10.7%]';
    if (card.type.length === 5) return 'gap-x-[0.35vw] top-[34.7%] left-[5.8%]';
  };

  return (
    <div className={'absolute flex ' + countOfType()}>
      {card.type.map((type) => renderCardType(type))}
    </div>
  );
};

export default SelectMatrixType;
