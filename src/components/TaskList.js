import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList( {tasks, setTasks } ) {
  console.log({ tasks });

  function onSetTasks(taskId) {
    console.log({ tasks });
    console.log(taskId);
    const newTasks = tasks.filter(task => task.text !== taskId)
    console.log({ newTasks });
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
