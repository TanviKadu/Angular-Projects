import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  product: any;
  quantity: number = 1;
  totalPrice: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.product = params;
      this.calculateTotalPrice();
    });
  }

  increaseQuantity() {
    this.quantity++;
    this.calculateTotalPrice();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.calculateTotalPrice();
    }
  }

  calculateTotalPrice() {
    this.totalPrice = this.quantity * parseFloat(this.product.price);
  }
}
