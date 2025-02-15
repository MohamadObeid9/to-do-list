import { Task } from "./task";

export const updateTaskInTaskList = (
  taskList: Task[],
  index: number,
  title: string,
  date: string,
  important: boolean
): void => {
  if (index < 0 || index >= taskList.length) {
    console.error("Invalid index");
    return;
  }

  const task = taskList[index];
  task.title = title;
  task.date = date;
  task.important = important;

  const primaryProject = localStorage.getItem("primaryProject");
  if (primaryProject) {
    localStorage.setItem(primaryProject, JSON.stringify(taskList));
  } else {
    console.error("Primary project not found in localStorage");
  }
};
