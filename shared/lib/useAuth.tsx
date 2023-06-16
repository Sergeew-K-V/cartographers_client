import { useRouter } from 'next/navigation';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import { IUser } from '../api';

const STORAGE_NAME = 'Cartographers-token';
const STORAGE_DATA = JSON.parse(localStorage.getItem(STORAGE_NAME) as string);

const AuthContext = createContext<IAuthContext>({
  token: '',
  user: null,
  login: () => undefined,
  logout: () => undefined,
});
interface IAuthContext {
  token: string;
  login: (token: string, userObj: IUser) => void;
  logout: () => void;
  user: IUser | null;
}
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  const [token, setToken] = useState(
    STORAGE_DATA?.token ? STORAGE_DATA?.token : null
  );
  const [user, setUser] = useState<IUser | null>(
    STORAGE_DATA?.user ? STORAGE_DATA?.user : null
  );

  const login = useCallback(
    (token: string, userObj: IUser) => {
      setToken(token);
      setUser(userObj);
      push('/playground');

      localStorage.setItem(
        STORAGE_NAME,
        JSON.stringify({
          user: userObj,
          token,
        })
      );
    },
    [push]
  );

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    push('/login');

    localStorage.removeItem(STORAGE_NAME);
  }, [push]);

  return (
    <AuthContext.Provider value={{ login, logout, token, user }}>
      {children}
    </AuthContext.Provider>
  );
};
