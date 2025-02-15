import { addTaskToTaskList } from "./addTaskToTaskList";

export const addNewTask = (): void => {
  // Get the values from the input fields
  const descriptionInput = document.querySelector("#description") as HTMLInputElement | null;
  const dueDateInput = document.querySelector("#dueDate") as HTMLInputElement | null;
  const isImportantInput = document.querySelector("#isImportant") as HTMLInputElement | null;

  if (!descriptionInput || !dueDateInput || !isImportantInput) {
    console.error("One or more input fields are missing.");
    return;
  }

  const text = descriptionInput.value.trim();
  const date = dueDateInput.value;
  const important = isImportantInput.checked;

  // Add the new task to the task list
  addTaskToTaskList(text, date, important);
};
