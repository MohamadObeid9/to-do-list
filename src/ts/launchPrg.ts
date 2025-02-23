import { addProject } from "./projects/addProject";
import { buttonsListeners } from "./buttons/buttonsListeners";
import { changeTitle } from "./buttons/changeTitle";
import { defaultTaskList } from "./tasks/defaultTasks";
import { displayProjects } from "./projects/displayProject";
import { openDialog } from "./tasks/openDialog";

export const projectsList: string[] = ["defaultProject"];

export const launchPrg = () => {
  if (localStorage.getItem("projects") === null) {
    localStorage.setItem("projects", JSON.stringify(projectsList));
  }
  localStorage.setItem("primaryProject", "defaultProject");
  localStorage.setItem("defaultProject", JSON.stringify(defaultTaskList()));
  buttonsListeners();
  changeTitle();
  openDialog();
  displayProjects();
  addProject();
  console.log("hello world");
};
