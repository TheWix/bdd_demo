import { addItemToCart, type CartItem } from "./shopping-cart";
import { pipe } from "fp-ts/lib/function";
import { isPackageProduct, Product } from "./product";
import { CartItemName, ShoppingCart } from "./shopping-cart/types";
import { Price, Quantity } from "./types";

type AddProductToCartProps = { product: Product; quantity: Quantity; cart: ShoppingCart };

const productToCartItem = ({ product, quantity }: Omit<AddProductToCartProps, "cart">): CartItem =>{
  const price = isPackageProduct(product) ? product.price * quantity : product.pricePerUnit * quantity;

  return ({
    name: product.name as string as CartItemName,
    price: price as Price,
    quantity,
  });
}
export const addProductToCart = (input: AddProductToCartProps) =>
  pipe(input, productToCartItem, addItemToCart(input.cart));