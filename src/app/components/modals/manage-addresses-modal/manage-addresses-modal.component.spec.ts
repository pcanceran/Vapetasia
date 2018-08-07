import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAddressesModalComponent } from './manage-addresses-modal.component';

describe('ManageAddressesModalComponent', () => {
  let component: ManageAddressesModalComponent;
  let fixture: ComponentFixture<ManageAddressesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAddressesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAddressesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
