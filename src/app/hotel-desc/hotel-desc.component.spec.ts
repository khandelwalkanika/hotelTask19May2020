import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDescComponent } from './hotel-desc.component';

describe('HotelDescComponent', () => {
  let component: HotelDescComponent;
  let fixture: ComponentFixture<HotelDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
