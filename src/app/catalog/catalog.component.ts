import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  productsArray: Product[] = [{
    Id: 1,
    Name: "Jabón azul",
    Description: "Este es un jabón azul degradado con otro color cafe más claro",
    ImgUrl: "assets/img_products/IMG_6823.JPG",
    Price: 50.00
  }, {
    Id: 2,
    Name: "Jabón estrella",
    Description: "Estos son unos divertidos jabones con forma de estrellita para toda la familia",
    ImgUrl: "assets/img_products/IMG_6829.JPG",
    Price: 45.00
  }, {
    Id: 3,
    Name: "Jabón con jabón",
    Description: "Este es un jabón con otro jabón más chiquito incrustado en su parte interna.",
    ImgUrl: "assets/img_products/IMG_6852.JPG",
    Price: 50.00
  }, {
    Id: 4,
    Name: "Cepillo bambú",
    Description: "Este es un cepillo de dientes de bambu duradero muy bonito",
    ImgUrl: "assets/img_products/IMG_7304.JPG",
    Price: 60.00
  }, {
    Id: 5,
    Name: "Shampooy acondicionador",
    Description: "Este es un shampoo y un acondicionador de barra. Adiós a las botellas.",
    ImgUrl: "assets/img_products/IMG_7330.JPG",
    Price: 50.00
  }, {
    Id: 6,
    Name: "Océano rosa",
    Description: "Este es un jabón de gran dimensión color rosa degradado.",
    ImgUrl: "assets/img_products/oceano_rosa.png",
    Price: 50.00
  }, {
    Id: 7,
    Name: "Jabón verde",
    Description: "Este es un jabón verde con un jabón más pequeño incrustado.",
    ImgUrl: "assets/img_products/jabon_verde.jpeg",
    Price: 35.00
  }];

  constructor(private router: Router) { }

  ngOnInit() { }

  productDetail(id: number) {
    // this.router.navigate(['/product'], { queryParams: { productId: id } });
  }

}
