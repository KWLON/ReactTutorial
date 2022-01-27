import "./index.css";
// import React from "react";
import Header from "./components/Headers";
import Tasks from "./components/Tasks";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }
// export default App
