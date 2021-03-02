import './Body.css';
import Hero from './Hero'

function Body(props) {
  const {title, description, cover} = props;
  return <main className="Body">
      <Hero title={title} description={description} cover={cover}></Hero>
  </main>
}

export default Body;