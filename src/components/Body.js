import './Body.css';

function Body(props) {
  const {title, description, cover} = props;
  return <main className="Body">
    <div className="container">
      <img src={cover} alt="the hero cover"/>
      <div className="hero-title">
      <h1>{title}</h1>
      <h2>{description}</h2>
      </div>
    </div>
  </main>
}

export default Body;