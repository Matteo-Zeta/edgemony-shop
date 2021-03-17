import { useState, useEffect } from 'react';
import { fetchProduct } from "../services/api";
import {
  useParams
} from "react-router-dom";


function Product({addToCart, isInCart}) {
  let { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(productId)
      .then((product) => {
        setProduct(product);
        console.log(product)
      })
  }, [productId])

  return product ?
    (
      <div className="ProductDetails">
        { !!product ? (
          <div className="product-container">
            <img src={product.image} alt="example item" />
            <div className="info-wrapper">
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <hr />
            </div>
            <div className="price-container">
              <b>Price: {product.price} €</b>
              { isInCart(product)
              ? <button type="button" id='inCartBtn' disabled={true}>In cart</button>
              : <button type="button" id='addBtn' onClick={() => addToCart(product)}>Add to cart</button>
            }
            </div>
          </div>
        ) : null}
      </div>
    ) : <div>null.</div>
}
export default Product