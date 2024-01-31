import React, { useState } from 'react'

function Button({ category, setCategories, selectedCategory, setSelectedCategory }) {
const [className, setClassName] = useState("")

  function handleClick(event) {
    setClassName("selected");
    setSelectedCategory(event.target.textContent);

  }
  return (
    <button className = { className } onClick = { handleClick }>{ category } </button>
  )
}

export default Button;