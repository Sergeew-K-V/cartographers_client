import { Dispatch, SetStateAction } from 'react';
import { IGameCard, IGameCardData } from '@/shared/api';
import { ImageCustom } from '@/shared/ui';
import SelectMatrixShape from './SelectMatrixShape';
import SelectMatrixType from './SelectMatrixType';

interface CardViewProps {
  currentCard: IGameCard | null;
  poolOfCardsNumber: number;
  playedCards: string[];
  cardData: IGameCardData | null;
  setCardData: Dispatch<SetStateAction<IGameCardData | null>>;
}

const CardView = ({
  currentCard,
  poolOfCardsNumber,
  playedCards,
  cardData,
  setCardData,
}: CardViewProps) => {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-col gap-y-2 text-center shrink-0 basis-1/2">
        <span className="uppercase font-bold text-xl">Current card</span>
        <div>
          <ImageCustom
            src={
              currentCard
                ? `/images/cards/${currentCard.img}`
                : '/images/other/explore_back.jpg'
            }
            width={600}
            height={600}
            className="object-contain rounded-2xl"
            alt="Current card"
          />
          {cardData && cardData.card && cardData.matrix && (
            <SelectMatrixType
              card={cardData.card}
              cardType={cardData.type}
              setCardData={setCardData}
              cardData={cardData}
            />
          )}
          {cardData && cardData.card && cardData.matrix && (
            <SelectMatrixShape
              card={cardData.card}
              matrix={cardData.matrix}
              setCardData={setCardData}
              cardData={cardData}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="flex flex-col gap-y-2 text-center items-center">
          <span className="font-bold text-xl">Previous card</span>
          <div className="w-[65%]">
            <ImageCustom
              src={
                playedCards[playedCards.length - 1] ||
                '/images/other/explore_back.jpg'
              }
              width={600}
              height={600}
              className="rounded-2xl pointer-events-none object-contain h-full"
              alt="Previous card"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 text-center items-center">
          <span className="font-bold text-xl">
            Remaining cards in the deck{' '}
            {currentCard
              ? poolOfCardsNumber - playedCards.length - 1
              : poolOfCardsNumber - playedCards.length}
            /{poolOfCardsNumber}
          </span>
          <div className="w-[65%]">
            <ImageCustom
              src="/images/other/explore_back.jpg"
              width={600}
              height={600}
              className="rounded-2xl pointer-events-none object-contain h-full"
              alt="Previous card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardView;
