import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


     products:Product[]=[]
     productService:ProductService=inject(ProductService)

     getProducts()
     {
       this.products=this.productService.getProducts()
     }

}
