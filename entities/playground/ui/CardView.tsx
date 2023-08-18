import { IGameCard } from '@/shared/api';
import { ImageCustom } from '@/shared/ui';

interface CardViewProps {
  currentCard: IGameCard | null;
  poolOfCardsNumber: number;
  playedCards: string[];
}

const CardView = ({
  currentCard,
  poolOfCardsNumber,
  playedCards,
}: CardViewProps) => {
  return (
    <>
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <span className="uppercase font-bold text-xl">Current card</span>
        <ImageCustom
          src={
            currentCard
              ? `/images/cards/${currentCard.img}`
              : '/images/other/explore_back.jpg'
          }
          width={600}
          height={600}
          className="w-52"
          alt="Current card"
        />
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <span className="font-bold">Previous card</span>
          <ImageCustom
            src={
              playedCards[playedCards.length - 1] ||
              '/images/other/explore_back.jpg'
            }
            width={200}
            height={200}
            className="w-32 hover:animate-wiggle"
            alt="Previous card"
          />
        </div>
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <span className="font-bold">
            Remaining cards in the deck{' '}
            {currentCard
              ? poolOfCardsNumber - playedCards.length - 1
              : poolOfCardsNumber - playedCards.length}
            /{poolOfCardsNumber}
          </span>
          <ImageCustom
            src="/images/other/explore_back.jpg"
            width={600}
            height={600}
            className="w-32"
            alt="Previous card"
          />
        </div>
      </div>
    </>
  );
};

export default CardView;
