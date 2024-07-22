// import React from "react";
// import "../index.css";
// import "../App.css";

// export default function AddTask({ taskList, setTasklist, task, setTask }) {
//   function handlesubmit(event) {
//     event.preventDefault();
//     let taskInput = event.target.task.value.trim();

//     if (task.id) {
//       const date = new Date();
//       const updatedTask = taskList.map((todo) =>
//         todo.id === task.id
//           ? {
//               id: task.id,
//               name: taskInput,
//               time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()} `,
//             }
//           : todo
//       );
//       setTasklist(updatedTask);
//     } else {
      
//         const date = new Date();

//         const newTask = {
//           id: date.getTime(),
//           name: event.target.task.value,
//           time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()} `,
//         };
//         setTasklist([...taskList, newTask]);
//         event.target.task.value = "";
//       }
//     }
  

//   return (
//     <div className="addTask">
//       <form onSubmit={handlesubmit}>
//         <input
//           type="text"
//           value={task.name}
//           onChange={(e) => setTask({ ...task, name: e.target.value })}
//           name="task"
//           placeholder="Add task"
//           autoComplete="off"
//         />
//         <button>Add task</button>
//       </form>
//     </div>
//   );
// }

import React from "react";
import "../index.css";
import "../App.css";

export default function AddTask({ taskList, setTasklist, task, setTask }) {
  function handlesubmit(event) {
    event.preventDefault();
    let taskInput = event.target.task.value.trim();

    if (task.id) {
      const date = new Date();
      const updatedTask = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()} `,
            }
          : todo
      );
      setTasklist(updatedTask);
      setTask({})
      
    } else {
      if (taskInput !== "") {
        const date = new Date();

        const newTask = {
          id: date.getTime(),
          name: taskInput,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()} `,
        };
        setTasklist([...taskList, newTask]);
        event.target.task.value = ""; // Clear input field value
        setTask({}); // Reset task state
      }
    }
  }

  return (
    <div className="addTask">
      <form onSubmit={handlesubmit}>
        <input className="form-control" 
          type="text"
          value={task.name||""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          name="task"
          placeholder="Add task"
          autoComplete="off"
        />
        <button>{task.id?"Update" :"Add task"}</button>
      </form>
    </div>
  );
}
