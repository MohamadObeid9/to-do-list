import { defaultTaskList } from "../logic/task";
import { createTask } from "./createTask";

export const allTasks = () => {
  // Get the default list of tasks
  const taskList = defaultTaskList();

  // Get the button element for displaying all tasks
  const allTasks = document.querySelector("#allTasksBtn") as HTMLButtonElement;

  // Get the main content area where tasks will be displayed
  const mainContent = document.querySelector(".main-content-body") as HTMLElement;

  // Add click event listener to the button
  allTasks.addEventListener("click", () => {
    // Clear the main content area
    mainContent.innerHTML = "";

    // Iterate through the task list and create each task
    taskList.forEach((task, index) => {
      createTask(index, taskList);
    });
  });
};
