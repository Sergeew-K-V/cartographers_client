import { ImageCustom } from '@/shared/ui';

function CardView() {
  return (
    <>
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <span className="uppercase font-bold text-xl">Current card</span>
        <ImageCustom
          src="/images/cards/card_1.png"
          width={600}
          className="w-52"
          alt="Current card"
        />
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <span className="font-bold">Previous card</span>
          <ImageCustom
            src="/images/cards/card_3.png"
            width={200}
            className="w-32 hover:animate-wiggle"
            alt="Previous card"
          />
        </div>
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <span className="font-bold">Remaining cards in the deck 6/13</span>
          <ImageCustom
            src="/images/other/explore_back.jpg"
            width={600}
            className="w-32"
            alt="Previous card"
          />
        </div>
      </div>
    </>
  );
}

export default CardView;
