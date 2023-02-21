import styles from './App.module.css'
import { ButtonNotification } from '../components/ButtonNotification'



export const App = () => {
 return (
    <div className={styles.container}>
      <div className={styles.cardList}>
        <ButtonNotification variant="warning" className={styles.margin}>Notification</ButtonNotification>
        <ButtonNotification variant="success" className={styles.margin}>Notification</ButtonNotification>
        <ButtonNotification variant="error" className={styles.margin}>Notification</ButtonNotification>
      </div>
    </div>
  );
};

