import { createTask } from "./createTask";
import { Task } from "./task";

// Function to display all tasks
export const displayTasks = function (taskListParam?: Task[]) {
  const taskList = taskListParam;
  if (taskList) {
    // Loop through each task and create its DOM element
    taskList.forEach((task, index) => {
      createTask(index, taskList); // Corrected to only pass the index
    });
  }
};
