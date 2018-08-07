import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleInquiryComponent } from './wholesale-inquiry.component';

describe('WholesaleInquiryComponent', () => {
  let component: WholesaleInquiryComponent;
  let fixture: ComponentFixture<WholesaleInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesaleInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesaleInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
