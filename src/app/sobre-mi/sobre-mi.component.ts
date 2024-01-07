import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <h2 class="capitalize text-xl sm:text-3xl font-bold mb-2">
        {{ title }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        @for (content of contents; track content) {
        <p>{{ content }}</p>
        }
      </div>
      <a
        class="btn"
        href="{{ datosCv[0].ruta }}"
        download="{{ datosCv[0].nombre }}"
        ><i class="fa-solid fa-download me-2"></i>{{ datosCv[0].texto }}</a
      >
    </div>
  `,
  styles: `
  p{
    @apply mb-2;
  }`,
})
export class SobreMiComponent {
  title: string = 'sobre mi';
  contents: string[] = [
    'Me llamo Julián Araya, soy desarrollador web con certificación en front-end, actualmente me encuentro aprendiendo distintas tecnologías para poder desarrollar aplicaciones web y móviles.',
    'Empece la carrera de Desarrollo y Diseño Web el año 2022, en Duoc UC, la cual tuve que congelar por motivos personales. Mientras tanto decidí estudiar de manera autodidacta, aprendiendo distintas tecnologías y frameworks, para ser un mejor profesional.',
  ];
  datosCv: { ruta: string; nombre: string; texto: string }[] = [
    {
      ruta: '/assets/document/cv-julian-araya.pdf',
      nombre: 'cv-julian-araya.pdf',
      texto: 'Descargar CV',
    },
  ];
}
