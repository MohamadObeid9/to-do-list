import { createTask } from "./createTask";
import { Task } from "./task";

// Function to display all tasks
export const displayTasks = function () {
  // Get the list of tasks
  const taskList: Task[] = JSON.parse(String(localStorage.getItem("tasks")));

  // Loop through each task and create its DOM element
  taskList.forEach((task, index) => {
    createTask(index); // Corrected to only pass the index
  });
};
