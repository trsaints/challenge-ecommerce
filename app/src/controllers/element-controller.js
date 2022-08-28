function generateElement(elem, elemClass) {
  const currElement = document.createElement(elem);
  currElement.classList.add(elemClass);

  return currElement;
}

function clearContent(target) {
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
}

export const elementController = {
  generateElement,
  clearContent,
}