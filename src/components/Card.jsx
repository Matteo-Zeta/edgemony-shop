import './Card.css';

function Card(props) {
  const { products } = props;
  return <div key={products.id} className="Card">
  <img src={products.image} alt="example item"/>
  <div className="info-wrapper">
  <i>{products.category}</i>
  <h3>{products.title}</h3>
  </div>
  
  <div className="price-container">
    <button type="button">Dettagli</button>
  <b>{products.price} €</b>
  </div>
</div>
}

export default Card;