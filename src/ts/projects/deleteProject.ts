import { displayPrimaryTasks } from "./displayPrimaryTasks";

export const deleteProject = (element: HTMLElement, projectName: string) => {
  element.remove();

  const list: string[] =
    JSON.parse(String(localStorage.getItem("projects"))) || [];
  const newList = list.filter((project) => project !== projectName);
  localStorage.setItem("primaryProject", "defaultProject");
  localStorage.setItem("projects", JSON.stringify(newList));
  localStorage.removeItem(projectName);
  displayPrimaryTasks();
};
