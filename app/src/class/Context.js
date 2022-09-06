export class Context {
  #index;
  #products;

  constructor(index, products) {
    this.#index = index;
    this.#products = products;
  }

  get index() {
    return this.#index;
  }

  get products() {
    return this.#products;
  }
}