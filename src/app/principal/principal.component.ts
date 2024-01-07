import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  template: `
    <section class="mb-4">
      <div class="grid sm:grid-cols-12 grid-cols-4 gap-2">
        @for (enlace of enlaces; track enlace.id) {
        <a
          href="{{ enlace.url }}"
          target="_blank"
          class="card sm:col-span-3 flex justify-center items-center"
          ><i class="sm:text-4xl text-3xl {{ enlace.icon }}"></i
        ></a>
        }
        <div
          class="sm:col-span-3 sm:block hidden
        "
        >
          <img
            class="rounded-xl object-cover h-full"
            src="{{ destacados[0].src }}"
            alt=""
          />
        </div>
        <div class="card sm:col-span-6 col-span-4 sm:text-balance ">
          <h1 class="sm:text-7xl text-4xl font-bold pb-4 capitalize">
            {{ title }}
          </h1>
        </div>
        <div class="sm:col-span-3 sm:block hidden">
          <img
            class="rounded-xl object-cover h-full "
            src="{{ destacados[1].src }}"
            alt=""
          />
        </div>

        <div
          class="card sm:col-span-12 col-span-4 flex justify-center items-center"
        >
          <h2 class="sm:text-5xl text-2xl font-bold capitalize mb-2">
            {{ habilidad }}
          </h2>
        </div>
      </div>
    </section>
  `,
  styles: `
  img{
    @media (prefers-color-scheme: dark){
      border: 4px solid #141414;
    }
    @media (prefers-color-scheme: light){
      border: 4px solid #74CCA5;
    }
  }
  section{
    
    a{
      text-decoration: none;
      @apply transition-all duration-300 ease-in-out;
      @media (prefers-color-scheme: dark){
        color: #FF9A8A;
      }
      @media (prefers-color-scheme: light){
        color: #74CCA5;
      }
      &:hover{
        @media (prefers-color-scheme: dark){
          background-color: #FF9A8A;
          color: #141414;
        }
        @media (prefers-color-scheme: light){
          background-color: #FF9A8A;
          @apply text-emerald-950;
        }
      }
    }
  }`,
})
export class PrincipalComponent {
  title: string = 'Bienvenido a mi portafolio';
  habilidad: string = 'HabilidadPrincipal = "JavaScript"';
  content: string = '';
  enlaces: { id: number; icon: string; url: string }[] = [
    {
      id: 1,
      icon: 'fa-regular fa-envelope',
      url: 'mailto:arayacontrerasjulian@gmail.com',
    },
    {
      id: 2,
      icon: 'fa-brands fa-github',
      url: 'https://github.com/Jul879n',
    },
    {
      id: 3,
      icon: 'fa-brands fa-linkedin',
      url: 'https://cl.linkedin.com/in/luis-juli%C3%A1n-alejandro-araya-contreras-004054237?trk=people_directory',
    },
    {
      id: 4,
      icon: 'fa-brands fa-whatsapp',
      url: 'https://wa.link/bojpi4/',
    },
  ];
  destacados: { src: string }[] = [
    {
      src: '/assets/img/spotify-red.jpg',
    },
    {
      src: '/assets/img/mercado-libre.jpg',
    },
  ];
}
