import { useState } from 'react';

import './Card.css';
import ProductModal from './ProductModal';
function Card(props) {
  const { products } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return <div key={products.id} className="Card">
    <img src={products.image} alt="example item" />
    <div className="info-wrapper">
      <i>{products.category}</i>
      <h3>{products.title}</h3>
    </div>

    <div className="price-container">
      <button type="button" onClick={() => setModalIsOpen(true)}>Dettagli</button>
      <b>{products.price} €</b>
    </div>
    <ProductModal
      products={products}
      isOpen={modalIsOpen}
      closeModal={() => setModalIsOpen(false)}>
    </ProductModal>
  </div>
}

export default Card;