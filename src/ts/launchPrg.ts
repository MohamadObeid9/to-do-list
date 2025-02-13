import { addNewTask } from "./addNewTask";
import { addProject } from "./addProject";
import { buttonsListeners } from "./buttonsListeners";
import { changeTitle } from "./changeTitle";
import { defaultTaskList } from "./defaultTasks";
import { deleteProjcet } from "./deleteProject";
import { displayProjects } from "./displayProject";
import { openDialog } from "./openDialog";

export const projectsList: string[] = ["defaultProject"];

export const launchPrg = () => {
  const deleteBtn = document.querySelector(".delete-project") as HTMLElement;
  deleteBtn?.addEventListener("click", () => {
    deleteProjcet(deleteBtn);
  });

  if (localStorage.getItem("projects") === null) {
    localStorage.setItem("projects", JSON.stringify(projectsList));
  }
  localStorage.setItem("primaryProject","defaultProject")
  localStorage.setItem("defaultProject", JSON.stringify(defaultTaskList()));
  buttonsListeners();
  changeTitle();
  openDialog();
  displayProjects();
  addNewTask();
  addProject();
  console.log("hello world");
};
