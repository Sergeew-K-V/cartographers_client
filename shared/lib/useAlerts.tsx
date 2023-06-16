'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const defaultValue = {
  alerts: [],
  setAlert: () => undefined,
  removeAlert: () => undefined,
};

interface AlertContextType {
  removeAlert: (index: number) => void;
  setAlert: (alert: IAlert) => void;
  alerts: IAlert[];
}

const AlertContext = createContext<AlertContextType>({ ...defaultValue });

export const useAlertContext = () => useContext(AlertContext);
interface IAlert {
  type: 'danger' | 'success';
  text: string;
  onClose: (index: number) => void;
}
let timer: number;

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlerts] = useState<IAlert[]>([]);

  const setAlert = (alert: IAlert) => {
    setAlerts((alerts) => [...alerts, alert]);
  };

  const removeAlert = (index?: number) => {
    clearTimeout(timer);
    setAlerts((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (alerts.length) {
      timer = window.setTimeout(() => {
        removeAlert(0);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [alerts.length]);

  return (
    <AlertContext.Provider value={{ alerts, setAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
