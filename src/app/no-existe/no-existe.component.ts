import { Component } from '@angular/core';

@Component({
  selector: 'app-no-existe',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <h1 class="sm:text-7xl text-3xl font-bold mb-2 capitalize">
        {{ title }}
      </h1>
      <p class="sm:text-5xl text-xl mb-2">
        {{ content }} <span>{{ emoji }}</span>
      </p>
    </div>
  `,
  styles: `
  p{
    span{
      @apply font-semibold;
    }
  }
  `,
})
export class NoExisteComponent {
  title: string = 'error 404';
  content: string = 'La página que buscas no existe';
  emoji: string = '＞﹏＜';
}
