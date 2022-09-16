export const elementController = {
  show(target) {
    if (target.classList.contains("hidden")) {
      target.classList.remove("hidden");
    }
  },

  hide(target) {
    if (!target.classList.contains("hidden")) {
      target.classList.add("hidden");
    }
  },

  load(target) {
    if (target.classList.contains("loading")) {
      target.classList.remove("loading");
    }
  },

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

  getContext(context) {
    const currContext = document.querySelector("[data-context]");

    return currContext.dataset.context === context;
  },

  getData(target, data) {
    return target.getAttribute(`data-${data}`) !== null;
  },
};
