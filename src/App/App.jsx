import styles from './App.module.css'
import success from '../assets/success.svg'
import warning from '../assets/warning.svg'
import error from '../assets/error.svg'
import { Notifications } from '../components/Notifications';


export const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardList}>
        <Notifications variant="warning" message="Notification" icon={warning} className={styles.margin} color = "#FD9B00" />
        <Notifications variant="success" message="Notification" icon={success} className={styles.margin} color = "#14B985"/>
        <Notifications variant="error"   message="Notification"   icon={error}   className={styles.margin} color = "#FF3F54" />
      </div>
    </div>
  );
};

