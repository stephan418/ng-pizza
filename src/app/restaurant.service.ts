import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Restaurant {
  id: number;
  name: string;
  rating: number;
  products: { id: number; name: string; price: number }[];
}

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private _restaurants: Subject<Restaurant[]> = new Subject();
  private currentValue: Restaurant[] | undefined;

  constructor(private http: HttpClient) {
    this.getRestaurants();
  }

  getRestaurants(): Observable<Restaurant[]> {
    this.http
      .get<any>('/assets/restaurants.json', {
        responseType: 'json',
      })
      .subscribe((value) => {
        this._restaurants.next(value);
        this.currentValue = value;
      });

    return this._restaurants;
  }

  get restaurants(): Observable<Restaurant[]> {
    return new Observable((subscriber) => {
      if (this.currentValue) {
        subscriber.next(this.currentValue);
      }

      this._restaurants.subscribe((value) => subscriber.next(value));
    });
  }
}
