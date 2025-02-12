import { createTask } from "./createTask";
import { Task } from "./task";
import { format } from "date-fns";
export const addTaskToTaskList = (
  // taskList: Task[],
  text: string,
  date: string,
  important: boolean
) => {
  if (text === "" && date === "")
    return; // Do nothing if both date and text are empty
  else {
    const taskList: Task[] =
      JSON.parse(String(localStorage.getItem("tasks"))) || [];
    const dateObj = new Date(date);
    const newTask = new Task(text, format(dateObj, "dd-MM-yyyy"), important); // Create a new task
    taskList.push(newTask); // Add the new task to the list
    localStorage.setItem("tasks", JSON.stringify(taskList));
    createTask(taskList.length - 1, taskList); // Create and display the new task
  }
};
