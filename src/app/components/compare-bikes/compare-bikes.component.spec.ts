import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBikesComponent } from './compare-bikes.component';

describe('CompareBikesComponent', () => {
  let component: CompareBikesComponent;
  let fixture: ComponentFixture<CompareBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
