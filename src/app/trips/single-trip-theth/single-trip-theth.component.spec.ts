import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTripThethComponent } from './single-trip-theth.component';

describe('SingleTripThethComponent', () => {
  let component: SingleTripThethComponent;
  let fixture: ComponentFixture<SingleTripThethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTripThethComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTripThethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
