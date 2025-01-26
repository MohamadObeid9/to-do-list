import { addNewTask } from "./addNewTask";
// import { buttonsListeners } from "./buttonsListeners";
import { changeTitle } from "./changeTitle";

import { openDialog } from "./openDialog";
export const launchPrg = () => {
  // buttonsListeners(); unfinished feature
  changeTitle();
  openDialog();
  addNewTask();
  console.log("hello world");
};
