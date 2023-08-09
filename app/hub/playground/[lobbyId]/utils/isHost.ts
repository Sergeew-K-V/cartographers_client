import { IGameSession, IUserGameData } from '@/shared/api';

const isHost = (gameSession: IGameSession, playerData: IUserGameData) => {
  return gameSession.host === playerData.nickname;
};

export default isHost;
