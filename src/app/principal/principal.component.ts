import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  template: `
    <!-- seccion principal escritorio -->
    <div class="hidden sm:block mt-2 mb-8 escritorio">
      <div class="grid grid-cols-6 gap-2">
        <div class="card col-span-3">
          <h1>{{ title }}</h1>
          <p>{{ content }}</p>
        </div>
        @for (img of imgsPrincipal; track img.id) {
        <img
          class="{{ img.clase }} rounded-xl w-full"
          src="{{ img.src }}"
          alt="{{ img.alt }}"
        />
        }
      </div>
    </div>
    <!-- seccion principal escritorio -->
    <!-- seccion principal movil -->
    <div
      class="card mt-2 movil"
      style="background-image: linear-gradient(
    to bottom,rgba(0, 29, 86, 0.6),
    rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)
    
  ), url('{{ imgsPrincipal[0].src }}'); "
    >
      <h1>{{ title }} ??</h1>
      <p>{{ content }}</p>
    </div>
    <!-- seccion principal movil -->
  `,
  styles: `
  .escritorio{
    img{
    background-color: #FF9A8A;
    @media (min-width: 640px) {
      height: calc(70vh - 3rem);
    }
    @media (min-width: 768px) {
      height: calc(50vh - 3rem);
    }
    object-fit: cover;
    opacity: 0.7;
  }
  }
  .movil{
    @media (min-width: 640px) {
      display: none;
    }
    height: calc(100vh - 5rem);
    @apply bg-cover bg-no-repeat flex flex-col justify-center items-center text-center;
  }
  h1{
    @apply text-2xl sm:text-4xl font-bold capitalize ;
  }`,
})
export class PrincipalComponent {
  title: string = 'Bienvenido a mi portafolio';
  content: string =
    'Mi nombre es Julián Araya y soy un desarrollador web apasionado por la creación de aplicaciones web y la resolución de problemas. Me considero una persona autodidacta, proactiva y con gran capacidad para trabajar en equipo.';
  // !actualizar imagenes
  imgsPrincipal: { id: string; src: string; alt: string; clase: string }[] = [
    {
      id: 'earth',
      src: '/assets/img/code.jpg',
      alt: 'robot earth',
      clase: 'col-span-3',
    },
    {
      id: 'earth1',
      src: '/assets/img/code-2.jpg',
      alt: 'robot earth1',
      clase: 'col-span-2',
    },
    {
      id: 'earth2',
      src: '/assets/img/code-3.jpg',
      alt: 'robot earth2',
      clase: 'col-span-2',
    },
    {
      id: 'earth3',
      src: '/assets/img/code-4.jpg',
      alt: 'robot earth3',
      clase: 'col-span-2',
    },
  ];
}
