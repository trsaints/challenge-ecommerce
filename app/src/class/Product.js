export class Product {
  #name;
  #price;
  #image;
  #description;
  #id;

  constructor(product) {
    this.#name = product.name;
    this.#price = product.price;
    this.#image = product.image;
    this.#description = product.description;
    this.#id = product.id;
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  get image() {
    return this.#image;
  }

  get description() {
    return this.#description;
  }

  get id() {
    return this.#id;
  }
}