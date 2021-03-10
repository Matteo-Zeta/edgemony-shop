import Cart from './Cart'

import './Header.css';

function Header({imageSrc, priceInCart, itemsInCart}) {
  return <header className="Header">
    <img id="logo" src={imageSrc} alt='logo' />
    {/* <div className="Header-info-wrapper">
      <span>Abbigliamento</span>
      <span>Elettronica</span>
      <span>Accessori</span>
      <Cart
      priceInCart={priceInCart}
      itemsInCart={itemsInCart}
      />
    <strong>ACCEDI</strong>
    </div> */}
          <Cart
      priceInCart={priceInCart}
      itemsInCart={itemsInCart}
      />
  </header>
}

export default Header;