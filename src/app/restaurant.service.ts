import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Restaurant {
  id: number;
  name: string;
  rating: number;
  products: { id: number; name: string; price: number }[];
}

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private _restaurants: Observable<Restaurant[]> | undefined;

  constructor(private http: HttpClient) {}

  getRestaurants() {
    return (this._restaurants = this.http.get<any>('/assets/restaurants.json', {
      responseType: 'json',
    }));
  }

  get restaurants() {
    return this._restaurants;
  }
}
