import { ILobby } from '@/shared/api';

const findLobbyByLobbyId = (list: ILobby[], lobbyId: string) => {
  const lobby = list.find((lobby) => lobby.id === lobbyId);
  return lobby;
};

export default findLobbyByLobbyId;
