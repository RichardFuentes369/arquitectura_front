import { Component, Input, OnInit } from '@angular/core';

import { PqrsService } from '../../service/pqrs.service'
import Swal from 'sweetalert2'

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

  @Input()
  mostrarListadoInicial: number = 0

  _misSolicitudes: any[] = []

  async ngOnInit() {
    this._misSolicitudes = []

    if(this.mostrarListadoInicial == 0){
      let peticion = await this._pqrsService.getDataPQRS('','')
      if(peticion.data.Lista != null){
        for (const objeto of peticion.data.Lista) {
          objeto.collapse = false
          this._misSolicitudes.push(objeto)
        }
      }else{
        Swal.fire({
          title: 'Advertencia!',
          text: 'No hay pqrs creadas en el sistema',
          icon: 'warning',
          confirmButtonText: 'Cerrar'
        })
      }
    }
  }

  async filtrarLista(
    _nroRadicado:string,
    _dni:string
  ){
    this._misSolicitudes = []
    let peticion = await this._pqrsService.getDataPQRS(_nroRadicado,_dni)
    if(peticion.data.Lista && peticion.data.Lista.length > 0){
      for (const objeto of peticion.data.Lista) {
        objeto.collapse = false
        this._misSolicitudes.push(objeto)
      }
    }else{
      let msg = peticion.data.Mensaje
      Swal.fire({
        title: 'Error!',
        text: msg,
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
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
