import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product 
{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{
    rate:number,
    count:number
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private httpClient:HttpClient) { 

  }
}
