import { unsafeCoerce } from "fp-ts/lib/function";
import { ValidationError } from "utils";
import { PackagedProduct, Product, ProductId, ProductName, WeightedProduct } from "./types";

export const createPackagedProduct = (p: Omit<PackagedProduct, "__brand">): PackagedProduct => ({
  __brand: "PackageProduct",
  ...p
});

export const isPackageProduct = (product: Product): product is PackagedProduct => product.__brand === "PackageProduct";
export const isWeightedProduct = (product: Product): product is WeightedProduct => product.__brand === "WeightedProduct";

export const productName = (s: string): ProductName =>{ 
  if(s.length === 0 || s.trim() === "") throw new ValidationError("productName", s, "productName cannot be an empty string");
  return unsafeCoerce(s);
}

export const productId = (id: number): ProductId => unsafeCoerce(id); 