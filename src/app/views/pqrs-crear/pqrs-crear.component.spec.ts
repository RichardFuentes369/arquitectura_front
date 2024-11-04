import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsCrearComponent } from './pqrs-crear.component';

describe('PqrsCrearComponent', () => {
  let component: PqrsCrearComponent;
  let fixture: ComponentFixture<PqrsCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PqrsCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PqrsCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
