import { SeasonsCounter } from '@/entities/playground';
import { IGameSession } from '@/shared/api';
import { useAuth } from '@/shared/lib';
import { ImageCustom } from '@/shared/ui';

interface PlaygroundFieldProps {
  gameSession: IGameSession;
}

function PlaygroundField({ gameSession }: PlaygroundFieldProps) {
  const { getUserId } = useAuth();

  const playerData = gameSession.players.find(
    (player) => player._id === getUserId()
  );

  const renderCoins = (coins: number) => {
    const coinsArray = [];
    for (let i = 0; i < coins; i++) {
      coinsArray.push(
        <div key={i} className="coins-divider">
          \
        </div>
      );
    }
    return coinsArray;
  };

  return (
    <div className="relative">
      <ImageCustom
        src={'/images/other/Cartographers_game_field.png'}
        alt={'Game field'}
        className="relative border-2 border-secondary-900"
        width={600}
      />
      <div className="grid grid-cols-11 absolute top-[165px] left-12 z-10">
        {playerData &&
          playerData.gameField.map((row, indexRow) =>
            row.map((cell, indexCell) => (
              <ImageCustom
                key={`${indexRow} + ${indexCell}`}
                src={cell.image}
                alt="cell"
                className="w-[46px] h-[46px] hover:scale-[1.08] hover:border-2 hover:border-secondary-900 hover:border-dashed"
                onClick={() =>
                  console.log('indexRow,indexCell:', indexRow, indexCell)
                }
              />
            ))
          )}
      </div>
      <div className="absolute top-[50px] left-[37px] z-10 uppercase whitespace-nowrap font-bold text-primary-700">
        {playerData?.nickname}
      </div>
      <div className="absolute top-[110px] left-[37px] z-10 uppercase whitespace-nowrap font-bold text-primary-700">
        {playerData?.rang}
      </div>
      <div className="absolute bottom-[120px] left-[97px] z-10 w-[490px] h-[30px] grid grid-cols-15">
        {playerData && renderCoins(playerData.coins)}
      </div>
      <div className="absolute bottom-[35px] left-[25px] grid grid-cols-4 w-[480px] z-10 uppercase whitespace-nowrap font-bold text-secodary-700">
        {playerData?.points.map((seasonList, index) => (
          <SeasonsCounter seasonsList={seasonList} key={index} />
        ))}
      </div>
      <div className="absolute bottom-[60px] right-[47px] z-10 uppercase whitespace-nowrap font-bold text-secodary-700">
        120
      </div>
    </div>
  );
}

export default PlaygroundField;
