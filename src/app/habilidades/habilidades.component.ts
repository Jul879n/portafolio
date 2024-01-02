import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  template: `
    <div class="card text-wrap">
      <h2 class="capitalize text-xl sm:text-3xl font-bold">{{ title }}</h2>
      <ul class="list-inside ms-2">
        @for (habilidad of habilidades; track habilidad.id) {
        <li>
          <span class="font-semibold">{{ habilidad.title }}:</span>
          {{ habilidad.content }}
        </li>
        }
      </ul>
      <p class="font-semibold">{{ content }}</p>
    </div>
  `,
  styles: `
  span{
    color: #FF9A8A;
  }`,
})
export class HabilidadesComponent {
  title: string = 'mis habilidades';
  content: string =
    'Estas habilidades y herramientas me permiten desarrollar sitios y aplicaciones web de manera eficiente y brindar una experiencia de usuario excepcional.';
  habilidades: { id: number; title: string; content: string }[] = [
    {
      id: 70,
      title: 'HTML',
      content:
        'Lenguaje de marcado utilizado para estructurar el contenido de las páginas web.',
    },
    {
      id: 71,
      title: 'CSS',
      content: 'Lenguaje utilizado para dar estilo y diseño a las páginas web.',
    },
    {
      id: 72,
      title: 'JavaScript',
      content:
        'Lenguaje de programación utilizado para agregar interactividad y funcionalidad a las páginas web.',
    },
    {
      id: 73,
      title: 'TypeScript',
      content:
        'Superset de JavaScript que añade tipado estático y características adicionales.',
    },
    {
      id: 74,
      title: 'Angular 17',
      content:
        'Framework de JavaScript para construir aplicaciones web y móviles.',
    },
    {
      id: 75,
      title: 'WordPress',
      content:
        'Plataforma de gestión de contenido popular para la creación y administración de sitios web.',
    },
    {
      id: 76,
      title: 'PHP',
      content:
        'Lenguaje de programación utilizado para el desarrollo de aplicaciones web del lado del servidor.',
    },
    {
      id: 77,
      title: 'Adobe XD',
      content:
        'Herramienta de diseño y prototipado de interfaces para crear experiencias de usuario atractivas.',
    },
  ];
}
