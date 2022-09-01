import { Price } from "domain/types";

export type ProductId = string & { __brand: "Product" }
export type ProductName = string & { __brand: "ProductName" };
export type Measurement = string & { __brand: "Measurement"}

export interface PackagedProduct {
  __brand: "PackageProduct";
  id: ProductId;
  name: ProductName;
  price: Price;
}

export interface WeightedProduct {
  __brand: "WeightedProduct";
  id: ProductId,
  name: ProductName,
  measurement: Measurement;
  pricePerUnit: Price;
}

export type Product = PackagedProduct | WeightedProduct;


export class ProductNotFoundException extends Error {
  public productId;
  constructor(productId: ProductId, message?: string){
    super(message ?? `No product found for id ${ productId }`);
    this.productId = productId
  }
} 

