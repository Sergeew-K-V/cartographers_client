'use client';

import { IGameCard, IGameCardType } from '@/shared/api';
import CardTypePreview from './CardTypePreview';

interface SelectMatrixTypeProps {
  card: IGameCard;
  cardType: IGameCardType;
  changeCardDataType: (type: string | null) => void;
}

const SelectMatrixType = ({
  card,
  cardType,
  changeCardDataType,
}: SelectMatrixTypeProps) => {
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
      return 'game-card-type-position-1-enemy';
    if (card.type.length === 1) return 'game-card-type-position-1';
    if (card.type.length === 2) return 'game-card-type-position-2';
    if (card.type.length === 5) return 'game-card-type-position-5';
  };

  return (
    <div className={'absolute flex ' + countOfType()}>
      {card.type.map((type) => renderCardType(type))}
    </div>
  );
};

export default SelectMatrixType;
