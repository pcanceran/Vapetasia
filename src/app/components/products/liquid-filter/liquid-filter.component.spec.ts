import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidFilterComponent } from './liquid-filter.component';

describe('LiquidFilterComponent', () => {
  let component: LiquidFilterComponent;
  let fixture: ComponentFixture<LiquidFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
