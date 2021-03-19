import { useState, useEffect } from 'react';
import { fetchProduct } from "../../services/api";
import { useParams } from "react-router-dom";
import ProductDetails from '../../components/ProductDetails/ProductDetails';


function Product({ addToCart, isInCart }) {
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
      <ProductDetails
        product={product}
        addToCart={addToCart}
        isInCart={isInCart}
      />
    ) : <div>null.</div>
}
export default Product