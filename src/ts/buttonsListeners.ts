import { displayTasks } from "./displayTasks";
import { importantTasks } from "./importantTasks";
import { Task } from "./task";
import { todayTasks } from "./todayTasks";

export const buttonsListeners = () => {
  const taskList: Task[] = JSON.parse(String(localStorage.getItem("tasks")));
  const importantBtn = document.querySelector("#importantBtn") as HTMLElement;
  const todayBtn = document.querySelector("#todayBtn") as HTMLElement;
  const allTasks = document.querySelector("#allTasks") as HTMLElement;
  const mainContent = document.querySelector(".mainContent") as HTMLElement;
  window.onload = () => {
    displayTasks(taskList);
  };
  allTasks.addEventListener("click", () => {
    mainContent.innerHTML = "";
    displayTasks(taskList);
  });
  importantBtn.addEventListener("click", () => {
    mainContent.innerHTML = "";
    importantTasks();
  });
  todayBtn.addEventListener("click", () => {
    mainContent.innerHTML = "";
    todayTasks();
  });
};
