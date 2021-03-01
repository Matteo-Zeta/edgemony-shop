import './Header.css';

function Header(props) {
  return <header className="Header">
    <img id="logo" src={props.imageSrc} alt='logo' />
    <button>Get started</button>
    <div>
      <span>Docenti</span>
      <span>Digital marketing</span>
      <span>Sviluppo</span>
    </div>
  </header>
}

export default Header;