import { Price, Quantity } from "domain/types";
import { addToItems } from "./shopping-cart-item";
import { CartId, CartItem, EmptyShoppingCart, LoadedShoppingCart, ShoppingCart } from "./types";

export const createEmptyCart = (): EmptyShoppingCart => ({  __brand: "EmptyShoppingCart", id: "123" as CartId, total: 0.0, itemCount: 0 });

export const isEmptyShoppingCart = (cart: ShoppingCart): cart is EmptyShoppingCart => cart.__brand === "EmptyShoppingCart";
export const isLoadedShoppingCart = (cart: ShoppingCart): cart is LoadedShoppingCart => cart.__brand === "LoadedShoppingCart";

const addItem = (cart: ShoppingCart, cartItem: CartItem): LoadedShoppingCart => {
  const addItem = isEmptyShoppingCart(cart) ? addToItems([], cartItem) : addToItems(cart.items, cartItem);
  return ({
    __brand: "LoadedShoppingCart" as const,
    id: cart.id,
    items: addItem,
    itemCount: cart.itemCount + cartItem.quantity as Quantity,
    total: cart.total + cartItem.price * cartItem.quantity as Price,
  })
}


export const addItemToCart = (cart: ShoppingCart) => (newCartItem: CartItem): ShoppingCart => 
addItem(cart, newCartItem);

