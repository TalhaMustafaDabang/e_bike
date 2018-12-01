import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewBikeComponent } from './single-new-bike.component';

describe('SingleNewBikeComponent', () => {
  let component: SingleNewBikeComponent;
  let fixture: ComponentFixture<SingleNewBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNewBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNewBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
