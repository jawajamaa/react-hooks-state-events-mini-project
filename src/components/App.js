import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formData, setFormData] = useState({
    text: "",
    category: "All"
  });

  function onCategoryChange(selectedCategory) {
    console.log(selectedCategory);
    setSelectedCategory(selectedCategory);
    console.log(selectedCategory);
  }
console.log(tasks);

  const filteredTasks = tasks.filter(task => {
    if (selectedCategory.trimEnd() === "All") {
      return true;
    }

    return task.category === selectedCategory.trimEnd()
  });

  function onTaskFormSubmit() { 
    setTasks(tasks=>[...tasks, formData])
  }

console.log(filteredTasks);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories = { categories }
      setCategories = { setCategories }
      selectedCategory = { selectedCategory }
      setSelectedCategory = { onCategoryChange }

      />
      <NewTaskForm
      categories = { categories }
      setCategories = { setCategories } 
      tasks = { tasks }
      setTasks = { onTaskFormSubmit }
      formData = { formData }
      setFormData = { setFormData }
      />
      <TaskList 
      tasks = { filteredTasks }
      setTasks = { setTasks }
      />
    </div>
  );
}

export default App;
