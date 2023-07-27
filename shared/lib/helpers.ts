import { ILobby } from '../api';

const findLobbyByLobbyId = (list: ILobby[], lobbyId: string) => {
  const lobby = list.find((lobby) => lobby.id === lobbyId);
  return lobby;
};

const findLobbyByUserId = (list: ILobby[], userId: string) => {
  const currentLobby = list.find((lobby) => {
    const userLobby = lobby.userList.find((user) => {
      if (user._id === userId) {
        return user;
      }
    });
    if (userLobby) {
      return userLobby;
    }
  });
  return currentLobby;
};

export { findLobbyByLobbyId, findLobbyByUserId };
