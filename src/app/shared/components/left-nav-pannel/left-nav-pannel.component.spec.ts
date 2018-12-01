import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavPannelComponent } from './left-nav-pannel.component';

describe('LeftNavPannelComponent', () => {
  let component: LeftNavPannelComponent;
  let fixture: ComponentFixture<LeftNavPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftNavPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
