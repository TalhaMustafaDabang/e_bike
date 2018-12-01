import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeOfBrandComponent } from './bike-of-brand.component';

describe('BikeOfBrandComponent', () => {
  let component: BikeOfBrandComponent;
  let fixture: ComponentFixture<BikeOfBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeOfBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeOfBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
