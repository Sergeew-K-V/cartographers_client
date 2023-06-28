import axios from 'axios';

const fetchUser = (userId: string | null, token: string | null) => {
  return axios.get(process.env.NEXT_PUBLIC_SERVER_URL + '/getUser/' + userId, {
    headers: { Authorization: token },
  });
};

export default fetchUser;
