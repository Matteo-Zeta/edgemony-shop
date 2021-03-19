import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";
import Search from "../Search/Search";
import CategoriesFilter from "../CategoriesFilter/CategoriesFilter";

import "./ProductList.css";

function ProductList({ products, categories }) {
  const [searchTerm, setSearchTerm] = useState();

  const location = useLocation();
  const history = useHistory();

  const searchParams = new URLSearchParams(location.search); //creiamo questo ogg. partendo dalla querystring attuale
  const selectedCategoriesParam = searchParams.get('categories');
  const selectedCategories = selectedCategoriesParam
  ? selectedCategoriesParam.split(',')
  : [];

  function updateCategories(categories) {
    const selectedParam = categories.join(",");
    if (categories.length === 0) {      
      searchParams.delete('categories'); // puliamo la querystring dal parametro categories
    } else {
      searchParams.set('categories', selectedParam); // aggiungiamo un nuovo parametro che ha come valore l'array delle nostre categorie selezionate, separate da ','
    }
    history.push({ search: '?' + searchParams.toString() }) // aggiorniamo la nostra querystring
  }


  const termRegexp = new RegExp(searchTerm, "i"); //espressione regolare per la ricerca. 'I' è il modificatore che ignora la distinzione tra maiusc e min.
  const filteredProducts = products.filter(
    (product) =>
      product.title.search(termRegexp) !== -1 &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category))
  );

  return (
    <div className="ProductList">
      <div className="ProductList__filters">
        <Search onSearch={setSearchTerm} />
        <CategoriesFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onSelectCategory={updateCategories}
        />
      </div>
      <div className="ProductList__products">
        {filteredProducts.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}


export default ProductList;