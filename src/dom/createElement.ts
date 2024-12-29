export const createElement = (
  parent: HTMLElement,
  type: string,
  text?: string,
  style?: string
) => {
  // Create a new element of the specified type
  const element = document.createElement(type);
  // Set the text content of the element, if provided
  element.textContent = text;
  // Apply the specified CSS styles to the element, if provided
  element.style.cssText = style;
  // Append the element to the parent element
  parent.appendChild(element);
  // Return the created element
  return element;
};
