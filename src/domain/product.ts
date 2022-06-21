import { identity } from "fp-ts/lib/function";
import { Product } from "./types";

export const createProduct = identity<Product>;