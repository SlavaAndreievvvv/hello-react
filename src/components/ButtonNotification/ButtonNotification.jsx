import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./ButtonNotification.module.css";
import successIcon from "../../assets/success.svg";
import warningIcon from "../../assets/warning.svg";
import errorIcon from "../../assets/error.svg";

export const ButtonNotification = ({
  variant,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.container, styles[variant], className)}
    >
      <img src={icons[variant]} alt={variant} className={styles.icon} />
      <span className={styles.message}>{children}</span>
    </button>
  );
};

ButtonNotification.propTypes = {
  className: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["warning", "success", "error"]),
  onClick: PropTypes.func.isRequired,
};

ButtonNotification.defaultProps = {
  variant: "success",
};

const icons = {
  success: successIcon,
  warning: warningIcon,
  error: errorIcon,
};
