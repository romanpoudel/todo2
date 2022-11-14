import React from "react";
import { useEffect } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Tooltip } from "@mui/material";

function Input({ task, setTask, list, setList, index, edit, setEdit }) {
  const handleClick = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(task);
    if (edit) {
      if (task.text && task.category && task.date) {
        setEdit(false);
        // console.log(list[index].name)
        list[index].name=task;
        setList([...list]);
      }
    } else {
      if (task.text && task.category && task.date) {
        const compTask = { id: new Date().getTime().toString(), name: task };
        // console.log(compTask);
        setList([...list, compTask]);
      }
    }

    setTask({
      text: "",
      category: "",
      date: ""
    });
    // console.log(list);
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(list));
  }, [list]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="Input m-1 flex justify-around">
        <input
          className="w-3/5 p-2  border-2 outline-none rounded-lg border-gray-600"
          type="text"
          name="text"
          onChange={handleClick}
          value={task.text}
          placeholder="Task"
        />

        <input
          className="w-1/5 p-2 mx-2 border-2 outline-none rounded-lg border-gray-600"
          type="text"
          name="category"
          onChange={handleClick}
          value={task.category}
          placeholder="Category"
        />
        <input
          className="w-30 p-2 mx-2 border-2 outline-none rounded-lg border-gray-600"
          type="date"
          name="date"
          onChange={handleClick}
          value={task.date}
        />

        <Tooltip
          title="Add task"
          className="border-2 p-2 rounded-md border-gray-700"
        >
          <button type="submit">
            <DoneOutlineIcon />
          </button>
        </Tooltip>
      </div>
    </form>
  );
}

export default Input;
