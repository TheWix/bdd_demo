import { constant, pipe } from "fp-ts/lib/function";
import { CartItem } from "./types";
import * as A from "fp-ts/Array";
import * as O from "fp-ts/Option";
import * as NEA from "fp-ts/lib/NonEmptyArray";
import { Quantity } from "domain/types";

// const getExistingCartItemIndex = (name: string) =>
//   A.findIndex((p: CartItem) => p.name.toLocaleLowerCase() === name.toLocaleLowerCase());

// const updateItemQuantity =
//   (quantity: Quantity) =>
//   (item: CartItem): CartItem => ({ ...item, quantity: (item.quantity + quantity) as Quantity });

// export const addToItems = (items: CartItem[], newCartItem: CartItem): NEA.NonEmptyArray<CartItem> =>
//   pipe(
//     items,
//     getExistingCartItemIndex(newCartItem.name),
//     O.chain((i) => NEA.modifyAt(i, updateItemQuantity(newCartItem.quantity))(items as NEA.NonEmptyArray<CartItem>)),
//     O.getOrElse(constant(A.append(newCartItem)(items)))
//   );

export const addToItems = (items: Array<CartItem>, newCartItem: CartItem) => 
A.append(newCartItem)(items)
