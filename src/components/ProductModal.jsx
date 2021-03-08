
import './ProductModal.css';



function ProductModal(props) {
  const { content, isOpen, closeModal, setPriceInCart, priceInCart, itemsInCart, setItemsInCart } = props;
  
  function addToCart(content) {
    setItemsInCart(itemsInCart + 1)
    setPriceInCart(priceInCart + content.price)
    closeModal()
  }
  return  (
    <div className={`ProductModal ${ isOpen ? `isOpen` : '' }`}>
      <div className="overlay">
        <div className="modal-body">
          { !!content ? (
            <div className="content">
              <button type="button" onClick={closeModal}>X</button>
              <img src={content.image} alt="example item" />
              <div className="info-wrapper">
                <h3>{content.title}</h3>
                <p>{content.description}</p>
                <hr />
              </div>
              <div className="modal-price-container">
                <b>Price: {content.price} €</b>
                <button type="button" onClick={()=>addToCart(content)}>Add to cart</button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
export default ProductModal;