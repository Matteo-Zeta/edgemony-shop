import "./App.css";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const fakeProducts = require("./mocks/data/products.json");

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  products: fakeProducts,
};
console.log(fakeProducts);
function App() {
  return <div className="App">
    <Header imageSrc={data.logo} name={data.title}/>
    <Body products={data.products} title={data.title} description={data.description} cover={data.cover}/>
    <Footer/>
  </div>;
}

export default App;
