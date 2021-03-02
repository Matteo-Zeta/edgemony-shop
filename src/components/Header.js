import './Header.css';

function Header(props) {
  return <header className="Header">
    <img id="logo" src={props.imageSrc} alt='logo' />
    <div>
      <span>Abbigliamento</span>
      <span>Elettronica</span>
      <span>Accessori</span>
    <strong>ACCEDI</strong>
    </div>
  </header>
}

export default Header;