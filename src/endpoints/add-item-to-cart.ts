import { ProductNotFoundException } from "domain/product/types";
import { AddToCartWorkflow, CommandProps  } from "domain/workflows/add-to-cart";
import { Request, Response } from "express";

type AddToCartDeps = {
  workflow: AddToCartWorkflow;
};


declare const validateParams: (values: unknown) => CommandProps

export const addToCartEndpoint = ({ workflow }: AddToCartDeps) => (req: Request, res: Response) => {
  const command = validateParams(req.body);
  
  try {
    workflow(command);
  } catch(exception) {
    if(exception instanceof ProductNotFoundException){
      res.status(400).send(exception.message);
    }else{
      res.status(500).send("An unknown error has occurred.");
    }
  }
}