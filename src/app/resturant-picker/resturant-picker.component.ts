import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-resturant-picker',
  templateUrl: './resturant-picker.component.html',
  styleUrls: ['./resturant-picker.component.scss'],
})
export class ResturantPickerComponent implements OnInit {
  restaurants;

  constructor(private restaurantService: RestaurantService) {
    this.restaurants = this.restaurantService.getRestaurants();
  }

  ngOnInit(): void {}
}
