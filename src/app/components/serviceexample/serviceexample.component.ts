import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serviceexample',
  imports: [CommonModule],
  templateUrl: './serviceexample.component.html',
  styleUrl: './serviceexample.component.css'
})
export class ServiceexampleComponent {

  products:Product[]=[]
  constructor(private productService:ProductService) {
     
  }

  getProducts(){
    this.products=this.productService.getProducts()
  }

  getProductsGreaterThan(price:number)
  {
    this.products=this.productService.getProductsGreaterThanPrice(price)
  }
}
