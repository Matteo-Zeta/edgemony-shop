import { useState, useEffect } from 'react';

import "./App.css";

import Header from './components/Header/Header';
import Cart from './components/Cart/Cart'
import Modal from './components/Modal/Modal'
import ModalBodyCenter from './components/ModalBodyCenter/ModalBodyCenter'
import ModalBodySidebar from './components/ModalBodySidebar/ModalBodySidebar'
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
  const [productInModal, setProductInModal] = useState(null) // prodotti nella modale
  const [productDetailIsOpen, setProductDetailIsOpen] = useState(false)

  function openProductModal(product) {
    setProductInModal(product)
    setProductDetailIsOpen(true)
  }

  function closeProductModal() {
    setProductDetailIsOpen(false)
    setTimeout(() => {
      setProductInModal(null)
    }, 500)
  }
  useEffect(() => {
    if (productDetailIsOpen) {
      document.body.style.height = `100vh`
      document.body.style.overflow = `hidden`
    } else {
      document.body.style.height = ``
      document.body.style.overflow = ``
    }
  }, [productDetailIsOpen])

  
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
    function openCartModal(){
      setCartIsOpen(true);
    }
    function closeCartModal(){
      setCartIsOpen(false);
    }
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
      closeProductModal();
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
    cartSize={cartSize} openCartModal={openCartModal}
    />
    <Hero 
    title={data.title} description={data.description}
    cover={data.cover} 
    />
    <Modal closeModal={closeCartModal} isOpen={cartIsOpen} >
      <ModalBodySidebar isOpen={cartIsOpen} title={cartTitle} closeCartModal={closeCartModal} >
      <Cart 
      setQuantity={setQuantity} cartTotalPrice={cartTotalPrice}
      productInCart={cartProducts} removeFromCart={removeFromCart}
      />
      </ModalBodySidebar>
    </Modal>
    {/* <ModalSidebar
    isOpen={cartIsOpen} title={cartTitle}
    setCartIsOpen={setCartIsOpen}
    >
      <Cart 
      setQuantity={setQuantity} cartTotalPrice={cartTotalPrice}
      productInCart={cartProducts} removeFromCart={removeFromCart}
      />
    </ModalSidebar> */}
    <Modal closeModal={closeProductModal} isOpen={productDetailIsOpen} >
      <ModalBodyCenter closeModal={closeProductModal} isOpen={productDetailIsOpen} >
        <ProductDetails 
        isProductInCart={isProductInCart}
        product={productInModal} addToCart={addToCart}     
        />
      </ModalBodyCenter>
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

