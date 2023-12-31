import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { SitioComponent } from './sitio/sitio.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Inicio',
    component: InicioComponent,
  },
  {
    path: 'sitios',
    title: 'Portafolio',
    component: PortafolioComponent,
  },
  {
    path: 'sitios/:id',
    title: 'title',
    component: SitioComponent,
  },
];
