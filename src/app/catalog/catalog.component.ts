import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
 
  productsArray: Product[];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productsArray = this.productService.getProducts();
   }

  productDetail(id: number) {
    this.router.navigate(['/product'], { queryParams: { productId: id } });
  }

}
