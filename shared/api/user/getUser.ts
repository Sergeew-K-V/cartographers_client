import axios from 'axios';

const getUser = (token: string, userId: string) => {
  return axios.get(process.env.NEXT_PUBLIC_SERVER_URL + '/api/user/' + userId, {
    headers: { Authorization: token },
  });
};

export default getUser;
