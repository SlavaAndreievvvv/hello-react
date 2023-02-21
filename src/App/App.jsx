import styles from './App.module.css'
import { Notification } from '../components/Notification'



export const App = () => {
 return (
    <div className={styles.container}>
      <div className={styles.cardList}>
        <Notification variant="warning" className={styles.margin}>Notification</Notification>
        <Notification variant="success" className={styles.margin}>Notification</Notification>
        <Notification variant="error" className={styles.margin}>Notification</Notification>
      </div>
    </div>
  );
};

