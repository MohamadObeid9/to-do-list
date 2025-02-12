import { createProject } from "./createProject";

export const addProject = () => {
  const addBtn = document.querySelector(".addProject");
  addBtn?.addEventListener("click", createProject);
};
