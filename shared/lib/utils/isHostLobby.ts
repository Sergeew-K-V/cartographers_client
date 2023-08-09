import { ILobby } from '@/shared/api';

const isHostLobby = (lobby: ILobby, userId: string) => {
  return lobby.userList.find((user) => user._id === userId);
};

export default isHostLobby;
