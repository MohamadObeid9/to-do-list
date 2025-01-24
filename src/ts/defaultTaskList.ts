import { Task } from "./task";
export const defaultTaskList = () => {
  const taskList: Task[] = [];
  const task1 = new Task("Default Task", "12-20-2024", true); // Create an important task
  const task2 = new Task("test", "12-29-2024", false); // Create a non-important task
  taskList.push(task1);
  taskList.push(task2);
  return taskList; // Return the list of tasks
};
