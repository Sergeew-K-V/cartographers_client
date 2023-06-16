import { ReactNode, createContext, useContext, useState } from 'react';
import { IUser } from '../api';

interface IAuthContext {
  token: string;
  setToken: (token: string) => void;
  setUser: (user: IUser) => void;
  user: IUser;
}

const AuthContext = createContext<IAuthContext>({
  token: '',
  setToken: () => undefined,
  setUser: () => undefined,
  user: { email: '', password: '' },
});

const useAuthContext = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string>('');
  const [user, setUser] = useState<IUser>({ email: '', password: '' });

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
