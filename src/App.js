import "./App.css";
import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Tasklist from "./components/Tasklist";
// import Test from "./components/Test";


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
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(list));
  }, [list]);
  return (
    <div className="App flex flex-col m-10 p-10 align-center border-4 rounded-md justify-center">
      <Navbar />
      <Tasklist list={list} setList={setList}/>
      {/* <Test /> */}
    </div>
  );
}

export default App;
