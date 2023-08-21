import { SeasonsCounter } from '@/entities/playground';
import {
  IGameCardData,
  IGameCardType,
  IMatrix,
  IUserGameData,
} from '@/shared/api';
import { countScore } from '@/shared/lib';
import { ImageCustom } from '@/shared/ui';
import { renderCoins } from '../utils';

interface PlaygroundFieldProps {
  playerData: IUserGameData;
  cardData: IGameCardData | null;
  targetGameField: IMatrix;
  setTargetGameField: (data: IMatrix) => void;
}

const PlaygroundField = ({
  playerData,
  cardData,
  targetGameField,
  setTargetGameField,
}: PlaygroundFieldProps) => {
  //need fix types, gameField, cause gameField correctly must be type of IGameCardType, but now it's IFieldCell with 1,0
  function replaceElements(
    indexRow: number,
    indexCell: number,
    type: IGameCardType,
    matrix: IMatrix,
    gameField: IMatrix | IGameCardType[][]
  ) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const rowIndex = indexRow + i;
        const cellIndex = indexCell + j;
        if (
          rowIndex >= 0 &&
          rowIndex < gameField.length &&
          cellIndex >= 0 &&
          cellIndex < gameField[rowIndex].length
        ) {
          gameField[rowIndex][cellIndex] = matrix[i][j]
            ? type
            : gameField[rowIndex][cellIndex];
        }
      }
    }
    setTargetGameField([...gameField] as IMatrix);
  }
  return (
    <div className="relative">
      <ImageCustom
        src={'/images/other/Cartographers_game_field.png'}
        alt={'Game field'}
        className="relative border-2 border-secondary-900"
        width={600}
      />
      <div className="grid grid-cols-11 absolute top-[165px] left-12 z-10">
        {playerData.gameField.map((row, indexRow) =>
          row.map((cell, indexCell) => (
            <ImageCustom
              key={`${indexRow} + ${indexCell}`}
              src={`/images/type_card/${cell}.png`}
              alt={'cell'}
              className="w-[46px] h-[46px] hover:scale-[1.08] hover:border-2 hover:border-secondary-900 hover:border-dashed"
              onClick={() =>
                cardData &&
                replaceElements(
                  indexRow,
                  indexCell,
                  cardData.type as IGameCardType,
                  cardData.matrix as IMatrix,
                  targetGameField as IMatrix
                )
              }
            />
          ))
        )}
      </div>
      <div className="absolute top-[50px] left-[37px] z-10 uppercase whitespace-nowrap font-bold text-primary-700">
        {playerData.nickname}
      </div>
      <div className="absolute top-[110px] left-[37px] z-10 uppercase whitespace-nowrap font-bold text-primary-700">
        {playerData.rang}
      </div>
      <div className="absolute bottom-[120px] left-[97px] z-10 w-[490px] h-[30px] grid grid-cols-15">
        {renderCoins(playerData.coins)}
      </div>
      <div className="absolute bottom-[35px] left-[25px] grid grid-cols-4 w-[480px] z-10 uppercase whitespace-nowrap font-bold text-secodary-700">
        {playerData.points.map((seasonList, index) => (
          <SeasonsCounter seasonsList={seasonList} key={index} />
        ))}
      </div>
      <div className="absolute w-[30px] text-center bottom-[60px] right-[47px] z-10 uppercase whitespace-nowrap font-bold text-secodary-700">
        {countScore(playerData)}
      </div>
    </div>
  );
};

export default PlaygroundField;
