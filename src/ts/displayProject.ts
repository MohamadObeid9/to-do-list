import { deleteProjcet } from "./deleteProject";
import { displayTasks } from "./displayTasks";

export const displayProjects = () => {
  const projects = document.querySelector("#projects") as HTMLElement;
  const mainContent = document.querySelector(".mainContent") as HTMLElement;
  const list: string[] = JSON.parse(String(localStorage.getItem("projects")));
  list.forEach((element) => {
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
    container.addEventListener("click", () => {
      localStorage.setItem("primaryProject", text.textContent as string);
      mainContent.innerHTML = "";
      displayTasks(
        JSON.parse(
          String(
            localStorage.getItem(String(localStorage.getItem("primaryProject")))
          )
        )
      );
    });

    const text = document.createElement("div");
    text.textContent = element;
    text.classList.add(
      "text-slate-400",
      "text-xl",
      "inline",
      "group-hover:text-primary"
    );
    container.appendChild(text);

    const img = document.createElement("img");
    img.src = "46a3a45095cea947aa35.svg";
    img.alt = "trash-can";
    img.classList.add("h-4", "w-4", "inline", "delete-project");
    img.addEventListener("click", () => {
      deleteProjcet(img);
      const newList = list.filter(function (project) {
        return project != element;
      });
      localStorage.setItem("projects", JSON.stringify(newList));
    });
    container.appendChild(img);
  });
};
