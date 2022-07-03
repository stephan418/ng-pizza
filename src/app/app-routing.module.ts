import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResturantPickerComponent } from './resturant-picker/resturant-picker.component';

const routes: Routes = [
  { path: 'restaurants', component: ResturantPickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
