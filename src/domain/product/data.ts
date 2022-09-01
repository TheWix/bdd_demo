import { Product, ProductId } from "./types";

export type GetProductByProductId = (id: ProductId) => Promise<Product | null>;