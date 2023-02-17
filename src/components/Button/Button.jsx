import './Button.css'

export const Button = ({background, color, onPress, className, children}) => {
  const sayHello = () => alert('Hello');

  return <button
          style={{color, background}}
          onClick={onPress}
          className={`Button ${className}`}>
          {children}
        </button>
};