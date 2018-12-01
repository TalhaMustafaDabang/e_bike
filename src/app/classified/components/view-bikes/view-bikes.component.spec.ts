import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBikesComponent } from './view-bikes.component';

describe('ViewBikesComponent', () => {
  let component: ViewBikesComponent;
  let fixture: ComponentFixture<ViewBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
