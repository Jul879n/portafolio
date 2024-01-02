import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-miniatura',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <h2 class="capitalize text-xl sm:text-3xl font-bold">
      proyectos realizados
    </h2>
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
      height: calc(40vh - 3rem);
    }
    @media (min-width: 768px) {
      height: calc(22vh - 3rem);
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
