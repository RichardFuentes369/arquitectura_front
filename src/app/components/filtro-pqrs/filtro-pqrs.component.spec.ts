import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPqrsComponent } from './filtro-pqrs.component';

describe('FiltroPqrsComponent', () => {
  let component: FiltroPqrsComponent;
  let fixture: ComponentFixture<FiltroPqrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroPqrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
