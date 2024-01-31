import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList( {tasks, setTasks } ) {

  function onSetTasks(taskId) {
    const newTasks = tasks.filter(task => task.text !== taskId)
    setTasks(newTasks);
  }

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task 
        key = { uuid() } 
        taskId = { task.text }
        text = { task.text } 
        setTasks = { onSetTasks }
        category = { task.category }
        />
      ))}
      
    </div>
  );
}

export default TaskList;
