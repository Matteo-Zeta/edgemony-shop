
import './ProductModal.css';



function ProductModal({ content, isOpen, closeModal, addToCart, isProductInCart }) {
  

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
                { isProductInCart 
                  ? <button type="button" id='inCartBtn'  disabled={true}>In cart</button>
                  : <button type="button" id='addBtn' onClick={()=>addToCart(content.id)}>Add to cart</button>
                }
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
export default ProductModal;