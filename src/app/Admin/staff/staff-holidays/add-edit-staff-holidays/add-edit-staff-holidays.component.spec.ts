import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStaffHolidaysComponent } from './add-edit-staff-holidays.component';

describe('AddEditStaffHolidaysComponent', () => {
  let component: AddEditStaffHolidaysComponent;
  let fixture: ComponentFixture<AddEditStaffHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditStaffHolidaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditStaffHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
