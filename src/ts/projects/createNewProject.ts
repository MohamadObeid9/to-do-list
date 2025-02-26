import { createProjectContainer } from "./createProjectContainer";
import doneIcon = require("./../../img/done-mini-1484-svgrepo-com.svg");

export const createNewProject = () => {
  const projects = document.querySelector("#projects") as HTMLElement;

  const inputContainer = document.createElement("form");
  inputContainer.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "p-3",
    "pl-5",
    "mx-5",
    "rounded-md",
    "mb-2"
  );
  projects.appendChild(inputContainer);

  const input = document.createElement("input");
  input.autofocus = true;
  input.classList.add("w-full", "inline", "bg-slate-200", "rounded-md", "p-1");
  inputContainer.appendChild(input);

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  inputContainer.appendChild(submitBtn);

  const done = document.createElement("img");
  done.src = String(doneIcon);
  done.classList.add("text-primary", "h-5", "w-5", "m-1");
  submitBtn.appendChild(done);

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value == "") {
      inputContainer.remove();
      console.log("input invalid");
    } else {
      const inputText = input.value; // Use input.value to get the input text content instead of input.textContent
      inputContainer.remove();

      createProjectContainer(inputText);
    }
  });
};
