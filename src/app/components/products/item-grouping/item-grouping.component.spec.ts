import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroupingComponent } from './item-grouping.component';

describe('ItemGroupingComponent', () => {
  let component: ItemGroupingComponent;
  let fixture: ComponentFixture<ItemGroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGroupingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
