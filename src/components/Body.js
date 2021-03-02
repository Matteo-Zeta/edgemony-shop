import './Body.css';
import Hero from './Hero'
import Card from './Card'


function Body(props) {
  const { title, description, cover, products } = props;
  return <main className="Body">
    <Hero title={title} description={description} cover={cover}></Hero>
    <div className="products-container">
      {products.map((product) => <Card products={product} />)}
    </div>
  </main>
}

export default Body;