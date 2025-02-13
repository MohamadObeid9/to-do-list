import { deleteProjcet } from "./deleteProject";
// import { projectsList } from "./launchPrg";

export const createProject = () => {
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
  done.src = "297a9555e78e7dcf71a8.svg";
  done.classList.add("text-primary", "h-5", "w-5", "m-1");
  submitBtn.appendChild(done);

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value == "") {
      inputContainer.remove();
      console.log("input invalid");
    } else {
      const inputText = input.value; // Use input.value to get the input text content instead of input.textContent
      const projectsList: string[] = JSON.parse(
        String(localStorage.getItem("projects"))
      );
      projectsList.push(inputText);
      const list: string[] = [];
      localStorage.setItem("projects", JSON.stringify(projectsList));
      localStorage.setItem(`${inputText}`, JSON.stringify(list));
      inputContainer.remove();

      const container = document.createElement("div");
      container.classList.add(
        "flex",
        "items-center",
        "justify-between",
        "p-3",
        "pl-5",
        "mx-5",
        "rounded-md",
        "hover:bg-gray-400",
        "mb-2",
        "group"
      );
      projects.appendChild(container);

      const text = document.createElement("div");
      text.textContent = inputText;
      text.classList.add(
        "text-slate-400",
        "text-xl",
        "inline",
        "group-hover:text-primary"
      );
      container.appendChild(text);

      const img = document.createElement("img");
      img.src = "46a3a45095cea947aa35.svg";
      img.alt = "trash-can";
      img.classList.add("h-4", "w-4", "inline", "delete-project");
      img.addEventListener("click", () => {
        deleteProjcet(img);
        const newList = projectsList.filter(function (project) {
          return project != inputText;
        });
        localStorage.setItem("projects", JSON.stringify(newList));
        localStorage.removeItem(`${inputText}`);
      });
      container.appendChild(img);
    }
  });
};
