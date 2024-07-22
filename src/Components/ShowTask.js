import React from "react";

export default function showTask({ taskList, setTasklist,task,setTask }) {
  function handleDelete(id) {
    setTasklist(taskList.filter((task) => task.id !== id));
    return;
  }

  function handleEdit(id){
      const selectedTask= taskList.find((todo)=>todo.id===id);
      setTask(selectedTask)
  }

  function handleClear(){
    setTasklist([])
  }
  return (
    <div className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={handleClear}>Clear all</button>
      </div>
      <ul>
        {taskList.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i  onClick={()=>handleEdit(todo.id)}className="bi bi-pencil-square"></i>
            <i onClick={()=>handleDelete(todo.id)} className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </div>
  );
}
