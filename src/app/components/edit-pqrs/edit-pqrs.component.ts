import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PqrsService } from '../../service/pqrs.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-pqrs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-pqrs.component.html',
  styleUrl: './edit-pqrs.component.css'
})
export class EditPqrsComponent {

  constructor(
    private _pqrsService: PqrsService
  ){
  }

  model = {
    "_nroRadicado": '',
    "_estado": '',
    "_respuesta": ''
  }

  async ActualizarPqr(){
    await this._pqrsService.editarPqrs(this.model).then(response=>{
      let msg = response.data.Mensaje
      Swal.fire({
        title: 'Exito!',
        text: msg,
        icon: 'success',
        confirmButtonText: 'Cerrar'
      })
      this.model._nroRadicado = ''
      this.model._estado = ''
      this.model._respuesta = ''
    }).catch(err =>{
      alert(err)
    })
  }

}
