import { isSameDay, parse } from "date-fns";
import { Task } from "../tasks/task";
import { displayTasks } from "../tasks/displayTasks";
export const todayTasks = () => {
  const taskList: Task[] =
    JSON.parse(
      String(
        localStorage.getItem(String(localStorage.getItem("primaryProject")))
      )
    ) || [];

  const newList: Task[] = taskList.filter((task: Task) => {
    const taskDate = parse(task.date, "dd-MM-yyyy", new Date());
    if (isSameDay(taskDate, new Date())) {
      return task;
    }
  });

  displayTasks(newList);
};
