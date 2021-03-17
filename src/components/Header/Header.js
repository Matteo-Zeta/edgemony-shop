import CartHeader from '../CartHeader/CartHeader'
import {
  Link
} from "react-router-dom";

import './Header.css';

function Header({ imageSrc, cartSize, cartTotalPrice, openCartModal }) {
  return (
    <header className="Header">
      <Link to='/'>
        <img id="logo" src={imageSrc} alt='logo' />
      </Link>
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
        openCartModal={openCartModal}
      />
    </header>
  )

}

export default Header;