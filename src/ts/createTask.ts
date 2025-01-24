import { deleteTask } from "./deleteBtn";

export const createTask = () => {
  const mainContent = document.querySelector(".mainContent") as HTMLElement;
  // Create a container div for the task
  const divContainer = document.createElement("div");
  divContainer.classList.add(
    "bg-red-300",
    "rounded-lg",
    "dark:bg-slate-500",
    "w-full",
    "h-[10%]",
    "p-2",
    "flex",
    "justify-between"
  );
  mainContent.appendChild(divContainer);

  const form = document.createElement("form");
  form.classList.add("flex");
  divContainer.appendChild(form);

  const input = document.createElement("input");
  input.classList.add("w-5", "h-5", "mx-3", "mt-2");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "label");
  form.appendChild(input);

  const label = document.createElement("label");
  label.setAttribute("for", "label");
  label.classList.add("hover:font-bold");
  input.addEventListener("click", () => {
    label.classList.toggle("line-through");
  });
  form.appendChild(label);

  const description = document.createElement("div");
  description.textContent = "Default Task";
  description.classList.add("tracking-wide", "mt-1", "text-lg");
  label.appendChild(description);

  const date = document.createElement("div");
  date.textContent = "03-09-2004";
  date.classList.add("text-[14px]", "text-slate-900", "italic");
  label.appendChild(date);

  const buttons = document.createElement("div");
  buttons.classList.add("flex");
  divContainer.appendChild(buttons);

  const editBtn = document.createElement("div");
  editBtn.textContent = "Edit";
  editBtn.classList.add(
    "bg-blue-800",
    "hover:bg-primary",
    "px-1",
    "flex",
    "justify-center",
    "items-center",
    "text-xl",
    "mr-2",
    "text-slate-300",
    "w-20",
    "rounded-lg"
  );
  buttons.appendChild(editBtn);

  const deleteBtn = document.createElement("div");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add(
    "bg-blue-800",
    "hover:bg-primary",
    "px-1",
    "flex",
    "justify-center",
    "items-center",
    "text-xl",
    "mr-2",
    "text-slate-300",
    "w-20",
    "rounded-lg"
  );
  deleteBtn.addEventListener("click", deleteTask);
  buttons.appendChild(deleteBtn);
};
