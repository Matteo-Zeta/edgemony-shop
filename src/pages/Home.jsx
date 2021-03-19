import { useState, useEffect } from 'react';
import Hero from './../components/Hero/Hero';
import Loader from './../components/Loader/Loader';
import Errorbanner from './../components/ErrorBanner/Errorbanner';
import Footer from './../components/Footer/Footer';
import ProductList from './../components/ProductList/ProductList';
import { fetchProducts, fetchCatogories } from "./../services/api";


const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

let cache;
function Home() {

  // API data logic
  const [products, setProducts] = useState(cache ? cache.products : [])
  const [categories, setCategories] = useState(cache ? cache.categories : []);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')
  const [retryCall, setRetryCall] = useState(false)

  useEffect(() => {
    if (cache !== undefined) {
      return;
    }
    setIsError('')
    setIsLoading(true)
    Promise.all([fetchProducts(), fetchCatogories()])
      .then(([products, categories]) => {
        setProducts(products);
        setCategories(categories);
        cache = { products, categories };
      })
      .catch((err) => setIsError(err.message))
      .finally(() => setIsLoading(false));
  }, [retryCall])



  return (
    <div className="App">

      <Hero
        title={data.title} description={data.description}
        cover={data.cover}
      />
      <Loader
        isLoading={isLoading}
      />
      {!isLoading &&
        <Errorbanner
          isError={isError} retryCall={retryCall}
          setRetryCall={setRetryCall}
        />}
      {!isError &&
        <ProductList
          products={products}
          categories={categories}
        />}
      <Footer />
    </div>
  )
}
export default Home;

