import React, { useState } from 'react'

function Button({ category, setCategories }) {
const [className, setClassName] = useState("")

  function handleClick() {
    console.log(`${category}`)
    setClassName("selected");
    setCategories(category);

  }
  return (
    <button className = { className } onClick = { handleClick }>{ category } </button>
  )
}

export default Button;