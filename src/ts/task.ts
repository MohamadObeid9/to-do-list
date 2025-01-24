export class Task {
  title: string;
  date: string;
  important: boolean;
  constructor(title: string, date: string, important: boolean) {
    this.title = title;
    this.date = date;
    this.important = important;
  }
}
