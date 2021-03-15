import CartHeader from '../CartHeader/CartHeader'

import './Header.css';

function Header({imageSrc, cartSize, cartTotalPrice, setCartIsOpen }) {
  return (
  <header className="Header">
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
    <CartHeader
    cartSize={cartSize}
    cartTotalPrice={cartTotalPrice}
    setCartIsOpen={setCartIsOpen}
    />
  </header>
  )

}

export default Header;