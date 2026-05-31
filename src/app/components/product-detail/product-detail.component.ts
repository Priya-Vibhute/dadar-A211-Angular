import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {


  productId:any;
  product!:Product;

  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductApiService)
  {

  }

  ngOnInit()
  {
     this.activatedRoute.params
     .subscribe({
      next:(param)=>{
        this.productId=param['id'];
        this.productService.getProductById(this.productId)
        .subscribe({
          next:(data)=>{this.product=data}
        })
      }
     })
  }

}
