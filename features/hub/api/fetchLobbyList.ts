import axios from 'axios';

const fetchLobbyList = async (token: string) => {
  return axios.get(process.env.NEXT_PUBLIC_SERVER_URL + '/get-lobby-list/', {
    headers: { Authorization: token },
  });
};

export default fetchLobbyList;
