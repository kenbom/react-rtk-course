import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "./taskSlice";
import TaskItem  from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
