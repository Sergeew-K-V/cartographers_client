import { IGameSessionClient } from '@/shared/api';

const findPlayerById = (session: IGameSessionClient, userId: string) => {
  return session?.players.find((player) => player._id === userId);
};

export default findPlayerById;
