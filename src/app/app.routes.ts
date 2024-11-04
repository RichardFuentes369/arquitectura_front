import { Routes } from '@angular/router';

import { WelcomeComponent } from './views/welcome/welcome.component'
import { PqrsComponent } from './views/pqrs/pqrs.component'
import { PqrsCrearComponent } from './views/pqrs-crear/pqrs-crear.component'
import { PqrsEstadoComponent } from './views/pqrs-estado/pqrs-estado.component'

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
    path: 'pqrs-crear',
    title: 'PQRS-CREAR',
    component: PqrsCrearComponent,
  },
  {
    path: 'pqrs-agregar-estado',
    title: 'PQRS-ESTADO',
    component: PqrsEstadoComponent,
  },
];
