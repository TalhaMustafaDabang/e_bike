import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailViewComponent } from './add-detail-view.component';

describe('AddDetailViewComponent', () => {
  let component: AddDetailViewComponent;
  let fixture: ComponentFixture<AddDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
