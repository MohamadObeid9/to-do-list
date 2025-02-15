import { displayTasks } from "../tasks/displayTasks";
import { Task } from "../tasks/task";

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
