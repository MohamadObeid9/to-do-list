import { deleteProjcet } from "./deleteProject";
export const createProject = () => {
  const projects = document.querySelector(".projects") as HTMLElement;

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
  projects?.appendChild(container);

  const text = document.createElement("div");
  text.textContent = "Some text";
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
  });
  container.appendChild(img);
};
