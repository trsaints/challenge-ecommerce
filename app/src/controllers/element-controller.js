export const elementController = {
  generate(elem, elemClass) {
    const currElement = document.createElement(elem);
    currElement.classList.add(elemClass);

    return currElement;
  },

  clear(target) {
    while (target.firstChild) {
      target.removeChild(target.firstChild);
    }
  },
};
