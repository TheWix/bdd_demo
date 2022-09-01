import { createEmptyCart, Product, ShoppingCart } from "@domain";

export class CustomWorld {
  shoppingCart: ShoppingCart;
  products: Product[];

  constructor(options) {
    // super(options);
    this.products = [];
    this.shoppingCart = createEmptyCart();
  }

  public addProduct(p: Product) {
    this.products = [...this.products, p];
  }
}
