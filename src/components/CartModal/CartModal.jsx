import "./CartModal.css";
import CartProduct from "../CartProduct/CartProduct"
import { formatPrice } from "../../services/utils";


function CartModal({ 
  isOpen, 
  setCartIsOpen, 
  cartSize, 
  cartTotalPrice, 
  productInCart, 
  removeFromCart, 
  setQuantity 
}) {
  return (
    <div className={"CartModal" + (isOpen ? " is-open" : "")}>
      <div
        className="Cartmodal-overlay"
        onClick={() => setCartIsOpen(false)}
      />
      <div className="Cartmodal-body">
        <header className="Cart-header">

          <h2>{!!cartSize ? "Your products:" : "The cart is empty"}</h2>
        </header>
        <div className="product-wrapper">
          {productInCart.map(product => (
            <CartProduct
            key={product.id}
            product={product}
            removeFromCart={removeFromCart}
            setQuantity={setQuantity}
            />
          ))}
        </div>
        <footer className="Cart-footer">
          <b>Total: {formatPrice(cartTotalPrice)}</b>
        </footer>
      </div>
    </div>
  );
}


export default CartModal;