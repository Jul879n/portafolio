import { Component } from '@angular/core';
import { PrincipalComponent } from '../principal/principal.component';
import { MiniaturaComponent } from '../miniatura/miniatura.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [PrincipalComponent, MiniaturaComponent],
  template: ` <app-principal />
    <app-miniatura />`,
  styles: `
  `,
})
export class InicioComponent {}
