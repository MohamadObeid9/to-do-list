import { Task } from "./task";
export const defaultTaskList = () => {
  const taskList: Task[] = [];
  const task1 = new Task("This is a default project", "12-20-2024", true,false); // Create an important task
  const task2 = new Task("Your changes won't save here", "12-29-2024", false,false); // Create a non-important task
  const task3 = new Task("you have to create a new project", "12-20-2024", true,false); // Create an important task
  const task4 = new Task("there , you can edit your own tasks", "12-29-2024", false,false); // Create a non-important task
  const task5 = new Task("you can create unlimited tasks", "12-20-2024", true,false); // Create an important task
  const task6 = new Task("if you've got any problem , pls report back", "12-29-2024", false,false); // Create a non-important task
  taskList.push(task1);
  taskList.push(task2);
  taskList.push(task3);
  taskList.push(task4);
  taskList.push(task5);
  taskList.push(task6);
  return taskList; // Return the list of tasks
};
