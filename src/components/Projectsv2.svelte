<script>
  import { onMount } from 'svelte';
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  import shoeApp from '../assets/screenshots/shoe-app.png';
  import hotelHero from '../assets/screenshots/hotel-hero.png';
  import foodHero from '../assets/screenshots/food-hero-app.png';
  import apiHotelHero from '../assets/screenshots/api-hotel-app.png';
  import stonersWeb from '../assets/screenshots/stoners-web.png';
  import landingPageBootstrapWeb from '../assets/screenshots/landing-page-with-bootstrap5-web.png';
  import paperDoveApp from '../assets/screenshots/paper-dove-app.png';
  import shoeStoreWeb from '../assets/screenshots/shoe-store-web.png';
  import Projects from './Projects.svelte';

  const projects = [
    {
      id: 'proyect_foodhero',
      title: 'FOOD HERO',
      subTitle: 'Gestión de Restaurantes',
      type: 'APLICACIÓN WEB',
      description: 'Aplicación que gestiona eficientemente un restaurante, esta aplicación abarca desde la creación y actualización del menú hasta la asignación de mesas y el seguimiento de pedidos. Simplifica tus operaciones y brinda una experiencia excepcional a los clientes con una solución integral.',
      date: 'enero — 2024',
      image: foodHero,
      tools: 'TYPESCRIPT | VUE | QUASAR | FIREBASE',
      urlWeb: 'https://food-hero-app.vercel.app',
      urlGit: 'https://github.com/juanjosepro/food-app#readme',
    },
    {
      id: 'proyect_hotelhero_front',
      title: 'HOTEL HERO',
      subTitle: 'Gestión Hotelera',
      type: 'APLICACIÓN WEB',
      description: 'Esta aplicación simplifica la administración de habitaciones, el registro de huéspedes, un control eficiente sobre el estado de las habitaciones, reservas y las tarifas. Con roles para administradores y recepcionistas.',
      date: 'octubre — 2022',
      image: hotelHero,
      tools: 'JAVASCRIPT | VUE | VUETIFY',
      urlWeb: 'https://hotel.juanjosepau.dev',
      urlGit: 'https://github.com/juanjosepro/hotel-hero#readme',
    },
    {
      id: 'proyect_hotelhero_api',
      title: 'HOTEL HERO API',
      subTitle: 'Gestión Hotelera',
      type: 'API REST',
      description: 'La API de gestión hotelera esta diseñada para ofrecer acceso y control a las funciones clave de la aplicación de gestión hotelera. Con esta API, Facilita la sincronización de datos y la automatización de procesos.',
      date: 'octubre — 2022',
      image: apiHotelHero,
      tools: 'PHP | LARAVEL',
      urlWeb: 'https://api.hotel.juanjosepau.dev',
      urlGit: 'https://github.com/juanjosepro/api-hotel-hero#readme',
    },
    {
      id: 'proyect_nikfort',
      title: 'NIK FORT',
      subTitle: 'Gestión de calzado',
      type: 'Aplicación web',
      description: 'Esta aplicación es una poderosa herramienta diseñada para optimizar la gestión de productos en la industria del calzado el cual se centra en gestionar  el inventario, productos, tallas y modelos de manera eficiente.',
      date: 'octubre — 2022',
      image: shoeApp,
      tools: 'PYTHON | DJANGO | BOOTSTRAP',
      urlWeb: 'https://shoe-app.juanjosepau.dev',
      urlGit: 'https://github.com/juanjosepro/shoe-app#readme',
    },
    {
      id: 'proyect_stoners',
      title: 'STONERS',
      subTitle: 'Ecommerce',
      type: 'E-COMMERCE',
      description: 'Ecommerce de calzado el cual ofrece una amplia selección de zapatos de moda para todas las edades y estilos. desde zapatillas deportivas hasta elegantes tacones, con opciones de tallas y modelos.',
      date: 'octubre — 2022',
      image: stonersWeb,
      tools: 'WORDPRESS',
      urlWeb: 'https://stonersshoes.com',
      urlGit: '#',
    },
    {
      id: 'proyect_tech_io',
      title: 'TECH IO',
      subTitle: 'Landing',
      type: 'LANDING PAGE',
      description: 'En esta landing page, comparto mi pasión por el desarrollo de páginas web donde plasmo mis habilidades en el desarrollo de páginas web. Desde el diseño hasta la programación con las siguientes herramientas.',
      date: 'octubre — 2022',
      image: landingPageBootstrapWeb,
      tools: 'BOOTSTRAP 5',
      urlWeb: 'https://landing-page-with-bootstrap5-techpro.vercel.app',
      urlGit: 'https://github.com/juanjosepro/landing-page-with-bootstrap5-techpro#readme',
    },
    {
      id: 'proyect_papper_dove',
      title: 'PAPPER DOVE',
      subTitle: 'Salas de Chat',
      type: 'Salas de Chat',
      description: 'Esta aplicación te conecta con personas de todo el mundo en tiempo real, Con conversaciones sobre tus temas favoritos. Con una interfaz fácil de usar, En esta aplicacion plasmo mi experiencia en el desarrollo de aplicaciones web.',
      date: 'octubre — 2022',
      image: paperDoveApp,
      tools: 'JAVASCRIPT | VUE | TAILWIND',
      urlWeb: 'https://vue-chat-52dd6.web.app',
      urlGit: 'https://github.com/juanjosepro/paper-dove#readme',
    },
    {
      id: 'proyect_bootstrap_io',
      title: 'BOOTSTRAP IO',
      subTitle: 'Landing',
      type: 'LANDING PAGE',
      description: 'En esta landing page, comparto mi pasión por el desarrollo de páginas web donde plasmo mis habilidades en el desarrollo de páginas web. Desde el diseño hasta la programación con las siguientes herramientas.',
      date: 'octubre — 2022',
      image: shoeStoreWeb,
      tools: 'HTML | CSS | SASS',
      urlWeb: 'https://shoe-store-blue.vercel.app/',
      urlGit: 'https://github.com/juanjosepro/web-shoe-store#readme',
    },
  ]

  let projectSelected = projects[0];

  onMount(() => {
    const screenshot = document.querySelector('.project__screenshot');
    const image = document.querySelector('.image');
    const elements = document.querySelectorAll('.animate-focus-in-blur-out');

    screenshot.classList.add('circle-animate-rotate')
    image.classList.add('image-animate-rotate')

    elements.forEach(element => {
      element.classList.add('focus-in-expand');
    });
  });

  function onclicksplide(project, splide) {
    const screenshot = document.querySelector('.project__screenshot');
    const image = document.querySelector('.image');
    const details = document.querySelector('.project__details');
    const elements = document.querySelectorAll('.animate-focus-in-blur-out');
    const splides = document.querySelectorAll('.splide__slide');
    const splideActive = document.querySelector('.'+splide);

    if (screenshot.classList.contains('circle-animate-rotate')) {  
      screenshot.classList.remove('circle-animate-rotate')
      image.classList.remove('image-animate-rotate')

      screenshot.classList.add('circle-rotate-exit')
      image.classList.add('image-rotate-exit')
    }

    screenshot.offsetHeight
    image.offsetHeight

    elements.forEach(element => {
      element.classList.remove('focus-in-expand');
      element.classList.add('blur-out-contract');
    });

    splides.forEach(element => {
      if (element.classList.contains('is-active')) {
        element.classList.remove('is-active');
      }
    });

    splideActive.classList.add('is-active')

    setTimeout(() => {
      screenshot.classList.remove('circle-rotate-exit')
      image.classList.remove('image-rotate-exit')
      screenshot.classList.add('circle-animate-rotate')
      image.classList.add('image-animate-rotate')
      details.classList.remove('fade-in-bottom')
      
      details.offsetHeight
      details.classList.add('fade-in-bottom');

      projectSelected = project;
    }, 500);
    
    setTimeout(() => {
      elements.forEach(element => {
        element.classList.remove('blur-out-contract');
        element.classList.add('focus-in-expand');
      });

      /* Check button like active or not */
      const el = document.querySelector(`.like-${projectSelected.id}`)
      if (localStorage.getItem(`like-${projectSelected.id}`)) {
        el.classList.add('liked_project')
      } else {
        el.classList.remove('liked_project')
      }
    }, 1000)

  }

  function firstWordUppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  function sendEventLike(id) {
    const el = document.querySelector(`.like-${id}`)
    localStorage.setItem(`like-${id}`, true)
    
    dataLayer.push({
      event: "click project like",
      name: id,
    })

    setTimeout(() => {
      if (localStorage.getItem(`like-${id}`)) {
        el.classList.add('liked_project')
      } else {
        el.classList.remove('liked_project')
      }
    }, 500);

  }
</script>

<section class="project relative md:mb-24">
  <div class="container mx-auto px-6 pt-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
      { #each projects as project, i }
      <div class="p-3">
        <img class="image mb-3 box-shadow-0 rounded-lg block" src={project.image} alt="{project.title}">
        <h4 class="font-manrope font-normal text-xs text-gray-500 dark:text-gray-200 uppercase mb-1">{ project.date }</h4>
        <a href="{ project.urlWeb }" target="_blank" class="flex gap-1 items-center mb-1">
          <h3 class="animate-focus-in-blur-out font-poppins text-gray-700 dark:text-white font-extrabold text-base">
            {project.subTitle} — { project.title }
          </h3>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg> -->
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
        </a>
        <p class="text-sm font-manrope font-normal text-gray-500 dark:text-gray-200 mb-4">{ project.description }</p>
        <div class="flex items-center mb-4">
          <a href={projectSelected.urlWeb} target="_blank" class="flex gap-1 items-center mr-6 dark:text-gray-200 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
            
            <span class="font-manrope text-sm text-gray-700 dark:text-gray-200 font-medium">Ver demo</span>
          </a>
          <a href={projectSelected.urlGit} target="_blank" class="flex gap-1 items-center dark:text-gray-200 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
            
            <span class="font-manrope text-sm text-gray-700 dark:text-gray-200 font-medium">Ver repositorio</span>
          </a>
        </div>

        <div class="flex gap-1">
          { #each project.tools.split("|") as tool }
          <button class="py-1 px-2.5 border-none rounded-xl bg-[#00ff7e1f] text-xs text-green-500 font-bold capitalize">{ firstWordUppercase(tool) }</button>
          { /each }
        </div>
      </div>
      { /each }
    </div>
  </div>
</section>

<style lang="scss">
  .box-shadow-0 {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
</style>