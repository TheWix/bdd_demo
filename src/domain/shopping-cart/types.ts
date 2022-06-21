import * as Eq from "fp-ts/Eq";
import * as Ord from "fp-ts/Ord";
import * as S from "fp-ts/string";
import * as N from "fp-ts/number";

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export const cartItemEq = Eq.struct<Omit<CartItem, "quantity">>({
  name: S.Eq,
  price: N.Eq,
});

export interface ShoppingCart {
  id: string;
  items: Array<CartItem>;
  total: number;
  itemCount: number;
}
