import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-site',
  standalone: true,
  imports: [],
  template: `
    <footer class="container sm:mx-auto px-3 mt-2 mb-4">
      <div class="card grid grid-cols-1 sm:grid-cols-2 gap-2">
        <p class="px-2 py-1">{{ autor }}</p>
        <div class="flex justify-around">
          @for (red of redes; track red.id) {
          <a class="btn" href="{{ red.url }}" target="_blank"
            ><i class="{{ red.ico }} me-2"></i>{{ red.title }}</a
          >
          }
        </div>
      </div>
    </footer>
  `,
  styles: `
  .card{
    @apply sm:rounded-3xl;
  }`,
})
export class FooterSiteComponent {
  autor: string = 'Hecho por: Julián Araya';
  // !actualizar redes y diseño de footer
  redes: { id: number; title: string; url: string; ico: string }[] = [
    {
      id: 0,
      title: 'Jul879n',
      url: 'https://github.com/Jul879n',
      ico: 'fa-brands fa-github',
    },
    {
      id: 1,
      title: '+569 66883286',
      url: 'https://wa.link/bojpi4/',
      ico: 'fa-brands fa-whatsapp',
    },
    {
      id: 2,
      title: 'jul.03n',
      url: 'https://www.instagram.com/jul.03n',
      ico: 'fa-brands fa-instagram',
    },
  ];
}
