import { isSameDay } from "date-fns";
import { Task } from "./task";
import { displayTasks } from "./displayTasks";
export const todayTasks = () => {
  const taskList: Task[] =
    JSON.parse(String(localStorage.getItem("tasks"))) || [];
  const newList: Task[] = taskList.filter((task: Task) => {
    const arr = task.date.split("-");
    console.log(new Date(Number(arr[2]), Number(arr[1]) - 1, Number(arr[0])));
    if (
      isSameDay(
        new Date(Number(arr[2]), Number(arr[1]), Number(arr[0])),
        new Date()
      )
    ) {
      return task;
    }
    // const taskDate = new Date(Date.parse(format(task.date, "MMM d, yyyy")));
    // if (isNaN(taskDate.getTime())) {
    //   console.error(`Invalid date: ${task.date}`);
    //   return false;
    // }
    // return isSameDay(taskDate, new Date());
  });
  displayTasks(newList);
};
