import { Component, OnInit } from '@angular/core';

import { PqrsService } from '../../service/pqrs.service'

@Component({
  selector: 'app-lista-pqrs',
  standalone: true,
  imports: [],
  templateUrl: './lista-pqrs.component.html',
  styleUrl: './lista-pqrs.component.css'
})
export class ListaPqrsComponent implements OnInit{

  constructor (
    private _pqrsService: PqrsService
  ){
  }

  _misSolicitudes: any[] = []

  async ngOnInit() {
    this._misSolicitudes = []
    let peticion = await this._pqrsService.getDataPQRS()
    if(peticion.data.Lista.length > 0){
      for (const objeto of peticion.data.Lista) {
        objeto.collapse = false
        this._misSolicitudes.push(objeto)
      }
    }
  }

  mostrarOcultarCollapse(collapseRadicado: string){
    let pqr = this._misSolicitudes.find( (obj) => obj._nroRadicado === collapseRadicado)
    pqr.collapse = (pqr.collapse == false) ? true : false

    let objeto = document.getElementById('collapse'+collapseRadicado)

    if(objeto){
      if(pqr.collapse){
        objeto.classList.add('show')
      }else{
        objeto.classList.remove('show')
      }
    }
  }
}
