import { addTaskToTaskList } from "./addTaskToTaskList";

export const addNewTask = () => {
  // Get the values from the input fields
  const text = (document.querySelector("#description") as HTMLInputElement)
    .value;
  const date = (document.querySelector("#dueDate") as HTMLInputElement).value;
  const important = (document.querySelector("#isImportant") as HTMLInputElement)
    .checked;

  // Add the new task to the task list
  addTaskToTaskList(text, date, important);
};
