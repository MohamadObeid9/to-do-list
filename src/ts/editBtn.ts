import { updateTaskInTaskList } from "./updateTaskInTaskList"; // Import the new function
import { displayTasks } from "./displayTasks";
import { format } from "date-fns";
import { Task } from "./task";

// Function to handle the edit button click event
export const editBtn = function (
  parent: HTMLElement,
  i: number,
  tasklist: Task[]
) {
  const mainContent = document.querySelector(".mainContent") as HTMLElement;
  const taskBtn = document.querySelector("#taskBtn") as HTMLButtonElement;
  const dialog = document.querySelector("dialog") as HTMLDialogElement;
  const text = document.querySelector("#description") as HTMLInputElement;
  const date = document.querySelector("#dueDate") as HTMLInputElement;
  const important = document.querySelector("#isImportant") as HTMLInputElement;

  // Ensure the date input field is of type "date"
  date.type = "date";

  // Function to populate the dialog with task details
  const showDialog = () => {
    if (taskBtn) {
      taskBtn.textContent = "Edit task";
      dialog.show();
      text.value = tasklist[i].title;
    } else {
      console.error("Task button not found");
      return;
    }
    const taskDate = new Date(tasklist[i].date);
    if (!isNaN(taskDate.getTime())) {
      console.log(format(taskDate, "yyyy-MM-dd"));
      date.value = format(taskDate, "yyyy-MM-dd");
    } else {
      console.error("Invalid date value");
    }
    important.checked = tasklist[i].important;

    // Add event listener to the task button for editing the task
    taskBtn.onclick = () => {
      // Clear existing tasks
      mainContent.innerHTML = "";
      updateTaskInTaskList(
        tasklist,
        i,
        text.value,
        format(new Date(date.value), "dd-MM-yyyy"),
        important.checked
      );
      dialog.close();
      displayTasks(tasklist); // Pass the updated task list to displayTasks
      text.value = "";
      date.value = format(Date(), "yyyy-MM-dd");
      important.checked = false;
    };
  };

  // Add click event listener to the parent element
  parent.addEventListener("click", showDialog);
};
