export const deleteBtn = function () {
  // Get the grandparent element of the current element
  let parentElement = this.parentElement?.parentElement
    .parentElement as HTMLElement;

  // Remove the grandparent element from the DOM
  parentElement.remove();
};
