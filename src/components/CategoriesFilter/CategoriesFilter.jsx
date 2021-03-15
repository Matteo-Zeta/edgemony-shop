import CategoryFilter from "../CategoryFilter/CategoryFilter";

import "./CategoriesFilter.css";

function CategoriesFilter({ categories, selectedCategories, onSelectCategory, }) {
    
  return (
    <div className="CategoriesFilter">
      {categories.map((category) => (
        <CategoryFilter
          key={category}
          name={category}
          selectedCategories={selectedCategories}
          onSelectCategory={onSelectCategory}
        />
      ))}
    </div>
  );
}


export default CategoriesFilter;