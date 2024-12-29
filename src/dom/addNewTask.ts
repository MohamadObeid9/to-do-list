import { addTaskToTaskList } from "./addTaskToTaskList";
import { defaultTaskList } from "../logic/task";

export const addNewTask = () => {
  const tasklist = defaultTaskList();
  const addBtn = document.querySelector("#taskBtn") as HTMLButtonElement;

  // Add event listener to the add button
  addBtn.addEventListener("click", () => {
    if (addBtn.textContent === "Add task") {
      // Get the values from the input fields
      const title = (document.querySelector("#title") as HTMLInputElement).value;
      const text = (document.querySelector("#description") as HTMLInputElement).value;
      const date = (document.querySelector("#dueDate") as HTMLInputElement).value;
      const important = (document.querySelector("#isImportant") as HTMLInputElement).checked;

      // Add the new task to the task list
      addTaskToTaskList(tasklist, title, text, date, important);
    }
  });
};
