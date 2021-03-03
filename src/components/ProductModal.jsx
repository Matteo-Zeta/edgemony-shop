
import './ProductModal.css';



function ProductModal(props) {
  const { products, isOpen, closeModal } = props;

  return isOpen ? (
    <div className="ProductModal">
      <div className="overlay">
        <div className="modal-body">
          <img src={products.image} alt="example item" />
          <div className="info-wrapper">
            <h3>{products.title}</h3>
            <p>{products.description}</p>
          </div>
          <div className="modal-price-container">
            <b>{products.price} €</b>
            <button type="button" onClick={() => closeModal()}>Close</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
export default ProductModal;