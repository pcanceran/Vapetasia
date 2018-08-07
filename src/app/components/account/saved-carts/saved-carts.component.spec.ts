import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCartsComponent } from './saved-carts.component';

describe('SavedCartsComponent', () => {
  let component: SavedCartsComponent;
  let fixture: ComponentFixture<SavedCartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedCartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
