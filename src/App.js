import { useState, useEffect } from 'react';

import "./App.css";
import './components/Search.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Errorbanner from './components/Errorbanner';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductModal from './components/ProductModal';
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


  // Cart Logic
  const [priceInCart, setPriceInCart] = useState(0)
  const [itemsInCart, setItemsInCart] = useState(0)

  
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

  return <div className="App">
    <Header 
    imageSrc={data.logo}
    priceInCart={priceInCart}
    itemsInCart={itemsInCart}
    />
    <Hero 
    title={data.title} description={data.description}
    cover={data.cover} 
    />

    <ProductModal 
    closeModal={closeModal} isOpen={modalIsOpen} content={productInModal}
    setPriceInCart={setPriceInCart} priceInCart={priceInCart}
    setItemsInCart={setItemsInCart} itemsInCart={itemsInCart}
    />
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

