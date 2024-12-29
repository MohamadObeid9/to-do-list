import { defaultTaskList } from "../logic/task";
import { updateTaskInTaskList } from "./updateTaskInTaskList"; // Import the new function
import { displayTasks } from "./displayTasks";
import { format } from "date-fns";

// Function to handle the edit button click event
export const editBtn = function (parent: HTMLElement, i: number) {
  const tasklist = defaultTaskList();
  const mainContent = document.querySelector(".main-content-body") as HTMLElement;
  const taskBtn = document.querySelector("#taskBtn") as HTMLButtonElement;
  const dialog = document.querySelector("dialog") as HTMLDialogElement;
  const title = document.querySelector("#title") as HTMLInputElement;
  const text = document.querySelector("#description") as HTMLInputElement;
  const date = document.querySelector("#dueDate") as HTMLInputElement;
  const important = document.querySelector("#isImportant") as HTMLInputElement;

  // Ensure the date input field is of type "date"
  date.type = "date";

  // Function to populate the dialog with task details
  const showDialog = () => {
    taskBtn.textContent = "Edit task";
    dialog.show();
    title.value = tasklist[i].title;
    text.value = tasklist[i].text;
    date.value = format(tasklist[i].date,"yyyy-MM-dd");
    important.checked = tasklist[i].important;

    // Add event listener to the task button for editing the task
    taskBtn.onclick = () => {
      // Clear existing tasks
      mainContent.innerHTML = "";
      updateTaskInTaskList(
        tasklist,
        i,
        title.value,
        text.value,
        date.value,
        important.checked
      );
      dialog.close();
      displayTasks(tasklist); // Pass the updated task list to displayTasks
    };
  };

  // Add click event listener to the parent element
  parent.addEventListener("click", showDialog);
};
