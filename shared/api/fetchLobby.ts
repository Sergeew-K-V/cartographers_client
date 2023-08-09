import axios from 'axios';

const fetchLobby = async (token: string, lobbyId?: string) => {
  return axios.get(
    process.env.NEXT_PUBLIC_SERVER_URL + `/lobbies/${lobbyId ? lobbyId : ''}`,
    {
      headers: { Authorization: token },
    }
  );
};

export default fetchLobby;
