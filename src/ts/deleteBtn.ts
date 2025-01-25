import { Task } from "./task";

export const deleteTask = function (element: HTMLElement, i: number) {
  const taskList: Task[] = JSON.parse(String(localStorage.getItem("tasks")));
  taskList.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  console.log(JSON.parse(String(localStorage.getItem("tasks"))));
  // Get the grandparent element of the current element
  element = element.parentElement as HTMLElement;
  const parentElement = element.parentElement as HTMLElement;

  // Remove the grandparent element from the DOM
  parentElement.remove();
};
