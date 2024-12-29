import { Task } from "../logic/task";

export const updateTaskInTaskList = (
  taskList: Task[],
  index: number,
  title: string,
  text: string,
  date: string,
  important: boolean
) => {
  if (index < 0 || index >= taskList.length) return; // Invalid index
  taskList[index].title = title;
  taskList[index].text = text;
  taskList[index].date = date;
  taskList[index].important = important;
};
