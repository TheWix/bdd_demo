import { Given, setWorldConstructor, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../world";
import { expect } from "chai";
import { type ProductName, createEmptyCart, createProduct, productName, price as productPrice, ProductId, addProductToCart, quantity as productQuantity } from "@domain";
import { unsafeCoerce } from "fp-ts/lib/function";
import { isEmptyShoppingCart } from "domain/shopping-cart/shopping-cart";
import { fail } from "assert";

setWorldConstructor(CustomWorld);

Given("a shopping cart", function (this: CustomWorld) {
  this.shoppingCart = createEmptyCart();
});

Given("a product called {string} that costs {float}", function (this: CustomWorld, name: string, price: number) {
  const pName: ProductName = productName(name)
  const pPrice = productPrice(price)
  const id: ProductId = unsafeCoerce("1")
  const newProduct = createProduct({ id, name: pName, price: pPrice });
  
  this.addProduct(newProduct);
});

Given("the cart already contains {int} {string}", function (this: CustomWorld, quantity: number, productName: string) {
  const product = this.products.filter((p) => p.name === productName)[0];
  const pQuantity = productQuantity(quantity);

  this.shoppingCart = addProductToCart({
    cart: this.shoppingCart,
    product,
    quantity: pQuantity,
  });
});

When("I add {int} {string} to the shopping cart", function (this: CustomWorld, quantity: number, productName: string) {
  const product = this.products.filter((p) => p.name === productName)[0];

  const pQuantity = productQuantity(quantity);

  this.shoppingCart = addProductToCart({
    cart: this.shoppingCart,
    product,
    quantity: pQuantity,
  });
});

Then("the cart should have a total item count of {int}", function (this: CustomWorld, count: number) {
  expect(this.shoppingCart.itemCount).to.equal(count);
});

Then("the total should be {float}", function (this: CustomWorld, total: number) {
  expect(this.shoppingCart.total).to.equal(total);
});

Then("there should be {int} cart item in the cart", function (this: CustomWorld, total: number) {
  if(isEmptyShoppingCart(this.shoppingCart)) fail("Expected a LoadedShoppingCart but got an EmptyShoppingCart")
  
  expect(this.shoppingCart.items).to.have.lengthOf(total);
});
