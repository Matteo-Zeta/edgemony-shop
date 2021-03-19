
import './ProductDetails.css';



function ProductDetails({ product, addToCart, isInCart }) {


  return (
    <div className="ProductDetails">
      { !!product ? (
        <div className="product-container">
          <img src={product.image} alt="example item" />
          <div className="infoPrice-wrapper">
          <div className="info-wrapper">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <hr />
          </div>
          <div className="price-container">
            <b>Price: {product.price} €</b>
            {isInCart(product)
              ? <button type="button" id='inCartBtn' disabled={true}>In cart</button>
              : <button type="button" id='addBtn' onClick={() => addToCart(product)}>Add to cart</button>
            }
          </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default ProductDetails;