import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedUsedBiekComponent } from './featured-used-biek.component';

describe('FeaturedUsedBiekComponent', () => {
  let component: FeaturedUsedBiekComponent;
  let fixture: ComponentFixture<FeaturedUsedBiekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedUsedBiekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedUsedBiekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
