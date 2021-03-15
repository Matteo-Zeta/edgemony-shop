import './ProductCard.css';

function ProductCard({ product, openProductModal }) {

  return (
  <div className="Card">
    <img 
    src={product.image} 
    alt="example item" 
    />
    <div className="info-wrapper">
      <i>{product.category}</i>
      <h3>{product.title}</h3>
    </div>

    <div className="price-container">
      <button 
      type="button" 
      onClick={() => openProductModal(product)}>Dettagli
      </button>
      <b>{product.price} €</b>
    </div>
  </div>
  )
}

export default ProductCard;