import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "./taskSlice";

const TaskItem = ({task}) => {
  const dispatch = useDispatch();
  const { id, title, completed } = task;
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => dispatch(completeTask(task))}
        defaultChecked={completed}
      />
      <span>{id}</span>
      <span>{title}</span>
      <button onClick={() => dispatch(deleteTask(task))}>Delete</button>
    </div>
  );
};

export default TaskItem;
