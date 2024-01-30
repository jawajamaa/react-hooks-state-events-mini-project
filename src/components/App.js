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


function onCategoryChange(category) {
  console.log(JSON.stringify(category));
  console.log(filteredTasks);
  // setTasks (filteredTasks);
}

const filteredTasks = tasks.filter(task => task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories = { categories }
      setCategories = { onCategoryChange }
      selectedCategory = { selectedCategory }
      setSelectedCategory = { setSelectedCategory }

      />
      <NewTaskForm />
      <TaskList 
      tasks = { filteredTasks }
      setTasks = { setTasks }
      />
    </div>
  );
}

export default App;
