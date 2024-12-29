import { createTask } from "./createTask";
import { defaultTaskList } from "../logic/task";
import { Task } from "../logic/task";

// Function to display all tasks
export const displayTasks = function (task?: Task[]) {
  // Get the list of tasks
  const taskList = task === undefined ? defaultTaskList() : task;

  // Loop through each task and create its DOM element
  taskList.forEach((task, index) => {
    createTask(index, taskList); // Corrected to only pass the index
  });
};
