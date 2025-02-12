import { createTask } from "./createTask";
import { Task } from "./task";

// Function to display all tasks
export const displayTasks = function (taskListParam?: Task[]) {
  // Get the list of tasks from localStorage
  const storageList = localStorage.getItem("tasks");

  let taskList: Task[] = [];

  if (storageList) {
    try {
      taskList = JSON.parse(storageList);
    } catch (e) {
      console.log("Error parsing localStorage: " + e);
    }
  }

  // If taskList is still empty, use taskListParam if provided
  if (taskList.length === 0 && taskListParam) {
    taskList = taskListParam;
  }

  // Loop through each task and create its DOM element
  taskList.forEach((task, index) => {
    createTask(index, taskList); // Corrected to only pass the index
  });
};
