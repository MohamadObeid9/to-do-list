export { defaultTaskList, Task };

interface Task {
  title: string;
  text: string;
  date: string;
  important: boolean;
}

class Task {
  constructor(title: string, text: string, date: string, important: boolean) {
    this.title = title;
    this.text = text;
    this.date = date;
    this.important = important;
  }
}

const defaultTaskList = () => {
  const taskList = [];
  const task1 = new Task(
    "Default Task",
    "This is a Default Task",
    "12-20-2024",
    true
  ); // Create an important task
  const task2 = new Task("test", "Hello there", "12-29-2024", false); // Create a non-important task
  taskList.push(task1);
  taskList.push(task2);
  return taskList; // Return the list of tasks
};
