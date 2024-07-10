import axios from 'axios';

const getLobbies = async (token: string) => {
  return axios.get(process.env.NEXT_PUBLIC_SERVER_URL + `/api/lobbies`, {
    headers: { Authorization: token },
  });
};

export default getLobbies;
