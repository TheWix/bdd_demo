import { addToCartFlow, Dependencies } from 'domain/index';
import { addToCartEndpoint } from 'endpoints';
import express from 'express';

const app = express()
const port = 3000

declare const addToCartDeps: Dependencies;

const addToCartEndpointDeps = {
  workflow: addToCartFlow(addToCartDeps)
}

app.get('/add-to-cart', addToCartEndpoint(addToCartEndpointDeps))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})