import { Component } from '@angular/core';
import { PrincipalComponent } from '../principal/principal.component';
import { MiniaturaComponent } from '../miniatura/miniatura.component';
import { HabilidadesComponent } from '../habilidades/habilidades.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [PrincipalComponent, MiniaturaComponent, HabilidadesComponent],
  template: `
    <app-principal />
    @defer () {
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <app-miniatura />
      <app-habilidades />
    </div>
    }
  `,
  styles: `
  `,
})
export class InicioComponent {}
