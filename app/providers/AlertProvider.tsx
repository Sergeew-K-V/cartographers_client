'use client';

import { ReactNode, useState, useEffect } from 'react';
import { IAlert } from '@/shared/api';
import { AlertContext } from '@/shared/lib';

let timer: number;

const AlertProvider = ({ children }: { children: ReactNode }) => {
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

export default AlertProvider;
