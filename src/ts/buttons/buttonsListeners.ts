import { displayTasks } from "../tasks/displayTasks";
import { importantTasks } from "./importantTasks";
import { Task } from "../tasks/task";
import { todayTasks } from "./todayTasks";
import { weekTasks } from "./weekTasks";

export const buttonsListeners = () => {
  const taskList: Task[] = JSON.parse(
    String(localStorage.getItem(String(localStorage.getItem("primaryProject"))))
  );
  const importantBtn = document.querySelector("#importantBtn") as HTMLElement;
  const todayBtn = document.querySelector("#todayBtn") as HTMLElement;
  const weekBtn = document.querySelector("#weekBtn") as HTMLElement;
  const allTasks = document.querySelector("#allTasks") as HTMLElement;
  const mainContent = document.querySelector(".mainContent") as HTMLElement;

  window.onload = () => {
    mainContent.innerHTML = "";
    displayTasks(taskList);
  };
  allTasks.addEventListener("click", () => {
    mainContent.innerHTML = "";
    displayTasks(
      JSON.parse(
        String(
          localStorage.getItem(String(localStorage.getItem("primaryProject")))
        )
      )
    );
  });
  importantBtn.addEventListener("click", () => {
    mainContent.innerHTML = "";
    importantTasks();
  });
  todayBtn.addEventListener("click", () => {
    mainContent.innerHTML = "";
    todayTasks();
  });
  weekBtn.addEventListener("click", () => {
    mainContent.innerHTML = "";
    weekTasks();
  });
};
