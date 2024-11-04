import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPqrsComponent } from './estado-pqrs.component';

describe('EstadoPqrsComponent', () => {
  let component: EstadoPqrsComponent;
  let fixture: ComponentFixture<EstadoPqrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoPqrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
