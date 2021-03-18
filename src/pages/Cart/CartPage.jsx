import { formatPrice } from "../../services/utils";
import CartProduct from '../../components/CartProduct/CartProduct'
import "./CartPage.css"

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