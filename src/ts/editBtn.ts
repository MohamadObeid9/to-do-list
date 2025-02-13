import { updateTaskInTaskList } from "./updateTaskInTaskList"; // Import the new function
import { displayTasks } from "./displayTasks";
import { format } from "date-fns";
import { Task } from "./task";

// Function to handle the edit button click event
export const editBtn = function (i: number) {
  const primaryProject = localStorage.getItem("primaryProject");
  if (!primaryProject) {
    console.error("Primary project not found in localStorage");
    return;
  }

  const tasklist: Task[] = JSON.parse(
    String(localStorage.getItem(primaryProject))
  );
  if (!tasklist) {
    console.error("Task list not found in localStorage");
    return;
  }

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
    if (!taskBtn) {
      console.error("Task button not found");
      return;
    }

    taskBtn.textContent = "Edit task";
    dialog.show();
    text.value = tasklist[i].title;

    const taskDate = new Date(tasklist[i].date);
    date.value = !isNaN(taskDate.getTime())
      ? format(taskDate, "yyyy-MM-dd")
      : format(new Date(), "yyyy-MM-dd");
    important.checked = tasklist[i].important;

    // Remove existing event listener to prevent multiple listeners
    const newTaskBtn = taskBtn.cloneNode(true) as HTMLButtonElement; //thanks github copilot , you're my hero
    taskBtn.parentNode?.replaceChild(newTaskBtn, taskBtn);

    // Add event listener to the new task button for editing the task
    newTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // Clear existing tasks
      mainContent.innerHTML = "";
      updateTaskInTaskList(
        tasklist,
        i,
        text.value,
        date.value
          ? format(new Date(date.value), "dd-MM-yyyy")
          : tasklist[i].date,
        important.checked
      );
      dialog.close();
      displayTasks(tasklist); // Pass the updated task list to displayTasks
      text.value = "";
      date.value = format(new Date(), "yyyy-MM-dd");
      important.checked = false;
    });
  };

  showDialog();
};
