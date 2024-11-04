import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro-pqrs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filtro-pqrs.component.html',
  styleUrl: './filtro-pqrs.component.css'
})
export class FiltroPqrsComponent {

  model = {
    _nroRadicado: '',
    _dni: ''
  }

  @Output() campos = new EventEmitter<any>();
  filtrarEstado(){
    this.campos.emit(this.model);
  }

}
