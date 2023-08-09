import { ILobby } from '@/shared/api';

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

export default findLobbyByUserId;
