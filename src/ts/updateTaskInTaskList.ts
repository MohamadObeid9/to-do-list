import { Task } from "./task";

export const updateTaskInTaskList = (
  taskList: Task[],
  index: number,
  title: string,
  date: string,
  important: boolean
) => {
  if (index < 0 || index >= taskList.length) return; // Invalid index
  taskList[index].title = title;
  taskList[index].date = date;
  taskList[index].important = important;
  localStorage.setItem(
    String(localStorage.getItem("primaryProject")),
    JSON.stringify(taskList)
  );
};
