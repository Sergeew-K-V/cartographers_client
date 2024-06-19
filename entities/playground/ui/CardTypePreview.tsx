import { IGameCard, IGameCardType } from '@/shared/api';
import { ImageCustom } from '@/shared/ui';

interface CardTypeProps {
  card: IGameCard;
  cardType: IGameCardType;
  changeCardDataType: (type: IGameCardType) => void;
  type: IGameCardType;
}

const CardTypePreview = ({
  card,
  changeCardDataType,
  type,
  cardType,
}: CardTypeProps) => {
  const isActiveType =
    type === cardType ? 'scale-[1.08] border-2 border-white border-dashed' : '';

  if (type === 'enemy' && card.type.length < 5) {
    return (
      <div
        key={type}
        className={
          'cursor-pointer' +
          ' ' +
          (card.type.length !== 5 ? 'w-[47px] h-[47px]' : 'w-[36px] h-[36px]') +
          ' ' +
          isActiveType
        }
      >
        <ImageCustom
          width={100}
          height={100}
          src={`/images/type_card/${type}.png`}
          alt={type}
          onClick={() => changeCardDataType(type)}
        />
      </div>
    );
  }

  if (card.type.length !== 5) {
    return (
      <div
        key={type}
        className={'cursor-pointer w-[48px] h-[48px]' + ' ' + isActiveType}
      >
        <ImageCustom
          width={100}
          height={100}
          src={`/images/type_card/${type}.png`}
          alt={type}
          onClick={() => changeCardDataType(type)}
        />
      </div>
    );
  }

  return (
    <div
      key={type}
      className={'cursor-pointer w-[42px] h-[42px]' + ' ' + isActiveType}
    >
      <ImageCustom
        width={100}
        height={100}
        src={`/images/type_card/${type}.png`}
        alt={type}
        onClick={() => changeCardDataType(type)}
      />
    </div>
  );
};

export default CardTypePreview;
