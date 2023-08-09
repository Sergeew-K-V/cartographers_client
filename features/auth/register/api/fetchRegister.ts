import axios from 'axios';
import { IUser } from '@/shared/api';

const fetchRegister = (registerUser: IUser, password: string) => {
  return axios.post(
    (process.env.NEXT_PUBLIC_SERVER_URL as string) + '/register',
    { ...registerUser, password }
  );
};

export default fetchRegister;
