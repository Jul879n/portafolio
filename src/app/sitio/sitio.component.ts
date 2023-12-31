import { Component, Inject } from '@angular/core';
import { MiniaturaComponent } from '../miniatura/miniatura.component';
import { DOCUMENT, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sitio',
  standalone: true,
  imports: [MiniaturaComponent, NgOptimizedImage],
  template: `
    @if(id != '' && info.length > 0){
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <div class="card relative sm:col-span-2 h-96">
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
    } @else {
    <h1>Esta pagina no existe</h1>
    }
  `,
  styles: `
  .btn{
    @apply ms-0;
  }`,
})
export class SitioComponent {
  title: string = '';
  id: string = '';
  info: {
    id: number;
    title: string;
    img: string;
    paragraph: string;
    url: string;
    list: string[];
  }[] = [];
  sitios: {
    id: number;
    title: string;
    img: string;
    paragraph: string;
    url: string;
    list: string[];
  }[] = [
    {
      id: 23,
      title: 'Mercado Libre',
      img: 'mercado-libre.jpg',
      paragraph:
        'Sitio replica de mercado libre, hecho con WordPress y Woocommerce, es autoadministrable, utiliza custom post type y custom taxonomy.',
      url: 'https://jul879n.free.nf/ecommerce',
      list: [
        'Realizado con WordPress',
        'Utiliza Woocommerce',
        'Utiliza custom post type y custom taxonomy',
        'Es Autoadministrable',
        'Responsive',
        'Utiliza jQuery',
        'Utiliza Bootstrap',
      ],
    },
    {
      id: 24,
      title: 'Netflix',
      img: 'netflix.jpg',
      paragraph:
        'Sitio replica de Netflix autoadministrable, utiliza custom post type y custom taxonomy, hecho con WordPress.',
      url: 'https://jul879n.free.nf/netflix',
      list: [
        'Utiliza WordPress',
        'Utiliza custom post type y custom taxonomy',
        'Es Autoadministrable',
        'Responsive',
        'Funcionalidad con PHP',
        'Utiliza Bootstrap',
      ],
    },
    {
      id: 25,
      title: 'Rediseño Spotify',
      img: 'spotify-red.jpg',
      paragraph:
        'Este es un rediseño de Spotify en el que se aplican nuevas funciones y autoadministrable, hecho con WordPress, jQuery, utiliza custom post type y custom taxonomy ademas de distintos plugins de jQuery.',
      url: 'https://jul879n.free.nf/spotify-redesign',
      list: [
        'Utiliza WordPress',
        'Utiliza custom post type y custom taxonomy',
        'Es Autoadministrable',
        'Responsive',
        'Utiliza Ajax para la navegación',
        'Utiliza jQuery para funcionalidad del reproductor y navegación',
        'Utiliza Bootstrap',
      ],
    },
    {
      id: 26,
      title: 'Spotify',
      img: 'spotify.jpg',
      paragraph:
        'Sitio replica de la opción sin cuenta de Spotify de hace unos meses, hecho con WordPress, utiliza custom post type y custom taxonomy.',
      url: 'https://jul879n.free.nf/spotify',
      list: [
        'Utiliza WordPress',
        'Utiliza custom post type y custom taxonomy',
        'Es Autoadministrable',
        'Responsive',
        'Utiliza Bootstrap',
      ],
    },
    {
      id: 27,
      title: 'Tienda Rayitas',
      img: 'rayitas.jpg',
      paragraph:
        'Sitio de ventas de distintos tipos de rayitas, hecho con PHP y SQL, se puede agregar el producto al carrito, eliminarlo, modificar cantidad,crear usuario, iniciar sesion, agregar productos nuevo en caso de ser admin.',
      url: 'https://jul879n.free.nf/rayitas',
      list: [
        'Utiliza PHP',
        'Utiliza SQL',
        'Utiliza Bootstrap',
        'Utiliza sesiones',
        'Utiliza MVC',
      ],
    },
    {
      id: 28,
      title: 'Mi Solar',
      img: 'mi-solar.jpg',
      paragraph:
        'Sitio web que ofrece servicios de energía solar para hogares y empresas.',
      url: 'https://misolar.free.nf/',
      list: [
        'Utiliza jQuery',
        'Utiliza Bootstrap',
        'Utiliza Ajax para la navegación',
        'Sistema de login y cifrado de usuario',
        'Utiliza localStorage',
        'Aplicación propia',
      ],
    },
    {
      id: 29,
      title: 'ZaimokuTaller',
      img: 'zaimoku.jpg',
      paragraph: 'Sitio web que ofrece productos en madera.',
      url: 'https://zaimoku-taller.github.io/',
      list: ['Utiliza Bootstrap', 'Diseño Moderno'],
    },
    {
      id: 30,
      title: 'SiteBeam',
      img: 'zaimoku.jpg',
      paragraph: 'Sitio web que ofrece servicios de desarrollo y diseño web.',
      url: 'https://sitebeam.vercel.app/',
      list: [
        'Utiliza Tailwind',
        'utiliza JavaScript para el funcionamiento',
        'NextJS',
        'Utiliza fetch para enviar datos de formulario',
        'Utiliza componentes reutilizables',
        'Utiliza navegación dinámica',
      ],
    },
  ];
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    let id = this.document.location.pathname.split('/')[2];
    id = id.replace(':', '');
    this.id = id;
    for (let i = 0; i < this.sitios.length; i++) {
      if (this.sitios[i] && this.sitios[i].id == Number(id)) {
        this.info.push(this.sitios[i]);
        this.title = this.info[0].title;
      }
    }
    const title = this.document.getElementsByTagName('title')[0];
    if (title) title.innerHTML = this.title;
  }
}
