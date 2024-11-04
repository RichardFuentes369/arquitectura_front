import { Injectable } from '@angular/core';

import { environment } from '../../../enviroments/enviroments';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  constructor() { }

  async getDataPQRS(){
    let complemento = 'pqrs-activas'
    let urlCopleta = environment.apiUrl+complemento

    return await axios.request({
      method: 'get',
      url: urlCopleta,
    })
  }

}
