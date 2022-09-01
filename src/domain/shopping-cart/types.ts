import { WholeNumber } from "utils";
import { NonEmptyArray } from "fp-ts/lib/NonEmptyArray";
import { Price, Quantity } from "domain/types";

export type CartId = string & { __brand: "CartId" };
export type CartItemId = string & { __brand: "CartItem" };
export type CartItemName = string & { __brand: "CartItemName" }

export interface NewCartItem {
  name: CartItemName;
  price: Price;
  quantity: Quantity;
}

export interface ExistingCartItem {
  id: CartItemId;
  name: CartItemName;
  price: Price;
  quantity: Quantity;
}

export type CartItem = ExistingCartItem | NewCartItem

export interface LoadedShoppingCart {
  __brand: "LoadedShoppingCart",
  id: CartId;
  items: NonEmptyArray<CartItem>;
  total: Price;
  itemCount: WholeNumber;
}

export interface EmptyShoppingCart {
  __brand: "EmptyShoppingCart"
  id: CartId;
  total: 0.0;
  itemCount: 0;
}



export type ShoppingCart = LoadedShoppingCart | EmptyShoppingCart;