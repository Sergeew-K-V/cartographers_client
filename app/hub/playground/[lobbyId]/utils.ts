import { IGameSession } from '@/shared/api';

const findPlayerById = (session: IGameSession, userId: string) => {
  return session?.players.find((player) => player._id === userId);
};

export default findPlayerById;
