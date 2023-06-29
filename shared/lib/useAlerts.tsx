import { createContext, useContext } from 'react';
import { IAlert } from '../api';

interface AlertContextType {
  removeAlert: (index: number) => void;
  setAlert: (alert: IAlert) => void;
  alerts: IAlert[];
}

const defaultValue = {
  alerts: [],
  setAlert: () => undefined,
  removeAlert: () => undefined,
};

export const AlertContext = createContext<AlertContextType>({
  ...defaultValue,
});

export const useAlert = () => useContext(AlertContext);
