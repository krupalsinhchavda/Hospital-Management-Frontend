import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffHolidaysComponent } from './staff-holidays.component';

describe('StaffHolidaysComponent', () => {
  let component: StaffHolidaysComponent;
  let fixture: ComponentFixture<StaffHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffHolidaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
