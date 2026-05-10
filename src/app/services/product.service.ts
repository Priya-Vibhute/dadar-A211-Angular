import { Injectable } from '@angular/core';

export interface Product 
{
    id:number,
    name:string,
    price:number
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[]=[
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
  ]
  constructor() { }

  getProducts()
  {
    return this.products;
  }

  getProductsGreaterThanPrice(price:number)
  {
     return this.products.filter(p=>p.price>price)
  }
  //Product 1
  getByName(name:string)
  {
     return this.products.filter(p=>p.name==name)
  }
}
