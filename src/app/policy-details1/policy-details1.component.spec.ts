import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDetails1Component } from './policy-details1.component';

describe('PolicyDetails1Component', () => {
  let component: PolicyDetails1Component;
  let fixture: ComponentFixture<PolicyDetails1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyDetails1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
