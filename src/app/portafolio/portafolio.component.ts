import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  template: `
    <h1 class="capitalize text-2xl sm:text-4xl font-bold">Sitios realizados</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
      @for (sitio of sitios; track sitio.id) {
      <div class="card">
        <div class="rounded-xl relative h-36">
          <img
            class="object-cover h-full rounded-xl"
            ngSrc="/assets/img/{{ sitio.img }}"
            fill
            alt="{{ sitio.title }}"
          />
        </div>
        <h3>{{ sitio.title }}</h3>
        <button class="capitalize" routerLink="{{ sitio.path }}">
          Mas información
        </button>
      </div>
      }
    </div>
  `,
  styles: `
  button{
    @apply ms-0;
  }`,
})
export class PortafolioComponent {
  sitios: {
    id: number;
    title: string;
    img: string;
    path: string;
    src: string;
    clase: string;
    paragraph: string;
    url: string;
    list: string[];
  }[] = [];

  async ngOnInit() {
    this.cargarDatos().then(() => {});
  }

  cargarDatos() {
    return fetch('/assets/data/sitios.json')
      .then((res) => res.json())
      .then((data) => {
        this.sitios = data;
        console.log(this.sitios);
      });
  }
}
