import { Injectable } from '@angular/core';

import { environment } from '../../../enviroments/enviroments';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  constructor() { }

  async getDataPQRS(_nroRadicado:string, _dni: string){

    let complemento = 'pqrs-activas'
    let filtros = ''

    if(_nroRadicado){
      filtros += (filtros == '')?'?':'&'
      filtros += `_nroRadicado=${_nroRadicado}`
    }
    if(_dni){
      filtros += (filtros == '')?'?':'&'
      filtros += `_dni=${_dni}`
    }

    let urlCopleta = environment.apiUrl+complemento+filtros

    return await axios.request({
      method: 'get',
      url: urlCopleta,
    })
  }

  async editarPqrs(_modelo:any){

    let complemento = 'pqrs-estado'
    let filtros = ''

    if(_modelo._nroRadicado != '' && _modelo._estado  != ''){
      filtros += '?'
      filtros += `_nroRadicado=${_modelo._nroRadicado}`
      filtros += '&'
      filtros += `_estado=${_modelo._estado}`
    }



    let urlCopleta = environment.apiUrl+complemento+filtros

    return await axios.request({
      method: 'put',
      url: urlCopleta,
      data: {
        "_trazabilidad": {
          "respuesta": _modelo._respuesta
        }
      }
    })


  }

  async crearPqrs(_modelo:any){

    let urlCopleta = environment.apiUrl

    return await axios.request({
      method: 'post',
      url: urlCopleta+'pqrs-crear',
      data: _modelo,
    })
  }

}
