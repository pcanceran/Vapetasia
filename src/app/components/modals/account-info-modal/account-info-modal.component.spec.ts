import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfoModalComponent } from './account-info-modal.component';

describe('AccountInfoModalComponent', () => {
  let component: AccountInfoModalComponent;
  let fixture: ComponentFixture<AccountInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountInfoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
