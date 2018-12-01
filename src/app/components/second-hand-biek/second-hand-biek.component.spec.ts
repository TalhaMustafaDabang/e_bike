import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondHandBiekComponent } from './second-hand-biek.component';

describe('SecondHandBiekComponent', () => {
  let component: SecondHandBiekComponent;
  let fixture: ComponentFixture<SecondHandBiekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondHandBiekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondHandBiekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
