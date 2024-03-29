import axios from 'axios';

const fetchLogin = (email: string, password: string) => {
  return axios.post(process.env.NEXT_PUBLIC_SERVER_URL + '/login', {
    email,
    password,
  });
};

export default fetchLogin;
