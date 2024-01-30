import React from "react";
import Button from "./Button";

function CategoryFilter({ categories, setCategories, selectedCategory, setSelectedCategory}) {
  console.log( categories )

// function onFilterChange(category) {
//   console.log(`${category}`)
//   setCategories(category);
// }

function onCategoryChange(selectedCategory) {
    console.log(`${selectedCategory}`)
    setSelectedCategory(selectedCategory);
  
}
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
    {categories.map(category => (
    <Button 
    key = { category }
    category = { category }
    categories = { categories }
    setCategories = { setCategories }
    selectedCategory = { selectedCategory }
    setSelectedCategory = { onCategoryChange }
    />
    ))}
    </div>
  );
}

export default CategoryFilter;
