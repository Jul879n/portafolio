import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  template: `
    <div class="card text-wrap">
      <h2 class="capitalize text-xl sm:text-3xl font-bold mb-2">{{ title }}</h2>
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
    'Estas son mis habilidades ordenadas según mi nivel de experiencia.';
  habilidades: { id: number; title: string; content: string }[] = [
    {
      id: 72,
      title: 'JavaScript',
      content:
        'Es mi lenguaje de programación favorito, lo utilizo para crear aplicaciones web y móviles. Además de ser uno de los lenguajes que utilizo en mis proyectos personales.',
    },
    {
      id: 70,
      title: 'HTML',
      content:
        'Es de las primeras tecnologías que aprendí, es el lenguaje de marcado para la elaboración de páginas web.',
    },
    {
      id: 71,
      title: 'CSS',
      content:
        'Estoy familiarizado con sus características como también con sus frameworks. De los cuales he utilizado Bootstrap, TailwindCSS',
    },
    {
      id: 75,
      title: 'WordPress',
      content:
        'La mayoría de mis proyectos los he realizado con este CMS, es una herramienta muy poderosa para crear sitios web de manera rápida y sencilla.',
    },
    {
      id: 73,
      title: 'TypeScript',
      content:
        'Llevo utilizándolo desde que empecé a utilizar Angular en diciembre de 2023, es un superconjunto de JavaScript que agrega tipos estáticos y objetos basados en clases.',
    },
    {
      id: 74,
      title: 'Angular 17',
      content:
        'Aún me encuentro aprendiendo este framework, pero ya he realizado algunos proyectos con el. Como este portafolio.',
    },
    {
      id: 76,
      title: 'PHP',
      content:
        'La mayoría de mis proyectos los he realizado con este lenguaje de programación, ya que es el lenguaje que utiliza WordPress.',
    },
  ];
}
