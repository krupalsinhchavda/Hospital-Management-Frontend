import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPatientComponent } from './add-edit-patient.component';

describe('AddEditPatientComponent', () => {
  let component: AddEditPatientComponent;
  let fixture: ComponentFixture<AddEditPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditPatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
