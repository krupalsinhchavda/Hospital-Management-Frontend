import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPaymentDialogComponent } from './add-edit-payment-dialog.component';

describe('AddEditPaymentDialogComponent', () => {
  let component: AddEditPaymentDialogComponent;
  let fixture: ComponentFixture<AddEditPaymentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditPaymentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
