import { useAlertContext } from '../lib';
import Alert from './Alert';

const AlertList = () => {
  const { alerts, removeAlert } = useAlertContext();

  return (
    <div className="absolute z-50 right-0 top-0 w-fit max-w-md overflow-hidden max-h-full h-auto">
      {alerts.map((alert, index) => (
        <Alert
          key={index}
          type={alert.type as 'danger' | 'success'}
          text={alert.text}
          close={() => removeAlert(index)}
        />
      ))}
    </div>
  );
};

export default AlertList;
