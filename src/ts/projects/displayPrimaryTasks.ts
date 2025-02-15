import { displayTasks } from "../tasks/displayTasks";

export const displayPrimaryTasks = () => {
  const mainContent = document.querySelector(".mainContent") as HTMLElement;
  mainContent.innerHTML = "";
  const primaryProject = localStorage.getItem("primaryProject");
  if (primaryProject) {
    const tasks =
      JSON.parse(String(localStorage.getItem(primaryProject))) || [];
    displayTasks(tasks);
  }
};
