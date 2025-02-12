import { Task } from "./task";
export const defaultTaskList = () => {
  const taskList: Task[] = [];
  const task1 = new Task("Task1", "12-20-2024", true); // Create an important task
  const task2 = new Task("Task2", "12-29-2024", false); // Create a non-important task
  const task3 = new Task("Task3", "12-20-2024", true); // Create an important task
  const task4 = new Task("Task4", "12-29-2024", false); // Create a non-important task
  const task5 = new Task("Task5", "12-20-2024", true); // Create an important task
  const task6 = new Task("Task6", "12-29-2024", false); // Create a non-important task
  taskList.push(task1);
  taskList.push(task2);
  taskList.push(task3);
  taskList.push(task4);
  taskList.push(task5);
  taskList.push(task6);
  return taskList; // Return the list of tasks
};
