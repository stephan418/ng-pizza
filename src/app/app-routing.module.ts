import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantViewerComponent } from './restaurant-viewer/restaurant-viewer.component';
import { ResturantPickerComponent } from './resturant-picker/resturant-picker.component';

const routes: Routes = [
  { path: 'restaurants', component: ResturantPickerComponent },
  { path: 'restaurants/:restaurantId', component: RestaurantViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
