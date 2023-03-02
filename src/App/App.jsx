import styles from "./App.module.css";
import { ButtonNotification } from "../components/ButtonNotification";

export const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardList}>
        <ButtonNotification
          onClick={() => alert("warning")}
          variant="warning"
          className={styles.margin}
        >
          Notification
        </ButtonNotification>
        <ButtonNotification
          onClick={() => alert("success")}
          variant="success"
          className={styles.margin}
        >
          Notification
        </ButtonNotification>
        <ButtonNotification
          onClick={() => alert("error")}
          variant="error"
          className={styles.margin}
        >
          Notification
        </ButtonNotification>
      </div>
    </div>
  );
};
