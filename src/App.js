import { useState, useEffect } from 'react';

import "./App.css";

import Header from './components/Header/Header';
import Cart from './components/Cart/Cart'
import ModalSidebar from './components/ModalSidebar/ModalSidebar'
import Modal from './components/Modal/Modal'
import Hero from './components/Hero/Hero';
import Loader from './components/Loader/Loader';
import Errorbanner from './components/ErrorBanner/Errorbanner';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails'
import { fetchProducts, fetchCatogories } from "./services/api";


const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};


function App() {
  // Product-Modal logic
  const [modalIsOpen, setModalIsOpen] = useState(false) // modale aperta o meno
  const [productInModal, setProductInModal] = useState(null) // prodotti nella modale

  function openProductModal(product) {
    console.log(product)
    setProductInModal(product)
    console.log(productInModal)
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
    setTimeout(() => {
      setProductInModal(null)
    }, 500)
  }
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.height = `100vh`
      document.body.style.overflow = `hidden`
    } else {
      document.body.style.height = ``
      document.body.style.overflow = ``
    }
  }, [modalIsOpen])

  
  // API data logic
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')
  const [retryCall, setRetryCall] = useState(false)

  useEffect(() => {
    setIsError('')
    setIsLoading(true)
    Promise.all([fetchProducts(), fetchCatogories()])
      .then(([products, categories]) => {
        setProducts(products);
        setCategories(categories);
      })
      .catch((err) => setIsError(err.message))
      .finally(() => setIsLoading(false));
  }, [retryCall])

    // Cart Logic
    const [cartIsOpen, setCartIsOpen] = useState(false);
    useEffect(() => {
      if (cartIsOpen) {
        document.body.style.height = `100vh`
        document.body.style.overflow = `hidden`
      } else {
        document.body.style.height = ``
        document.body.style.overflow = ``
      }
    }, [cartIsOpen])
    
    const [cart, setCart] = useState([]);

    const cartProducts = cart.map((cartItem) => {
      const product = products.find((product) => product.id === cartItem.id);
      return {
        id: product.id,
        quantity: cartItem.quantity,
        title: product.title,
        image: product.image,
        price: product.price
      }
    });
    const cartTotalPrice = cartProducts.reduce((acc, cartItem) => {
      return acc + cartItem.price * cartItem.quantity;
    }, 0)
    const cartSize = cart.length;
    let cartTitle = (!!cartSize ? "Your products:" : "The cart is empty")
    const isProductInCart = productInModal !== null && 
    cart.find((product)=> product.id === productInModal.id) != null;
  
    function addToCart(productId) {
      setCart([...cart, { id: productId, quantity: 1}]);
      closeModal();
    }
    function removeFromCart(productId) {
      setCart(cart.filter((product) => product.id !== productId));
    }
    function setQuantity(productId, quantity) {
      if (quantity < 1) {
        throw new Error('Invalid quantity');
      }
      const newCart = cart.map((cartItem) => 
      cartItem.id !== productId ? cartItem : { ...cartItem, quantity});
      return setCart(newCart);
    }

  return <div className="App">
    <Header 
    imageSrc={data.logo} cartTotalPrice={cartTotalPrice}
    cartSize={cartSize} setCartIsOpen={setCartIsOpen}
    />
    <Hero 
    title={data.title} description={data.description}
    cover={data.cover} 
    />
    <ModalSidebar
    isOpen={cartIsOpen} title={cartTitle}
    setCartIsOpen={setCartIsOpen}
    >
      <Cart 
      setQuantity={setQuantity} cartTotalPrice={cartTotalPrice}
      productInCart={cartProducts} removeFromCart={removeFromCart}
      />
    </ModalSidebar>
    <Modal 
    closeModal={closeModal} isOpen={modalIsOpen} 
    >
      <ProductDetails 
      isProductInCart={isProductInCart}
      product={productInModal} addToCart={addToCart}     
      />
    </Modal>
    <Loader 
    isLoading={isLoading} 
    />
    {!isLoading && 
      <Errorbanner 
      isError={isError} retryCall={retryCall} 
      setRetryCall={setRetryCall} 
    />}
    {!isError &&           
      <ProductList
      products={products}
      categories={categories}
      openProductModal={openProductModal}
    />}
    <Footer/>
  </div>;
}
export default App;

