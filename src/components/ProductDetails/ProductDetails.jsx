
import './ProductDetails.css';



function ProductDetails({ product, addToCart, isProductInCart }) {


  return (
    <div className="ProductDetails">
      { !!product ? (
        <div className="product-container">
          <img src={product.image} alt="example item" />
          <div className="info-wrapper">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <hr />
          </div>
          <div className="price-container">
            <b>Price: {product.price} €</b>
            {isProductInCart
              ? <button type="button" id='inCartBtn' disabled={true}>In cart</button>
              : <button type="button" id='addBtn' onClick={() => addToCart(product.id)}>Add to cart</button>
            }
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default ProductDetails;