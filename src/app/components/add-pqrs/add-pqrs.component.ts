import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { PqrsService } from '../../service/pqrs.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-pqrs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-pqrs.component.html',
  styleUrl: './add-pqrs.component.css'
})
export class AddPqrsComponent {

  constructor(
    private _pqrsService: PqrsService
  ){
  }

  model = {
    "_radicado": {
      "asunto": '',
      "descripcion": ''
    },
    "_propietario": {
      "nombres": '',
      "apellidos": '',
      "dni": '',
      "email": '',
      "contacto": ''
    }
  }

  async CrearPeticion(){
    await this._pqrsService.crearPqrs(this.model).then(response=>{
      let msg = response.data.Mensaje+' Su número de radicado es: '+response.data.Radicado._nroRadicado
      Swal.fire({
        title: 'Exito!',
        text: msg,
        icon: 'success',
        confirmButtonText: 'Cerrar'
      })
    }).catch(err =>{
      alert(err)
    })
  }

}
