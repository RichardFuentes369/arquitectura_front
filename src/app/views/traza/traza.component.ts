import { Component, ViewChild } from '@angular/core';

import { FiltroPqrsComponent } from '../../components/filtro-pqrs/filtro-pqrs.component'
import { ListaPqrsComponent } from '../../components/lista-pqrs/lista-pqrs.component'

@Component({
  selector: 'app-traza',
  standalone: true,
  imports: [
    FiltroPqrsComponent,
    ListaPqrsComponent
  ],
  templateUrl: './traza.component.html',
  styleUrl: './traza.component.css'
})
export class TrazaComponent {

  dataFromParent: any = []

  @ViewChild(ListaPqrsComponent) listaPqrsComponent!: ListaPqrsComponent;
  camposFiltro(data: any){
    this.listaPqrsComponent.filtrarLista(data._nroRadicado, data._dni);
  }


}
