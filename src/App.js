import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";
import Home from './pages/Home';
import CartPage from './pages/Cart/CartPage';
import Page404 from './pages/Page404';
import Product from './pages/Product/Product'
import Header from './components/Header/Header';

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
  let cartTitle = (!!cartSize ? "Your products:" : "The cart is empty")

  function isInCart(product) {
    return product !== null && cart.find((p) => p.id === product.id) != null;
  }

  function addToCart(product) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
  function removeFromCart(productId) {
    setCart(cart.filter((product) => product.id !== productId));
  }
  function setQuantity(productId, quantity) {
    if (quantity < 1) {
      throw new Error('Invalid quantity');
    }
    const newCart = cart.map((cartItem) =>
      cartItem.id !== productId ? cartItem : { ...cartItem, quantity });
    return setCart(newCart);
  }

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
            />
          </Route>

          <Route path="*">
            <Page404 />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}
export default App;

