import { Component } from '@angular/core';
import { PrincipalComponent } from '../principal/principal.component';
import { MiniaturaComponent } from '../miniatura/miniatura.component';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { SobreMiComponent } from '../sobre-mi/sobre-mi.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    PrincipalComponent,
    MiniaturaComponent,
    HabilidadesComponent,
    SobreMiComponent,
  ],
  template: `
    <app-principal />
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <div class="sm:col-span-2"><app-sobre-mi /></div>
      <app-miniatura />
      <app-habilidades />
    </div>
  `,
  styles: `
  `,
})
export class InicioComponent {}
