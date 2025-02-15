import { createTask } from "./createTask";
import { Task } from "./task";
import { format } from "date-fns";

export const addTaskToTaskList = (
  text: string,
  date: string,
  important: boolean
): void => {
  if (!text || !date) return; // Do nothing if either date or text is empty

  const primaryProject = localStorage.getItem("primaryProject");
  if (!primaryProject) return; // Do nothing if primaryProject is not found

  const taskList: Task[] = JSON.parse(localStorage.getItem(primaryProject) || "[]");

  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return; // Do nothing if date is invalid

  const newTask = new Task(text, format(dateObj, "dd-MM-yyyy"), important); // Create a new task
  taskList.push(newTask); // Add the new task to the list

  localStorage.setItem(primaryProject, JSON.stringify(taskList));
  createTask(taskList.length - 1, taskList); // Create and display the new task
};
