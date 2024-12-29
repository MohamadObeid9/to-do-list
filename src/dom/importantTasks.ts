import { createTask } from "./createTask";
import { defaultTaskList } from "../logic/task";

export const importantTasks = () => {
  const taskList = defaultTaskList(); // Get the default list of tasks
  const impBtn = document.querySelector(
    "#importantTasksBtn"
  ) as HTMLButtonElement; // Get the button for important tasks
  const mainContent = document.querySelector(
    ".main-content-body"
  ) as HTMLElement; // Get the main content area

  // Filter and display important tasks
  impBtn.addEventListener("click", () => {
    // Clear existing tasks
    mainContent.innerHTML = "";
    const impTasks = taskList.filter((task) => task.important); // Filter tasks marked as important
    for (let i = 0; i < impTasks.length; i++) {
      createTask(i, impTasks); // Create and display each important task
    }
  });
};
