import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Quote
{
    id:number,
    quote:string,
    author:string
}

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private httpClient:HttpClient) { }
  getQuotes()
  {
    return this.httpClient.get<{quotes:Quote[]}>("https://dummyjson.com/quotes")
  }
}
