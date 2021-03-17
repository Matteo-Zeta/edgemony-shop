import './ProductCard.css';
import { Link } from "react-router-dom";

function ProductCard({ product }) {

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
    <Link to={`/product/${product.id}`}>
      <button>Dettagli</button>
    </Link>
      <b>{product.price} €</b>
    </div>
  </div>
  )
}

export default ProductCard;