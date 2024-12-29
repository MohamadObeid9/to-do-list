import { createElement } from "./createElement";
import { Task } from "../logic/task";
import { deleteBtn } from "./deleteBtn";
import { editBtn } from "./editBtn";

export const createTask = (i: number, taskList?: Task[]) => {
  const trashCan = require("../svg/trash-can-svgrepo-com.svg");
  const editpen = require("../svg/pencil-svgrepo-com.svg");

  const mainContent = document.querySelector(".main-content-body");

  // Create a container div for the task
  const divContainer = document.createElement("div");
  divContainer.classList.add("divContainer");
  mainContent.appendChild(divContainer);

  // Create and append the task title
  const h3 = createElement(divContainer, "h3", taskList[i].title);

  // Create and append the task description
  const para = createElement(divContainer, "p", taskList[i].text);

  // Create and append the task due date
  const paraDate = createElement(
    divContainer,
    "div",
    `Due: ${taskList[i].date}`
  );

  // If the task is marked as important, add a strong element
  if (taskList[i].important) {
    let text: string;
    const strongText: string =
      taskList[i].important === true ? (text = "Important") : (text = "");
    const strong = createElement(divContainer, "strong", strongText);
    strong.id = "strong";
  }

  // Add a line break
  const br = createElement(divContainer, "br");

  // Create and append a sub element to mark the task as completed/incompleted
  const subText = ["Mark as completed", "Mark as Incompleted"];
  const sub = createElement(
    divContainer,
    "sub",
    subText[0],
    "font-size: 14px;font-style: italic;color: #575757;cursor: pointer;"
  );
  sub.addEventListener("click", () => {
    if (sub.textContent === subText[0]) {
      sub.textContent = subText[1];
      h3.classList.add("line-through");
      para.classList.add("line-through");
      paraDate.classList.add("line-through");
    } else if (sub.textContent === subText[1]) {
      sub.textContent = subText[0];
      h3.classList.remove("line-through");
      para.classList.remove("line-through");
      paraDate.classList.remove("line-through");
    }
  });

  // Create a container for the buttons
  const buttonsContainer = createElement(
    divContainer,
    "div",
    "",
    "text-align: right;"
  );

  // Create and append the delete button with trash can icon
  const trashbutton = createElement(buttonsContainer, "button");
  const trashimg = createElement(trashbutton, "img") as HTMLImageElement;
  trashimg.style.cssText = "width:14px;heigth:14px";
  trashimg.src = trashCan;
  trashimg.addEventListener("click", deleteBtn);

  // Create and append the edit button with pencil icon
  const editbutton = createElement(buttonsContainer, "button");
  const editimg = createElement(editbutton, "img") as HTMLImageElement;
  editimg.style.cssText = "width:14px;heigth:14px;";
  editimg.src = editpen;
  editimg.addEventListener("click", () => editBtn(editimg, i));
};
