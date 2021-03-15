import CartIcon from "../../Icon/300ppi/cart-icon.png";
import './CartHeader.css';


function CartHeader({cartTotalPrice, cartSize, setCartIsOpen}) {


  return (
    <div className="CartHeader">
      { !!cartTotalPrice && <b>{cartTotalPrice} €</b>} 
      <div className="CartIcon-wrapper">
        { !!cartSize && <div className="number-container"><b>{cartSize}</b></div> }     
        <img src={CartIcon} onClick={()=>setCartIsOpen(true)} alt="cart icon"/>
      </div>
    </div>
  )
}

export default CartHeader;