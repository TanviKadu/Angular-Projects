import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private router: Router) {}

  products = [
    { id: 1, name: 'Smartphone', price: 49999, image: 'assets/products/phone.jpg' },
    { id: 2, name: 'Laptop', price: 89999, image: 'assets/products/laptop.jpg' },
    { id: 3, name: 'Headphones', price: 3999, image: 'assets/products/headphones.jpg' },
    { id: 4, name: 'Smartwatch', price: 9999, image: 'assets/products/watch.jpg' },
    { id: 5, name: 'Camera', price: 55999, image: 'assets/products/camera.jpg' },
    { id: 6, name: 'Shoes', price: 2999, image: 'assets/products/shoes.jpg' }
  ];

  goToBilling(product: any) {
    this.router.navigate(['/billing'], { queryParams: product });
  }
}
