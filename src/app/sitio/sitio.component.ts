import { Component } from '@angular/core';
import { MiniaturaComponent } from '../miniatura/miniatura.component';

@Component({
  selector: 'app-sitio',
  standalone: true,
  imports: [MiniaturaComponent],
  template: `
    <h1 class="capitalize text-2xl sm:text-4xl font-bold">
      {{ info[0].title }}
    </h1>
    <p>{{ info[0].paragraph }}</p>
    <a href="{{ info[0].url }}">Visitar</a>
    <ul>
      @for (item of info[0].list; track item) {
      <li>{{ item }}</li>
      }
    </ul>
    @defer () {
    <app-miniatura />
    } @loading {
    <div class="animate-pulse">
      <div class="h-4 bg-gray-400 rounded w-3/4"></div>
      <div class="h-4 bg-gray-400 rounded w-3/4"></div>
      <div class="h-4 bg-gray-400 rounded w-3/4"></div>
      <div class="h-4 bg-gray-400 rounded w-3/4"></div>
      <div class="h-4 bg-gray-400 rounded w-3/4"></div>
    </div>
    }
  `,
  styles: ``,
})
export class SitioComponent {
  title: string = 'Sitio';
  id: string = '';
  info: {
    id: number;
    title: string;
    src: string;
    paragraph: string;
    url: string;
    list: string[];
  }[] = [];
  sitios: {
    id: number;
    title: string;
    src: string;
    paragraph: string;
    url: string;
    list: string[];
  }[] = [
    {
      id: 23,
      title: 'Mercado Libre',
      src: 'https://robohash.org/mmm',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      url: 'https://www.google.com',
      list: ['item 1', 'item 2', 'item 3'],
    },
    {
      id: 24,
      title: 'Spotify',
      src: 'https://robohash.org/nnn',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      url: 'https://www.google.csdsdom',
      list: ['item 1', 'item 2', 'item 3'],
    },
  ];
  ngOnInit() {
    let id = window.location.pathname.split('/')[2];
    id = id.replace(':', '');
    for (let i = 0; i < this.sitios.length; i++) {
      if (this.sitios[i].id == Number(id)) {
        this.info.push(this.sitios[i]);
      }
    }
  }
}
