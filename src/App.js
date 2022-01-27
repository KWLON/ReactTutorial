import "./index.css";
import { useState } from "react";
// import React from "react";
import Header from "./components/Headers";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

export default function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors App",
      day: "Feb 5th at 2:30",
      reminder: true
    },
    {
      id: 2,
      text: "School",
      day: "Feb 6th at 1:30",
      reminder: true
    },
    {
      id: 3,
      text: "Shopping",
      day: "Feb 5th at 3:30",
      reminder: false
    }
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task"
      )}
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }
// export default App
