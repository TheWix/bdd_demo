import { CartId, ShoppingCart } from "./types";

export type GetCartByCartId = (id: CartId) => Promise<ShoppingCart | null>;
export type SaveShoppingCart = (cart: ShoppingCart) => Promise<ShoppingCart>;