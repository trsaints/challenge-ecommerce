export const elementController = {
  generate(element, selector) {
    const currElement = document.createElement(element);
    currElement.classList.add(selector);

    return currElement;
  },

  clear(target) {
    while (target.firstChild) {
      target.removeChild(target.firstChild);
    }
  },
};
