import axios from 'axios';

const fetchLobbyList = async (token: string) => {
  return axios.get(process.env.NEXT_PUBLIC_SERVER_URL + '/lobbies/', {
    headers: { Authorization: token },
  });
};

export default fetchLobbyList;
