import { displayTasks } from "./displayTasks";
import { Task } from "./task";

export const importantTasks = () => {
  const taskList: Task[] =
    JSON.parse(
      String(
        localStorage.getItem(String(localStorage.getItem("primaryProject")))
      )
    ) || [];
  const newList: Task[] = taskList.filter((task: Task) => task.important);
  displayTasks(newList);
};
