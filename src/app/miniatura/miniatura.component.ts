import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-miniatura',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2 class="capitalize text-3xl">Sitios realizados</h2>
    <div class="grid grid-cols-3 gap-2">
      @for (sitio of sitios; track sitio.id) {
      <a
        class="card bg-contain bg-center bg-no-repeat transition-all duration-300 ease-in-out  {{
          sitio.clase
        }}"
        routerLink="{{ sitio.path }}"
        style="background-image: url({{ sitio.src }});"
      >
        <h3 class="hidden">{{ sitio.title }}</h3>
      </a>
      }
    </div>
  `,
  styles: `
  .card{
    height: calc(50vh - 3rem);
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
      title: 'Sitio 1',
      path: '/sitios/:23',
      src: 'https://robohash.org/mmm',
      clase: 'sm:col-span-2',
    },
    {
      id: 24,
      title: 'Sitio 2',
      path: '/sitio2',
      src: 'https://robohash.org/mmm2',
      clase: '',
    },
    {
      id: 25,
      title: 'Sitio 3',
      path: '/sitio3',
      src: 'https://robohash.org/mmm3',
      clase: '',
    },
    {
      id: 26,
      title: 'Sitio 4',
      path: '/sitio4',
      src: 'https://robohash.org/mmm4',
      clase: 'sm:col-span-2',
    },
    {
      id: 27,
      title: 'Sitio 5',
      path: '/sitio5',
      src: 'https://robohash.org/mmm5',
      clase: 'sm:col-span-2',
    },
    {
      id: 28,
      title: 'Sitio 6',
      path: '/sitio6',
      src: 'https://robohash.org/mmm6',
      clase: '',
    },
    {
      id: 29,
      title: 'Sitio 7',
      path: '/sitio7',
      src: 'https://robohash.org/mmm7',
      clase: '',
    },
    {
      id: 30,
      title: 'Sitio 8',
      path: '/sitio8',
      src: 'https://robohash.org/mmm8',
      clase: 'col-span-2',
    },
  ];
}
