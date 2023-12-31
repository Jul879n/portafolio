import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-miniatura',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <h2 class="capitalize text-3xl">Sitios realizados</h2>
    <div class="grid grid-cols-3 gap-2">
      @for (sitio of sitios; track sitio.id) {
      <a
        class="relative card flex justify-center items-center transition-all duration-300 ease-in-out  {{
          sitio.clase
        }}"
        routerLink="{{ sitio.path }}"
      >
        <img
          class="h-full object-contain"
          ngSrc="/assets/img/{{ sitio.src }}"
          fill
          alt="{{ sitio.title }}"
        />
        <h3 class="hidden">{{ sitio.title }}</h3>
      </a>
      }
    </div>
  `,
  styles: `
  img{
    filter: drop-shadow(0 0 .9rem white);
  }
  .card{
    @media (min-width: 640px) {
      height: calc(20vh - 3rem);
    }
    height: calc(30vh - 3rem);
  }a{
    text-decoration: none;
    h1,h2,h3,h4,h5,h6,span,p{
      color: #000;
    }
    background-color: #74CCA5;
    &:hover{
      background-color: #FF9A8A;
    }
    &:focus{
      background-color: #FF9A8A;
    }&:active{
      background-color: #FF9A8A;
    }
  }`,
})
export class MiniaturaComponent {
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
      src: 'mercadolibre-logo.png',
      clase: 'sm:col-span-2',
    },
    {
      id: 24,
      title: 'Netflix',
      path: '/sitios/:24',
      src: 'netflix-logo.png',
      clase: '',
    },
    {
      id: 25,
      title: 'Rediseño Spotify',
      path: '/sitios/:25',
      src: 'redspotify-logo.png',
      clase: '',
    },
    {
      id: 26,
      title: 'Spotify',
      path: '/sitios/:26',
      src: 'spotify-logo.png',
      clase: 'sm:col-span-2',
    },
    {
      id: 27,
      title: 'Tienda Rayitas',
      path: '/sitios/:27',
      src: 'rayitas-logo.png',
      clase: 'sm:col-span-2',
    },
    {
      id: 28,
      title: 'Mi Solar',
      path: '/sitios/:28',
      src: 'misolar-logo.png',
      clase: '',
    },
    {
      id: 29,
      title: 'Zaimoku Taller',
      path: '/sitios/:29',
      src: 'zaimoku-logo.png',
      clase: '',
    },
    {
      id: 30,
      title: 'SiteBeam',
      path: '/sitios/:30',
      src: 'sitebeam-logo.png',
      clase: 'col-span-2',
    },
  ];
}
