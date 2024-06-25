import { ILobby } from '@/shared/api';

const isHostLobby = (lobby: ILobby, playerId: string) => {
  return lobby.players.find((player) => player.id === playerId);
};

export default isHostLobby;
