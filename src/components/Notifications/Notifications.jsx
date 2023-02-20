import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './Notifications.module.css'

export const Notifications = ({message, icon, className, color}) => {
  return (
    <div style={{backgroundColor: color}} className={clsx(styles.container, className)}>
      <img src={icon} alt={message} className={styles.icon} />
      <span className={styles.message}>{message}</span>
    </div>
  )
};

Notifications.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf(['warning', 'success', 'error'])
}