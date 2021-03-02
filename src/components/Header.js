import './Header.css';

function Header(props) {
  return <header className="Header">
    <img id="logo" src={props.imageSrc} alt='logo' />
    <div>
      <span>Donna</span>
      <span>Uomo</span>
      <span>Bambini</span>
    <strong>ACCEDI</strong>
    </div>
  </header>
}

export default Header;