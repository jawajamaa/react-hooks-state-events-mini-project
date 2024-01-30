import React, { useState } from 'react'

function Button({ category, setCategories, selectedCategory, setSelectedCategory }) {
const [className, setClassName] = useState("")

  function handleClick(event) {
    setClassName("selected");
    setSelectedCategory(event.target.textContent);
    console.log(event.target.textContent)
    console.log(JSON.stringify(selectedCategory))
  }
  return (
    <button className = { className } onClick = { handleClick }>{ category } </button>
  )
}

export default Button;