import { IUserGameData } from '@/shared/api';

const countScore = (playerData: IUserGameData) => {
  let totalPoints = 0;
  playerData.points.forEach((seasonList) => {
    const [seasonFirst, seasonSecond, coins, enemy] = seasonList;
    totalPoints += seasonFirst + seasonSecond + coins - enemy;
  });

  return totalPoints || '';
};

export default countScore;
