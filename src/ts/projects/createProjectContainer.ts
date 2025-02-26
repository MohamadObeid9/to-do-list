import { deleteProject } from "./deleteProject";
import { displayPrimaryTasks } from "./displayPrimaryTasks";
import trashCan = require("./../../img/trash-can-svgrepo-com (3).svg");

export const createProjectContainer = (element: string) => {
  const projects = document.querySelector("#projects") as HTMLElement;
  const list: string[] =
    JSON.parse(String(localStorage.getItem("projects"))) || [];

  if (!list.includes(element)) {
    list.push(element);
    localStorage.setItem("projects", JSON.stringify(list));
    localStorage.setItem(element, JSON.stringify([]));
  }

  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "p-3",
    "pl-5",
    "mx-5",
    "rounded-md",
    "hover:bg-gray-400",
    "mb-2",
    "group"
  );
  projects.appendChild(container);

  const text = document.createElement("div");
  text.textContent = element.trim();
  text.classList.add(
    "text-slate-400",
    "text-xl",
    "inline",
    "group-hover:text-primary"
  );
  container.appendChild(text);

  container.addEventListener("click", () => {
    localStorage.setItem("primaryProject", String(text.textContent));
    displayPrimaryTasks();
  });

  const img = document.createElement("img");
  img.src = String(trashCan);
  img.alt = "trash-can";
  img.classList.add("h-4", "w-4", "inline", "delete-project");
  img.addEventListener("click", (event) => {
    event.stopPropagation(); //without this , when i delete a project i stay in the plank page . with it , i return to the defaultProject page
    deleteProject(container, element);
  });
  container.appendChild(img);
};
