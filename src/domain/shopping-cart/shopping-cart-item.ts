import { constant, pipe } from "fp-ts/lib/function";
import { CartItem } from "./types";
import * as A from "fp-ts/Array";
import * as O from "fp-ts/Option";

const getExistingCartItemIndex = (name: string) =>
  A.findIndex((p: CartItem) => p.name.toLocaleLowerCase() === name.toLocaleLowerCase());

const updateItemQuantity =
  (quantity: number) =>
  (item: CartItem): CartItem => ({ ...item, quantity: item.quantity + quantity });

// export const addToItems = (newCartItem: CartItem) => (items: CartItem[]) =>
//   pipe(
//     items,
//     getExistingCartItemIndex(newCartItem.name),
//     O.chain((i) => A.modifyAt(i, updateItemQuantity(newCartItem.quantity))(items)),
//     O.getOrElse(constant([...items, newCartItem]))
//   );

export const addToItems = (newCartItem: CartItem) => (items: CartItem[]) => [...items, newCartItem];
