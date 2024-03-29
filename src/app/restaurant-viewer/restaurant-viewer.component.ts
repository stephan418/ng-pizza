import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Restaurant, RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-viewer',
  templateUrl: './restaurant-viewer.component.html',
  styleUrls: ['./restaurant-viewer.component.scss'],
})
export class RestaurantViewerComponent implements OnInit {
  private restaurantId: number;
  restaurant: Restaurant | undefined;

  constructor(
    private restaurantService: RestaurantService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.restaurantId = Number(
      this.route.snapshot.paramMap.get('restaurantId')
    );

    this.restaurantService.restaurants
      .pipe(map((value) => value.find((r) => r.id === this.restaurantId)))
      .subscribe((value) => (this.restaurant = value));
  }

  onProductClick(id: number) {
    this.cartService.addProduct(id);
  }

  ngOnInit(): void {
    this.cartService.selectRestaurant(this.restaurantId);
  }
}
