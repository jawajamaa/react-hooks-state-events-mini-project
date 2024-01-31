import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit, setTasks }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "All"
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(formData);
  }

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]:value })
  };

  return (
    <form 
    className="new-task-form" 
    autoComplete = "off" 
    onSubmit = { handleSubmit }
    >
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        onChange={ handleInput }
        value={ formData.text } 
        />
      </label>
      <label>
        Category
        <select name="category" 
        onChange={ handleInput } 
        value={ formData.category }
        >
          {categories.map(category => ( 
            <option key = { category }>{ category }</option>
          )
          )};
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
