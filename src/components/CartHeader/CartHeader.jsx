import CartIcon from "../../Icon/300ppi/cart-icon.png";
import { formatPrice } from "../../services/utils";
import { Link } from "react-router-dom";
import './CartHeader.css';


function CartHeader({cartTotalPrice, cartSize }) {


  return (
    <div className="CartHeader">
      { !!cartTotalPrice && <b>{formatPrice(cartTotalPrice)}</b>} 
      <div className="CartIcon-wrapper">
        { !!cartSize && <div className="number-container"><b>{cartSize}</b></div> }
        <Link to='/cart'>
        <img src={CartIcon} alt="cart icon"/>
        </Link> 
      </div>
    </div>
  )
}

export default CartHeader;