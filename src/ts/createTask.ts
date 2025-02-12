import { deleteTask } from "./deleteBtn";
import { editBtn } from "./editBtn";
import { Task } from "./task";

export const createTask = (i: number, taskList: Task[]) => {
  // const taskList: Task[] = JSON.parse(String(localStorage.getItem("tasks")));
  const mainContent = document.querySelector(".mainContent") as HTMLElement;
  // Create a container div for the task
  const divContainer = document.createElement("div");
  divContainer.classList.add(
    "hover:ring",
    "ring-primary",
    "bg-red-300",
    "rounded-lg",
    "dark:bg-slate-500",
    "w-full",
    "min-h-[10%]",
    "p-2",
    "my-2",
    "flex",
    "justify-between"
  );
  mainContent.appendChild(divContainer);

  const textContainer = document.createElement("div");
  textContainer.classList.add("flex");
  divContainer.appendChild(textContainer);

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("flex");
  textContainer.appendChild(inputContainer);

  const input = document.createElement("input");
  input.classList.add("w-5", "h-5", "mx-3", "mt-2");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `label_${i}`);
  inputContainer.appendChild(input);

  const label = document.createElement("label");
  label.setAttribute("for", `label_${i}`);
  label.classList.add("hover:font-bold");
  input.addEventListener("click", () => {
    label.classList.toggle("line-through");
  });
  inputContainer.appendChild(label);

  const description = document.createElement("div");
  description.textContent = taskList[i].title;
  description.classList.add("tracking-wide", "mt-1", "text-lg", "max-w-96");
  label.appendChild(description);

  const date = document.createElement("div");
  date.textContent = taskList[i].date;
  date.classList.add("text-[12px]", "text-slate-900", "italic");
  label.appendChild(date);

  if (taskList[i].important) {
    divContainer.classList.remove("ring-primary");
    divContainer.classList.add("ring-red-500");
    const important = document.createElement("span");
    important.textContent = "(Important)";
    important.classList.add(
      "mx-2",
      "mt-1",
      "text-lg",
      "text-slate-950",
      "font-bold"
    );
    textContainer.appendChild(important);
  }

  const buttons = document.createElement("div");
  buttons.classList.add("flex");
  divContainer.appendChild(buttons);

  const editButton = document.createElement("div");
  editButton.textContent = "Edit";
  editButton.classList.add(
    "bg-blue-800",
    "hover:cursor-pointer",
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
  editButton.addEventListener("click", () => editBtn(editButton, i));
  buttons.appendChild(editButton);

  const deleteBtn = document.createElement("div");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add(
    "bg-blue-800",
    "hover:cursor-pointer",
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
  deleteBtn.addEventListener("click", () => deleteTask(deleteBtn, i));
  buttons.appendChild(deleteBtn);
};
