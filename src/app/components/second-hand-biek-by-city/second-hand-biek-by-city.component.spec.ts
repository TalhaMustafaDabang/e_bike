import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondHandBiekByCityComponent } from './second-hand-biek-by-city.component';

describe('SecondHandBiekByCityComponent', () => {
  let component: SecondHandBiekByCityComponent;
  let fixture: ComponentFixture<SecondHandBiekByCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondHandBiekByCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondHandBiekByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
