import { useState, useEffect } from 'react';
import { fetchProduct } from "../../services/api";
import { useParams } from "react-router-dom";
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import Loader from './../../components/Loader/Loader';
import Errorbanner from './../../components/ErrorBanner/Errorbanner';

import "./Product.css";


function Product({ addToCart, isInCart }) {
  let { productId } = useParams();
  const [product, setProduct] = useState(null);

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')
  const [retryCall, setRetryCall] = useState(false)

  useEffect(() => {
    setIsError('')
    setIsLoading(true)
    fetchProduct(productId)
      .then((product) => {
        setProduct(product);
        console.log(product)
      })
      .catch((err) => setIsError(err.message))
      .finally(() => setIsLoading(false));
  }, [productId, retryCall])

  return (
    <main className="ProductPage">
      <Loader
        isLoading={isLoading}
      />
      {!isLoading &&
        <Errorbanner
          isError={isError} retryCall={retryCall}
          setRetryCall={setRetryCall}
        />}
      {!isError &&
        <ProductDetails
          product={product}
          addToCart={addToCart}
          isInCart={isInCart}
        />}
    </main>

  )
}
export default Product