import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCompanyAllBikesComponent } from './one-company-all-bikes.component';

describe('OneCompanyAllBikesComponent', () => {
  let component: OneCompanyAllBikesComponent;
  let fixture: ComponentFixture<OneCompanyAllBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneCompanyAllBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCompanyAllBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
