import { createNewProject } from "./createNewProject";

export const addProject = () => {
  const addBtn = document.querySelector(".addProject");
  addBtn?.addEventListener("click", createNewProject);
};
