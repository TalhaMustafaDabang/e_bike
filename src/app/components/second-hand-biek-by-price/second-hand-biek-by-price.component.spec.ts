import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondHandBiekByPriceComponent } from './second-hand-biek-by-price.component';

describe('SecondHandBiekByPriceComponent', () => {
  let component: SecondHandBiekByPriceComponent;
  let fixture: ComponentFixture<SecondHandBiekByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondHandBiekByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondHandBiekByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
