import { format } from "date-fns";
import { addNewTask } from "./addNewTask";

export const openDialog = () => {
  // Select the dialog element
  const dialog = document.querySelector("dialog") as HTMLDialogElement;
  // Select the add task button
  const addTaskBtn = document.querySelector("#addTaskBtn") as HTMLButtonElement;
  const dueDate = document.querySelector("#dueDate") as HTMLInputElement;
  const description = document.querySelector(
    "#description"
  ) as HTMLInputElement;
  // Select the submit button
  const submitBtn = document.querySelector("#taskBtn") as HTMLButtonElement;
  // Select the close task button
  const closeTaskBtn = document.querySelector(
    "#closeModalBtn"
  ) as HTMLButtonElement;

  // Function to close the dialog and prevent default behavior
  const closeDialog = (e: Event) => {
    e.preventDefault();
    dialog.close();
  };

  // Add click event listener to the add task button
  addTaskBtn.addEventListener("click", () => {
    // Set the submit button text to "Add Task"
    submitBtn.textContent = "Add Task";

    dueDate.value = format(new Date(), "yyyy-MM-dd");
    // Show the dialog
    dialog.show();
  });

  // Add click event listener to the submit button
  submitBtn.addEventListener("click", (e) => {
    closeDialog(e);
    addNewTask();
    description.value = "";
  });

  // Add click event listener to the close task button
  closeTaskBtn.addEventListener("click", closeDialog);
};
