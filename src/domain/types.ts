import { unsignedDecimal, UnsignedDecimal, ValidationError, wholeNumber, WholeNumber } from "utils";

export type Price = UnsignedDecimal;
export type Quantity = WholeNumber;

export const price = (p: number): Price => {
  try{
    return unsignedDecimal(p) 
  }catch(e){
    throw new ValidationError("price", p, `Price is invalid: ${(e as Error).message}` )
  }
}

export const quantity = (q: number): Quantity => {
  try{
    return wholeNumber(q) 
  }catch(e){
    throw new ValidationError("quantity", q, `Quantity is invalid: ${(e as Error).message}` )
  }
}
