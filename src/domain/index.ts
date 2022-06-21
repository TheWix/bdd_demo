import { Product } from "./types";
import { addItemToCart, type CartItem, type ShoppingCart, createEmptyCart } from "./shopping-cart";
import { pipe } from "fp-ts/lib/function";

export * from "./product";

export { createEmptyCart, type CartItem, type ShoppingCart, type Product };

export type AddProductToCartProps = { product: Product; quantity: number; cart: ShoppingCart };

const productToCartItem = ({ product, quantity }: Omit<AddProductToCartProps, "cart">): CartItem => ({
  name: product.name,
  price: product.price,
  quantity,
});

export const addProductToCart = (input: AddProductToCartProps) =>
  pipe(input, productToCartItem, addItemToCart(input.cart));
