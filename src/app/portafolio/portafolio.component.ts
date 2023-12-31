import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  template: `
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
      @for (sitio of sitios; track sitio.id) {
      <div class="card">
        <div class="rounded-xl relative h-36">
          <img
            class="object-cover h-full rounded-xl"
            ngSrc="/assets/img/{{ sitio.src }}"
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
    path: string;
    src: string;
    clase: string;
  }[] = [
    {
      id: 23,
      title: 'Mercado Libre',
      path: '/sitios/:23',
      src: 'mercado-libre.jpg',
      clase: 'sm:col-span-2',
    },
    {
      id: 24,
      title: 'Netflix',
      path: '/sitios/:24',
      src: 'netflix.jpg',
      clase: '',
    },
    {
      id: 25,
      title: 'Rediseño Spotify',
      path: '/sitios/:25',
      src: 'spotify-red.jpg',
      clase: '',
    },
    {
      id: 26,
      title: 'Spotify',
      path: '/sitios/:26',
      src: 'spotify.jpg',
      clase: 'sm:col-span-2',
    },
    {
      id: 27,
      title: 'Tienda Rayitas',
      path: '/sitios/:27',
      src: 'rayitas.jpg',
      clase: 'sm:col-span-2',
    },
    {
      id: 28,
      title: 'Mi Solar',
      path: '/sitios/:28',
      src: 'mi-solar.jpg',
      clase: '',
    },
    {
      id: 29,
      title: 'Zaimoku Taller',
      path: '/sitios/:29',
      src: 'zaimoku.jpg',
      clase: '',
    },
    {
      id: 30,
      title: 'SiteBeam',
      path: '/sitios/:30',
      src: 'zaimoku.jpg',
      clase: 'col-span-2',
    },
  ];
}
