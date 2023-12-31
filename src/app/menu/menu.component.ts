import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="container sm:mx-auto px-3">
      <div class="p-2 rounded-full mt-2">
        <div class="grid grid-cols-2 gap-2">
          <div class="px-2 py-1">
            <span>Portafolio</span>
          </div>
          <nav class="flex justify-end ">
            @for (enlace of enlaces; track enlace.id) {
            <button
              (click)="verificarBtnActivo(enlace.id)"
              id="{{ enlace.id }}"
              routerLink="{{ enlace.path }}"
            >
              {{ enlace.title }}
            </button>
            }
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: `
  .foco{
      background-color: #FF9A8A;
    }`,
})
export class MenuComponent {
  enlaces: { id: number; title: string; path: string }[] = [
    { id: 0, title: 'Inicio', path: '/' },
    { id: 1, title: 'Portafolio', path: '/sitios' },
  ];
  btnNavActivo: string = 'foco';
  cantidad = this.enlaces.length;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const title = document
        .getElementsByTagName('title')[0]
        .innerText.toLowerCase();
      for (let i = 0; i < this.cantidad; i++) {
        if (title == this.enlaces[i].title.toLowerCase()) {
          this.verificarBtnActivo(i);
        }
      }
    }
  }
  verificarBtnActivo(id: number) {
    for (let i = 0; i < this.cantidad; i++) {
      if (i == id) {
        document.getElementById(`${i}`)?.classList.add(this.btnNavActivo);
      } else {
        document.getElementById(`${i}`)?.classList.remove(this.btnNavActivo);
      }
    }
  }
}
