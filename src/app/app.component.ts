import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FooterSiteComponent } from './footer-site/footer-site.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, FooterSiteComponent],
  template: `<app-menu />
    <main class="container sm:mx-auto px-3">
      <router-outlet />
    </main>
    <app-footer-site />`,
  styles: ``,
})
export class AppComponent {}
