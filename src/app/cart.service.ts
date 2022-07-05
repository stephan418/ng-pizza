import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private restaurantId: number | undefined;
  private productIds: number[] = [];

  constructor() { }
  
  selectRestaurant(id: number) {
    if (this.restaurantId === id) {
      return;
    }

    if (this.productIds.length > 0) {
      this.productIds = [];
    }

    this.restaurantId = id;
  }

  addProduct(id: number) {
    if (this.restaurantId) {
      this.productIds.push(id);
    }
  }
}
