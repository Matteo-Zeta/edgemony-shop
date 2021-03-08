import CartIcon from "../Icon/300ppi/cart-icon.png";
import './Cart.css';

function Cart({priceInCart, itemsInCart}) {
  function getPrice() {
    let numb = priceInCart.toFixed(2);
    // let price = parseFloat(priceInCart)
    return numb
  }

  return (
    <div className="Cart">
      <div className="items-number">
        <div className="number-container">
        <b>{itemsInCart}</b>
        </div>
        <img src={CartIcon} alt="cart icon"/>
      </div>
      <b>{getPrice()}€</b>
    </div>
  )
}

export default Cart;