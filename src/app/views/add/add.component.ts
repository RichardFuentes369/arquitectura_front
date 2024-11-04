import { Component } from '@angular/core';

import { AddPqrsComponent } from '../../components/add-pqrs/add-pqrs.component'

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [AddPqrsComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

}
