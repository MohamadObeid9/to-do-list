import { addNewTask } from "./addNewTask";
import { addProject } from "./addProject";
import { buttonsListeners } from "./buttonsListeners";
import { changeTitle } from "./changeTitle";
// import { defaultTaskList } from "./defaultTasks";
import { deleteProjcet } from "./deleteProject";
// import { displayTasks } from "./displayTasks";
import { openDialog } from "./openDialog";

export const launchPrg = () => {
  const deleteBtn = document.querySelector(".delete-project") as HTMLElement;
  deleteBtn?.addEventListener("click", () => {
    deleteProjcet(deleteBtn);
  });
  buttonsListeners(); //unfinished feature
  // displayTasks(defaultTaskList());
  changeTitle();
  openDialog();
  addNewTask();
  addProject();
  console.log("hello world");
};
