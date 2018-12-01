import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsAreaComponent } from './adds-area.component';

describe('AddsAreaComponent', () => {
  let component: AddsAreaComponent;
  let fixture: ComponentFixture<AddsAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
