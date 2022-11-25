import React, { useState, useRef } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Input from "./Input";
import EditIcon from "@mui/icons-material/Edit";

function Tasklist({ list, setList }) {
  const [task, setTask] = useState({
    text: "",
    category: "",
    date: "",
  });
  const [edit, setEdit] = useState(false);
  const taskRef = useRef();

  const handleCheck = (id) => {
    const remainingList = list.filter((item) => {
      return item.id !== id;
    });
    setList(remainingList);
  };

  const [clickedTask, setClickedTask] = useState();
  const handleEdit = (id) => {
    setEdit(true);
    let newEditItem = list.find((elem) => {
      return elem.id === id;
    });
    // console.log(newEditItem);
    setClickedTask(id);
    setTask({
      text: newEditItem.name.text,
      category: newEditItem.name.category,
      date: newEditItem.name.date,
    });
    taskRef.current.focus();
  };
 

  return (
    <div>
      <Input
        task={task}
        setTask={setTask}
        list={list}
        setList={setList}
        clickedTask={clickedTask}
        edit={edit}
        setEdit={setEdit}
        ref={taskRef}
      />
      <div className="flex flex-col items-center  display space-y-3 bg-gray-300  rounded-md m-6 p-6">
        <div className="font-bold">
          <p>Tasks</p>
        </div>
        <div className="w-full flex flex-row justify-around  px-4 pr-24">
          <h1>Task</h1>
          <h1>Category</h1>
          <h1>Deadline</h1>
        </div>
        {list.map((item) => (
          <div
            key={item.id}
            className="flex justify-between p-2 w-full bg-gray-600 rounded-lg border-black text-white "
          >
            <div className="ml-2 flex flex-row  justify-between w-full pr-4">
              <div className="w-1/3 ">
                <p>{item.name.text}</p>
              </div>
              <div className="w-1/3">
                <p>{item.name.category}</p>
              </div>
              <div className="w-1/3">
                <p>{item.name.date}</p>
              </div>
            </div>
            <div className="mr-2 px-2 ">
              <button onClick={() => handleEdit(item.id)}>
                <EditIcon />
              </button>
            </div>
            <div className="mr-2 ">
              <button
                onClick={() => {handleCheck(item.id)}}
              >
                <CheckCircleIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasklist;
