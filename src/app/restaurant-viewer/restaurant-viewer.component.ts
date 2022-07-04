import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-viewer',
  templateUrl: './restaurant-viewer.component.html',
  styleUrls: ['./restaurant-viewer.component.scss'],
})
export class RestaurantViewerComponent implements OnInit {
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    console.log(this.restaurantService.restaurants);
  }
}
