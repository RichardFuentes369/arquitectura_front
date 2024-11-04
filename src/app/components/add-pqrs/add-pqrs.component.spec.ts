import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPqrsComponent } from './add-pqrs.component';

describe('AddPqrsComponent', () => {
  let component: AddPqrsComponent;
  let fixture: ComponentFixture<AddPqrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPqrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
