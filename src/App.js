import { useState, useEffect } from 'react';

import "./App.css";

import Header from './components/Header';
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

// const fakeProducts = require("./mocks/data/products.json");

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};


function App() {
  // Modal logic
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
  }, [ modalIsOpen ])
  
  // API data logic
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    // setIsLoading(true)
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      setProducts(data)
    })
  }, [])

  return <div className="App">
    <Header imageSrc={data.logo} name={data.title} />
    <Hero title={data.title} description={data.description} cover={data.cover} />
    <ProductModal isOpen={modalIsOpen} content={productInModal} closeModal={closeModal} />
    <div className="products-container">
      {(products).map((product) => <Card key={product.id} products={product} openProductModal={openProductModal} />)}
    </div>
    <Footer />
  </div>;
}
export default App;

