import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiekByBrandComponent } from './biek-by-brand.component';

describe('BiekByBrandComponent', () => {
  let component: BiekByBrandComponent;
  let fixture: ComponentFixture<BiekByBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiekByBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiekByBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
