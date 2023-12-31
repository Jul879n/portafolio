import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent],
  template: `<app-menu />
    <main class="container sm:mx-auto px-3">
      <router-outlet />
    </main>`,
  styles: ``,
})
export class AppComponent {}
