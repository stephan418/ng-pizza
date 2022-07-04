import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResturantPickerComponent } from './resturant-picker/resturant-picker.component';
import { RestaurantViewerComponent } from './restaurant-viewer/restaurant-viewer.component';

@NgModule({
  declarations: [AppComponent, ResturantPickerComponent, RestaurantViewerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
