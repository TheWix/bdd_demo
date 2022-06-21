import { Given, setWorldConstructor, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../world";
import { expect } from "chai";
import { createEmptyCart, createProduct, addProductToCart } from "@domain";

setWorldConstructor(CustomWorld);

Given("a shopping cart", function (this: CustomWorld) {
  this.shoppingCart = createEmptyCart();
});

Given("a product called {string} that costs {float}", function (this: CustomWorld, name: string, price: number) {
  const newProduct = createProduct({ name, price });
  this.addProduct(newProduct);
});

Given("the cart already contains {int} {string}", function (this: CustomWorld, quantity: number, productName: string) {
  const product = this.products.filter((p) => p.name === productName)[0];

  this.shoppingCart = addProductToCart({
    cart: this.shoppingCart,
    product,
    quantity,
  });
});

When("I add {int} {string} to the shopping cart", function (this: CustomWorld, quantity: number, productName: string) {
  const product = this.products.filter((p) => p.name === productName)[0];

  this.shoppingCart = addProductToCart({
    cart: this.shoppingCart,
    product,
    quantity,
  });
});

Then("the cart should have a total item count of {int}", function (this: CustomWorld, count: number) {
  expect(this.shoppingCart.itemCount).to.equal(count);
});

Then("the total should be {float}", function (this: CustomWorld, total: number) {
  expect(this.shoppingCart.total).to.equal(total);
});

Then("there should be {int} cart item in the cart", function (this: CustomWorld, total: number) {
  expect(this.shoppingCart.items).to.have.lengthOf(total);
});
