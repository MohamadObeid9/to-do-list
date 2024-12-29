import { displayTasks } from "./dom/displayTasks";
import { addNewTask } from "./dom/addNewTask";
import { openDialog } from "./dom/dialog";
import { changeTitle } from "./dom/changeTitle";
import { importantTasks } from "./dom/importantTasks";
import { allTasks } from "./dom/allTasks";
allTasks();

// Initialize the application by adding a new task
addNewTask();

// Open the dialog for user interactions
openDialog();

// Change the title of the to-do list
changeTitle();

// Display the current tasks
displayTasks();
importantTasks();
