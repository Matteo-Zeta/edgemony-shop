import './Hero.css';

function Hero(props) {
  const { title, description, cover } = props;
  return <div style={{ backgroundImage: `url(${cover})` }} className="hero">
    <div className="hero-title">
      <strong>BENVENUTO SU EDGEMONY SHOP</strong>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>Nel nostro esclusivo shopping club ti aspettano imperdibili offerte giornaliere
      sui migliori brand di abbigliamento, scarpe, borse ed accessori per tutta la famiglia.
      Approfitta delle nostre vendite private con sconti fino al 75%!</p>
      <button type='button'>ISCRIVITI ORA</button>
    </div>
  </div>
}

export default Hero;