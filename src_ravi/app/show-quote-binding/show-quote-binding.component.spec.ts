import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuoteBindingComponent } from './show-quote-binding.component';

describe('ShowQuoteBindingComponent', () => {
  let component: ShowQuoteBindingComponent;
  let fixture: ComponentFixture<ShowQuoteBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowQuoteBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowQuoteBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
