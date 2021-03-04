
import './ProductModal.css';



function ProductModal(props) {
  const { content, isOpen, closeModal } = props;

  return isOpen ? (
    <div className="ProductModal">
      <div className="overlay">
        <div className="modal-body">
          <img src={content.image} alt="example item" />
          <div className="info-wrapper">
            <h3>{content.title}</h3>
            <p>{content.description}</p>
          <hr />
          </div>
          <div className="modal-price-container">
            <b>Price: {content.price} €</b>
            <button type="button" onClick={() => closeModal()}>Close</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
export default ProductModal;