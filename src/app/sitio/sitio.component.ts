import { Component, Inject } from '@angular/core';
import { MiniaturaComponent } from '../miniatura/miniatura.component';
import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { NoExisteComponent } from '../no-existe/no-existe.component';

@Component({
  selector: 'app-sitio',
  standalone: true,
  imports: [MiniaturaComponent, NgOptimizedImage, NoExisteComponent],
  template: `
    @if(id != '' && info.length > 0){
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <div id="img" class="card relative sm:col-span-2 h-96">
        <img
          class="object-cover rounded-xl h-full"
          ngSrc="assets/img/{{ info[0].img }}"
          fill
          alt="{{ info[0].title }}"
        />
      </div>
      <div>
        <div class="card h-max text-balance">
          <h1 class="capitalize text-2xl sm:text-4xl font-bold">
            {{ info[0].title }}
          </h1>
          <p class="mb-2">{{ info[0].paragraph }}</p>
          <a class="btn" href="{{ info[0].url }}" target="_blank">Visitar</a>
        </div>
        <div class="card mt-2">
          <h2 class="capitalize text-xl sm:text-3xl font-semibold">
            Caracteristicas del sitio
          </h2>
          <ul class="list-disc list-inside">
            @for (item of info[0].list; track item) {
            <li>{{ item }}</li>
            }
          </ul>
        </div>
      </div>
    </div>
    }@if(noexiste == 'si-existe') {
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <div id="img" class="card relative sm:col-span-2 h-96 animate-pulse">
        <img class="object-cover rounded-xl h-full" src="" alt="" />
      </div>
      <div>
        <div class="card text-balance animate-pulse h-28"></div>
        <div class="card mt-2 animate-pulse h-48"></div>
      </div>
    </div>

    }@if(noexiste == 'no-existe') {
    <app-no-existe />
    }
  `,
  styles: `
  #img{
    @media (min-width: 640px) {
      height: calc(70vh - 3rem);
    }
    height: calc(45vh - 3rem);
  }
  .btn{
    @apply ms-0;
  }`,
})
export class SitioComponent {
  title: string = '';
  noexiste: string = 'si-existe';
  id: string = '';
  info: {
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
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.cargarDatos().then(() => {
      let id = this.document.location.pathname.split('/')[2];
      id = id.replace(':', '');
      if (this.sitios.find((sitio) => sitio.id == Number(id))) {
        this.id = id;
        this.noexiste = '';
      } else {
        this.id = '';
        this.title = 'error 404';
        this.noexiste = 'no-existe';
        console.error('no se encuentra el sitio con ese id');
      }
      let cantidad = this.sitios.length;
      for (let i = 0; i < cantidad; i++) {
        if (this.sitios[i] && this.sitios[i].id == Number(id)) {
          this.info.push(this.sitios[i]);
          this.title = this.info[0].title;
        }
      }
      const title = this.document.getElementsByTagName('title')[0];
      if (title) title.innerHTML = this.title;
    });
  }
  cargarDatos() {
    return fetch('/assets/data/sitios.json')
      .then((res) => res.json())
      .then((data) => {
        this.sitios = data;
      });
  }
}
