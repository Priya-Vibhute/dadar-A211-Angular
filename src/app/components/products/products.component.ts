import { Component } from '@angular/core';
import { Product, ProductApiService } from '../../services/product-api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = [];

  constructor(private productService: ProductApiService) {

  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe({
        next: (data) => { this.products = data },
        error: (error) => console.log("something went wrong")
      })

  }

  // getByCategory('electronics')
  getByCategory(categoryName: string) {
    this.productService.getProducts()
      .subscribe({
        next: (data) => {
          this.products = data;
          this.products = this.products
            .filter(p => p.category == categoryName)
        },
        error: (error) => console.log("something went wrong")
      })


  }

}
