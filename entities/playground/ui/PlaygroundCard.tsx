import { ImageCustom } from '@/shared/ui';

interface PlaygroundCardProps {
  text: string;
}

function PlaygroundCard({ text }: PlaygroundCardProps) {
  return (
    <div className="flex flex-col gap-y-2 justify-center items-center">
      <span className="uppercase font-bold text-xl">{text}</span>
      <ImageCustom
        src="/images/cards/card_1.png"
        width={600}
        className="w-52"
        alt="Current card"
      />
    </div>
  );
}

export default PlaygroundCard;
