import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { postItemToCart, deleteItemFromCart, fetchCart } from "./services/api"

import "./App.css";
import Home from './pages/Home';
import CartPage from './pages/Cart/CartPage';
import Page404 from './pages/Page404';
import Product from './pages/Product/Product'
import Header from './components/Header/Header';
import Errorbanner from './components/ErrorBanner/Errorbanner'

let cartId;
const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};


function App() {

  // Cart Logic

  const [cart, setCart] = useState([]);

  const cartTotalPrice = cart.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity;
  }, 0)
  const cartSize = cart.length;

  function isInCart(product) {
    return product !== null && cart.find((p) => p.id === product.id) != null;
  }


  async function addToCart(product) {
    try {
      const cartObj = await postItemToCart(cartId, product.id, 1)
      setCart(cartObj.items);
    } catch (error) {
      console.error(error.message);
    }

  }
  async function removeFromCart(productId) {
    try {
      const cartObj = await deleteItemFromCart(cartId, productId)
      setCart(cartObj.items);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function setQuantity(productId, quantity) {
    try {
      const cartObj = await postItemToCart(cartId, productId, quantity)
      setCart(cartObj.items);
    } catch (error) {
      console.error(error.message);
    }
  }
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')
  const [retryCall, setRetryCall] = useState(false)

  useEffect(() => {
    setIsError('')
    setIsLoading(true)
    const cartIdFromStorage = localStorage.getItem('edgemony-cart-id');
    fetchCart(cartIdFromStorage)
      .then(data => {
        setCart(data.items)
        cartId = data.id
      })
      .catch(error => {
        setIsError(error.message)
      })
      .finally(() => setIsLoading(false));
  }, [retryCall])

  return (
    <Router>
      <div className="App">
        <Header
          imageSrc={data.logo}
          cartTotalPrice={cartTotalPrice}
          cartSize={cartSize}
        />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/product/:productId">
            <Product
              isInCart={isInCart}
              addToCart={addToCart}
            />
          </Route>

          <Route path="/cart">
            <CartPage
              setQuantity={setQuantity} cartTotalPrice={cartTotalPrice}
              productInCart={cart} removeFromCart={removeFromCart}
              isLoading={isLoading}
            />
          </Route>

          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
        { !isLoading &&
        <Errorbanner
          isError={isError} retryCall={retryCall}
          setRetryCall={setRetryCall}
        />}
      </div>
    </Router>
  )
}
export default App;

