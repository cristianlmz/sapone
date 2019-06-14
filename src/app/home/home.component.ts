import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsArray: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() { 
    this.productsArray = this.productService.getProducts();
  }

}
