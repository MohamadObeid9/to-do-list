import { createTask } from "./createTask";
import { Task } from "../logic/task";

export const addTaskToTaskList = (
  taskList: Task[],
  title: string,
  text: string,
  date: string,
  important: boolean
) => {
  if (text === "" && title === "")
    return; // Do nothing if both title and text are empty
  else {
    const newTask = new Task(title, text, date, important); // Create a new task
    taskList.push(newTask); // Add the new task to the list
    createTask(taskList.length - 1, taskList); // Create and display the new task
  }
};
