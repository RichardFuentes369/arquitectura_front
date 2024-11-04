import { Component, Input, ViewChild } from '@angular/core';

import { FiltroPqrsComponent } from '../../components/filtro-pqrs/filtro-pqrs.component'
import { ListaPqrsComponent } from '../../components/lista-pqrs/lista-pqrs.component'

@Component({
  selector: 'app-pqrs',
  standalone: true,
  imports: [
    FiltroPqrsComponent,
    ListaPqrsComponent
  ],
  templateUrl: './pqrs.component.html',
  styleUrl: './pqrs.component.css'
})
export class PqrsComponent {

  dataFromParent: any = []

  @ViewChild(ListaPqrsComponent) listaPqrsComponent!: ListaPqrsComponent;
  camposFiltro(data: any){
    this.listaPqrsComponent.filtrarLista(data._nroRadicado, data._dni);
  }

}
