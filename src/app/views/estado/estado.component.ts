import { Component } from '@angular/core';

import { EditPqrsComponent } from '../../components/edit-pqrs/edit-pqrs.component'

@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [EditPqrsComponent],
  templateUrl: './estado.component.html',
  styleUrl: './estado.component.css'
})
export class EstadoComponent {

}
