import { addNewTask } from "./addNewTask";
import { changeTitle } from "./changeTitle";
import { displayTasks } from "./displayTasks";
import { openDialog } from "./openDialog";
export const launchPrg = () => {
  // import { createTask } from "./createTask";
  // import { createPara } from "./script";
  // createPara();
  changeTitle();
  displayTasks();
  openDialog();
  addNewTask();
  // createTask();
  console.log("hello world");
};
