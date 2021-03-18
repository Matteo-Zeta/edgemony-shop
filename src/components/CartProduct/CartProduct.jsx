import './CartProduct.css';
import { Link } from "react-router-dom";


function CartProduct({ product, removeFromCart, setQuantity }) {
  console.log(product)
  return (
    <div className="CartProduct">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="info-wrapper">
        <b>{product.title}</b>
        <span>€ {product.price}</span>
        <div className="quantity-wrapper">
          <button type="button" disabled={product.quantity < 2}
            onClick={() => setQuantity(product.id, product.quantity - 1)}>
            -
          </button>
          <p>{product.quantity}</p>
          <button type="button" onClick={() => setQuantity(product.id, product.quantity + 1)}>
            +
          </button>
        </div>
        <button type="button" id="RemoveBtn" onClick={() => removeFromCart(product.id)}>Remove from cart</button>
      </div>
    </div>
  )
}

export default CartProduct;