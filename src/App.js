import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import ShowTask from "./Components/ShowTask";
import "./App.css";

export default function App() {
  const [taskList, setTasklist] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask
          taskList={taskList}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
        <ShowTask
          taskList={taskList}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
      </div>
    </div>
  );
}
