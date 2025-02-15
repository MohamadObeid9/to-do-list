import { format } from "date-fns";
import { addNewTask } from "./addNewTask";

export const openDialog = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.querySelector("dialog") as HTMLDialogElement;
    const addTaskBtn = document.querySelector("#addTaskBtn") as HTMLButtonElement;
    const dueDate = document.querySelector("#dueDate") as HTMLInputElement;
    const description = document.querySelector("#description") as HTMLInputElement;
    const submitBtn = document.querySelector("#taskBtn") as HTMLButtonElement;
    const closeTaskBtn = document.querySelector("#closeModalBtn") as HTMLButtonElement;

    const closeDialog = (e: Event) => {
      e.preventDefault();
      dialog.close();
    };

    const openDialog = () => {
      submitBtn.textContent = "Add Task";
      dueDate.value = format(new Date(), "yyyy-MM-dd");
      dialog.show();
    };

    const submitTask = (e: Event) => {
      closeDialog(e);
      addNewTask();
      description.value = "";
    };

    addTaskBtn.addEventListener("click", openDialog);
    submitBtn.addEventListener("click", submitTask);
    closeTaskBtn.addEventListener("click", closeDialog);
  });
}
