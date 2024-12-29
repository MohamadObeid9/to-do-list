export const changeTitle = () => {
  // Select all elements with the class 'taskbar-button'
  const buttons =
    document.querySelectorAll<HTMLButtonElement>(".taskbar-button");

  // Select the element with the class 'title'
  const title = document.querySelector(".title") as HTMLElement;

  // Add a click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Change the text content of the title element to match the button's text content
      title.textContent = button.textContent;
    });
  });
};
