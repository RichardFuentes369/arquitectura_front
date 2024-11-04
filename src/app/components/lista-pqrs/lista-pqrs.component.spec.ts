import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPqrsComponent } from './lista-pqrs.component';

describe('ListaPqrsComponent', () => {
  let component: ListaPqrsComponent;
  let fixture: ComponentFixture<ListaPqrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPqrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
