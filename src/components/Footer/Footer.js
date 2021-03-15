import './Footer.css';

function Footer(props) {
  const date = new Date();
  const year = date.getFullYear();
  return <footer className="Footer">{year} © Edgemony</footer>
}

export default Footer;