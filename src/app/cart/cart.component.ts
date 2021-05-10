import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    this.cartService.clearCart();
    console.warn('You order has been received', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  checkoutForm = this.formBuilder.group({ name: '', address: '' });
  products = this.cartService.getItems();

  ngOnInit() {}
}
