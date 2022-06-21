import { Transformation } from "@utils";
import {  flow, identity, pipe } from "fp-ts/lib/function";
import { evolve } from "fp-ts/lib/struct";
import { addToItems } from "./shopping-cart-item";
import { CartItem, ShoppingCart } from "./types";

const evolveShoppingCart = evolve<ShoppingCart, Transformation<ShoppingCart>>;


export const addToCartTransform = (newCartItem: CartItem): Transformation<ShoppingCart> => ({
  id: identity,
  items: addToItems(newCartItem),
  itemCount: (currCount) => currCount + newCartItem.quantity,
  total: (total) => total + newCartItem.price * newCartItem.quantity,
});


export const addItemToCart = (cart: ShoppingCart) => (newCartItem: CartItem): ShoppingCart => 
pipe(cart, evolveShoppingCart(addToCartTransform(newCartItem)));

export const createEmptyCart = (): ShoppingCart => ({ id: "123", items: [], total: 0.0, itemCount: 0 });
