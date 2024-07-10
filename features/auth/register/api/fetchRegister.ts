import axios from 'axios';
import { IUser } from '@/shared/api';

const fetchRegister = (
  registerUser: Omit<IUser, 'id' | 'rang' | 'gameStats'>,
  password: string
) => {
  return axios.post(process.env.NEXT_PUBLIC_SERVER_URL + '/api/register', {
    ...registerUser,
    password,
  });
};

export default fetchRegister;
