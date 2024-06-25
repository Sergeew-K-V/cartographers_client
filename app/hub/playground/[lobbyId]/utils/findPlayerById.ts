import { IGameSessionClient } from '@/shared/api';

const findPlayerById = (session: IGameSessionClient, playerId: string) => {
  return session?.players.find((player) => player.id === playerId);
};

export default findPlayerById;
