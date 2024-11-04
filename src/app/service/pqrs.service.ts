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

}
