import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedDealerComponent } from './featured-dealer.component';

describe('FeaturedDealerComponent', () => {
  let component: FeaturedDealerComponent;
  let fixture: ComponentFixture<FeaturedDealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedDealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
