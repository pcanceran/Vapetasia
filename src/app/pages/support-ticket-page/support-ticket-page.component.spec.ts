import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTicketPageComponent } from './support-ticket-page.component';

describe('SupportTicketPageComponent', () => {
  let component: SupportTicketPageComponent;
  let fixture: ComponentFixture<SupportTicketPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportTicketPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportTicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
