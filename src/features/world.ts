import { Product, ShoppingCart } from "@domain";

export class CustomWorld {
  shoppingCart: ShoppingCart;
  products: Product[];

  constructor(options) {
    // super(options);
    this.products = [];
  }

  public addProduct(p: Product) {
    this.products = [...this.products, p];
  }
}
