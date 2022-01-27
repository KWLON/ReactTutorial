import "./index.css";
import { useState } from "react";
// import React from "react";
import Header from "./components/Headers";
import Tasks from "./components/Tasks";

export default function App() {
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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }
// export default App
