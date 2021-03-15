import "./Cart.css";
import CartProduct from "../CartProduct/CartProduct"
import { formatPrice } from "../../services/utils";


function Cart({ 
  cartTotalPrice, 
  productInCart, 
  removeFromCart, 
  setQuantity 
}) {
  return (
      <div className="Cart">
        <div className="Cart-content">
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
  );
}


export default Cart;