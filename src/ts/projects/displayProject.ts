import { createProjectContainer } from "./createProjectContainer";

export const displayProjects = (): void => {
  const list: string[] =
    JSON.parse(String(localStorage.getItem("projects"))) || [];

  list.forEach((element) => {
    createProjectContainer(element);
  });
};


