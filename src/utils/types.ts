import { unsafeCoerce } from "fp-ts/lib/function";

export type Transformation<T> = { [K in keyof T]: (a: T[K]) => T[K] };

export type WholeNumber = number & { __brand: "WholeNumber" };
export type UnsignedDecimal = number & { __brand: "UnsignedDecimal" };

export const isUnsignedDecimal  = (n: number): n is UnsignedDecimal => n >= 0 
export const isWholeNumber  = (n: number): n is WholeNumber => isUnsignedDecimal(n) && Number.isInteger(n)

export const unsignedDecimal = (n: number): UnsignedDecimal => {
  if(!isUnsignedDecimal(n)) throw new Error("UnsignedDecimal must be greater or equal to than 0")
  return n;
}

export const wholeNumber = (n: number): WholeNumber => {
  if(!isWholeNumber(n)) throw new Error("WholeNumber must be greater or equal to 0 and not be a fraction.")
  return n;
}




export class ValidationError<PN, PT> extends Error {
  public propertyName: PN;
  public propertyValue: PT;
  constructor(propertyName: PN, propertyValue: PT, message: string){
    super(message);
    this.propertyName = propertyName;
    this.propertyValue = propertyValue;
  }
} 
