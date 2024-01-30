import React, { useState } from 'react'

function Button({ category, setCategories, selectedCategory, setSelectedCategory }) {
const [className, setClassName] = useState("")

  function handleClick(category) {
    console.log(`${category}`)
    setClassName("selected");
    setSelectedCategory(selectedCategory);

  }
  return (
    <button className = { className } onClick = { handleClick }>{ category } </button>
  )
}

export default Button;