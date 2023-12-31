import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-site',
  standalone: true,
  imports: [],
  template: `
    <footer class="container sm:mx-auto px-3 mt-2 mb-4">
      <div class="card grid grid-cols-2 gap-2">
        <p>{{ autor }}</p>
        <div class="flex justify-around">
          @for (red of redes; track red.id) {
          <a href="{{ red.url }}" target="_blank">{{ red.title }}</a>
          }
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterSiteComponent {
  autor: string = 'Julián Araya';
  // !actualizar redes y diseño de footer
  redes: { id: number; title: string; url: string }[] = [
    { id: 0, title: 'Github', url: 'https://github.com/Jul879n' },
    { id: 1, title: 'WhatsApp', url: '' },
    { id: 2, title: 'Instagram', url: '' },
  ];
}
