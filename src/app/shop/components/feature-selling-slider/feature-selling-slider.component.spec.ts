import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSellingSliderComponent } from './feature-selling-slider.component';

describe('FeatureSellingSliderComponent', () => {
  let component: FeatureSellingSliderComponent;
  let fixture: ComponentFixture<FeatureSellingSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureSellingSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSellingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
