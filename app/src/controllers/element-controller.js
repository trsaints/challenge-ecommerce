export const elementController = {
  load(target) {
    if (target.classList.contains("loading")) {
      target.classList.remove("loading");
      return;
    }

    throw new Error("Não foi possível carregar elemento: inexistente ou já está carregado")
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
    const currContext = document.querySelector("[data-catalog]");

    return currContext.dataset.catalog === context;
  },
};
