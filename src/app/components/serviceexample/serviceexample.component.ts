import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-serviceexample',
  imports: [CommonModule],
  templateUrl: './serviceexample.component.html',
  styleUrl: './serviceexample.component.css',
  providers: [UserService]
})
export class ServiceexampleComponent {

  products: Product[] = []
  user  !: { id: number, name: string, age: number };
  
  constructor(private productService: ProductService,
    private userService: UserService) {
    this.user = this.userService.user;
  }

  getProducts() {
    this.products = this.productService.getProducts()
  }

  getProductsGreaterThan(price: number) {
    this.products = this.productService.getProductsGreaterThanPrice(price)
  }

  getProductByName(name: string) {
    this.products = this.productService.getByName(name)
  }
}
