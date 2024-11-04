import { Routes } from '@angular/router';

import { WelcomeComponent } from './views/welcome/welcome.component'
import { PqrsComponent } from './views/pqrs/pqrs.component'
import { AddComponent } from './views/add/add.component'

import { EstadoComponent } from './views/estado/estado.component'
import { TrazaComponent } from './views/traza/traza.component'

export const routes: Routes = [
  {
    path: '',
    title: 'Welcome',
    component: WelcomeComponent,
  },
  {
    path: 'pqrs',
    title: 'PQRS',
    component: PqrsComponent,
  },
  {
    path: 'add',
    title: 'Nueva - PQRS',
    component: AddComponent,
  },
  {
    path: 'updated',
    title: 'Actualizar estado - PQRS',
    component: EstadoComponent,
  },
  {
    path: 'trazabilidad',
    title: 'Trazabilidad - PQRS',
    component: TrazaComponent,
  },
];
