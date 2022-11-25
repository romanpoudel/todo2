import React, { useRef } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Tooltip } from "@mui/material";

function Input({ task, setTask, list, setList, clickedTask, edit, setEdit }) {
  const handleClick = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTask({ ...task, [name]: value });
  };

  const categoryRef = useRef();
  const dateRef = useRef();
  const buttonRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(task);
    if (edit) {
      if (task.text && task.category && task.date) {
        setEdit(false);
        setList(
          list.map((elem) => {
            if (elem.id === clickedTask) {
              return { ...elem, name: task };
            }
            return elem;
          })
        );
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
      date: "",
    });
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="Input m-2 flex justify-around">
        <input
          className="w-3/5 p-2  border-2 outline-none rounded-lg border-gray-600"
          type="text"
          name="text"
          onChange={handleClick}
          value={task.text}
          placeholder="Task"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              categoryRef.current.focus();
            }
          }}
        />

        <input
          className="w-1/5 p-2 mx-2 border-2 outline-none rounded-lg border-gray-600"
          type="text"
          name="category"
          onChange={handleClick}
          value={task.category}
          placeholder="Category"
          ref={categoryRef}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              dateRef.current.focus();
            }
          }}
        />
        <input
          className="w-30 p-2 mx-2 border-2 outline-none rounded-lg border-gray-600"
          type="date"
          name="date"
          onChange={handleClick}
          value={task.date}
          ref={dateRef}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              buttonRef.current.click();
            }
          }}
        />

        <Tooltip
          title="Add task"
          className="border-2 p-2 rounded-md border-gray-700"
        >
          <button type="submit" ref={buttonRef}>
            <DoneOutlineIcon />
          </button>
        </Tooltip>
      </div>
    </form>
  );
}

export default Input;
