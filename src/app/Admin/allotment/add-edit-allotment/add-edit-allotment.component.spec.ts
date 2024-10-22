import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAllotmentComponent } from './add-edit-allotment.component';

describe('AddEditAllotmentComponent', () => {
  let component: AddEditAllotmentComponent;
  let fixture: ComponentFixture<AddEditAllotmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditAllotmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
