import { isSameWeek, parse } from "date-fns";
import { Task } from "./task";
import { displayTasks } from "./displayTasks";
export const weekTasks = () => {
  const taskList: Task[] =
    JSON.parse(
      String(
        localStorage.getItem(String(localStorage.getItem("primaryProject")))
      )
    ) || [];

  const newList: Task[] = taskList.filter((task: Task) => {
    const taskDate = parse(task.date, "dd-MM-yyyy", new Date());
    if (isSameWeek(taskDate, new Date())) {
      return task;
    }
  });

  displayTasks(newList);
};
