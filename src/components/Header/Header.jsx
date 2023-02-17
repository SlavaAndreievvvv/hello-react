import './Header.css'

export const Header = ({}) => {
  return <header className="Header">
    <nav className="Header__navigation">
      <a className="Header__link" href="#">Home</a>
      <a className="Header__link" href="#">About</a>
      <a className="Header__link" href="#">Contacts</a>
    </nav>
  </header>
}