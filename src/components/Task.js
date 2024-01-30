import React from "react";
// import TaskList from "./TaskList";

function Task({ category, taskId, text, setTasks }) {
console.log({ taskId })

  function handleDelete() {
console.log(taskId)
console.log(text);
    setTasks(taskId);
  }

  return (
    <div className="task">
      <div className="label">{ category }</div>
      <div className="text">{ text }</div>
      <button className="delete"   onClick = { handleDelete }>X</button>
    </div>
  );
}

export default Task;
