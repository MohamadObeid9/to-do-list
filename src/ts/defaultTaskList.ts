import { Task } from "./task";
export const defaultTaskList = () => {
  const taskList: Task[] = JSON.parse(String(localStorage.getItem("tasks")));

  // console.log(JSON.parse(String(localStorage.getItem("tasks"))));
  return taskList; // Return the list of tasks
};
