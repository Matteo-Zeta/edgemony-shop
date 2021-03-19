import { formatPrice } from "../../services/utils";
import CartProduct from '../../components/CartProduct/CartProduct'
import { ReactComponent as EmptyCart} from "../../Icon/EmptyCart.svg";
import "./CartPage.css"



function Cart({
  cartTotalPrice,
  productInCart,
  removeFromCart,
  setQuantity,

}) {
  const cartSize = productInCart.length;
  let cartTitle = (!!cartSize ? "Your products:" : "The cart is empty")
  return (
    <div className="Cart">
      <h1>{cartTitle}</h1>
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
        {cartSize
          ? <b>Total: {formatPrice(cartTotalPrice)}</b>
          : <EmptyCart id="cartsvg" />}

      </footer>
    </div>
  );
}


export default Cart;