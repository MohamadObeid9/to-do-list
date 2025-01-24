export const deleteTask = function () {
  // Get the grandparent element of the current element
  const parentElement = this.parentElement?.parentElement
    .parentElement as HTMLElement;

  // Remove the grandparent element from the DOM
  parentElement.remove();
};
