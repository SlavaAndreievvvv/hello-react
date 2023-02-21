import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './Notification.module.css'
import successIcon from '../../assets/success.svg'
import warningIcon from '../../assets/warning.svg'
import errorIcon from '../../assets/error.svg'

export const Notification = ({variant, className, children}) => {
  return (
    <div className={clsx(styles.container, styles[variant], className)}>
      <img src={icons[variant]} alt={variant} className={styles.icon} />
      <span className={styles.message}>{children}</span>
    </div>
  )
};

Notification.propTypes = {
  className: PropTypes.string,
  className: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['warning', 'success', 'error'])
}

Notification.defaultProps = {
  variant: 'success'
}

const icons = {
  success: successIcon,
  warning: warningIcon,
  error: errorIcon
}