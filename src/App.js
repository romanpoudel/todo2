import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Tasklist from "./components/Tasklist";


const getLocalItems = () => {
  let list = localStorage.getItem("task");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [list, setList] = useState(getLocalItems);
  return (
    <div className="App flex flex-col m-10 p-10 align-center border-4 rounded-md justify-center">
      <Navbar />
      <Tasklist list={list} setList={setList}/>
    </div>
  );
}

export default App;
