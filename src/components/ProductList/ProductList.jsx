import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Search from "../Search/Search";
import CategoriesFilter from "../CategoriesFilter/CategoriesFilter";

import "./ProductList.css";

function ProductList({ products, categories, openProductModal }) {
  const [searchTerm, setSearchTerm] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);

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
          onSelectCategory={setSelectedCategories}
        />
      </div>
      <div className="ProductList__products">
        {filteredProducts.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            openProductModal={() => openProductModal(product)}
          />
        ))}
      </div>
    </div>
  );
}


export default ProductList;