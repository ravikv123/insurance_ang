import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPolicyDetails1Component } from './show-policy-details1.component';

describe('ShowPolicyDetails1Component', () => {
  let component: ShowPolicyDetails1Component;
  let fixture: ComponentFixture<ShowPolicyDetails1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPolicyDetails1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPolicyDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
