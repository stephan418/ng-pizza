import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantPickerComponent } from './resturant-picker.component';

describe('ResturantPickerComponent', () => {
  let component: ResturantPickerComponent;
  let fixture: ComponentFixture<ResturantPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResturantPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
