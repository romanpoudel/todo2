import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Input from "./Input";
import EditIcon from "@mui/icons-material/Edit";

function Tasklist({ list, setList }) {
  const [task, setTask] = useState({
    text: "",
    category: "",
    date: "",
  });
  const [edit,setEdit]=useState(false);

  const handleCheck = (index) => {
    const remainingList = list.filter((item, i) => {
      return i !== index;
    });
    setList(remainingList);
  };

  // var indexClicked;
  const [indexClicked,setIndexClicked]=useState();
  const handleEdit = (index) => {
    setEdit(true);
    // console.log(list[index]);
    // indexClicked = index;
   setIndexClicked(index);
    setTask({
      text: list[index].name.text,
      category:list[index].name.category,
      date: list[index].name.date
    });
  }; 

  return (
    <div>
      <Input
        task={task}
        setTask={setTask}
        list={list}
        setList={setList}
        index={indexClicked}
        edit={edit}
        setEdit={setEdit}
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
        {list.map((item, index) => (
          <div className="flex justify-between p-2 w-full bg-gray-600 rounded-lg border-black text-white ">
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
              <button onClick={() => handleEdit(index)}>
                <EditIcon />
              </button>
            </div>
            <div className="mr-2 ">
              <button onClick={() => handleCheck(index)}>
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
