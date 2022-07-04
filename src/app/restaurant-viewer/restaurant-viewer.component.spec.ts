import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantViewerComponent } from './restaurant-viewer.component';

describe('RestaurantViewerComponent', () => {
  let component: RestaurantViewerComponent;
  let fixture: ComponentFixture<RestaurantViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
