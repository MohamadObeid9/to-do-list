export class Task {
  title: string;
  date: string;
  important: boolean;
  checked: boolean;
  constructor(
    title: string,
    date: string,
    important: boolean,
    checked: boolean
  ) {
    this.title = title;
    this.date = date;
    this.important = important;
    this.checked = checked;
  }
}
