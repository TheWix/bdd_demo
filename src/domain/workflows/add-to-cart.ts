import { addProductToCart } from "domain/mappers";
import { GetProductByProductId } from "domain/product/data";
import { ProductId, ProductNotFoundException } from "domain/product/types";
import { createEmptyCart } from "domain/shopping-cart";
import { GetCartByCartId, SaveShoppingCart } from "domain/shopping-cart/data"
import { CartId, ShoppingCart } from "domain/shopping-cart/types";
import { Quantity } from "domain/types";

export type Dependencies = {
  getCartByCartId: GetCartByCartId,
  getProductById: GetProductByProductId,
  saveCart: SaveShoppingCart
};

export type CommandProps = {
  cartId: CartId,
  productId: ProductId,
  quantity: Quantity,
};

export type AddToCartWorkflow = ({cartId, productId, quantity}: CommandProps) => Promise<ShoppingCart>;

export const addToCartFlow = ({ getCartByCartId, getProductById, saveCart }: Dependencies) => async ({cartId, productId, quantity}: CommandProps) => {
  
  const cart = await getCartByCartId(cartId) ?? createEmptyCart();

  const product = await getProductById(productId);

  if(product === null) throw new ProductNotFoundException(productId);

  const updatedCart = addProductToCart({ cart, product, quantity });

  return saveCart(updatedCart);
}