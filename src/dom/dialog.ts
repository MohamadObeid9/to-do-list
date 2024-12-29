export const openDialog = () => {
  // Select the dialog element
  const dialog = document.querySelector("dialog");
  // Select the add task button
  const addTaskBtn = document.querySelector("#addTaskBtn") as HTMLButtonElement;
  // Select the submit button
  const submitBtn = document.querySelector("#taskBtn") as HTMLButtonElement;
  // Select the close task button
  const closeTaskBtn = document.querySelector(
    "#closeModalBtn"
  ) as HTMLButtonElement;

  // Function to close the dialog and prevent default behavior
  const closeDialog = (e: Event) => {
    e.preventDefault();
    dialog.close();
  };

  // Add click event listener to the add task button
  addTaskBtn.addEventListener("click", () => {
    // Set the submit button text to "Add Task"
    submitBtn.textContent = "Add Task";
    // Set the submit button id to "1"
    submitBtn.id = "1";
    // Show the dialog
    dialog.show();
  });

  // Add click event listener to the submit button
  submitBtn.addEventListener("click", closeDialog);

  // Add click event listener to the close task button
  closeTaskBtn.addEventListener("click", closeDialog);
};
