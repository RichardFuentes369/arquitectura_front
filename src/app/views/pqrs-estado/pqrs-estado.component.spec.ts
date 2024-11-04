import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsEstadoComponent } from './pqrs-estado.component';

describe('PqrsEstadoComponent', () => {
  let component: PqrsEstadoComponent;
  let fixture: ComponentFixture<PqrsEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PqrsEstadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PqrsEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
