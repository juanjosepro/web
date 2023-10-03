<script>
  import { onMount } from 'svelte';
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  import shoeApp from '../assets/screenshots/shoe-app.png';
  import hotelHero from '../assets/screenshots/hotel-hero.png';
  import apiHotelHero from '../assets/screenshots/api-hotel-app.png';
  import stonersWeb from '../assets/screenshots/stoners-web.png';
  import landingPageBootstrapWeb from '../assets/screenshots/landing-page-with-bootstrap5-web.png';
  import paperDoveApp from '../assets/screenshots/paper-dove-app.png';
  import shoeStoreWeb from '../assets/screenshots/shoe-store-web.png';

  const projects = [
    {
      id: 'proyect_hotelhero_front',
      title: 'HOTEL HERO',
      subTitle: 'Gestion Hotelera',
      type: 'APLICACIÓN WEB',
      description: 'Esta aplicación simplifica la administración de habitaciones, el registro de huéspedes, un control eficiente sobre el estado de las habitaciones, reservas y las tarifas. Con roles para administradores y recepcionistas.',
      date: 'octubre del 2022',
      image: hotelHero,
      tools: 'JAVASCRIPT | VUE | VUETIFY',
      urlWeb: 'https://hotel.juanjosepau.dev',
      urlGit: 'https://github.com/juanjosepro/hotel-hero#readme',
    },
    {
      id: 'proyect_hotelhero_api',
      title: 'HOTEL HERO API',
      subTitle: 'Gestion Hotelera',
      type: 'API REST',
      description: 'La API de gestión hotelera esta diseñada para ofrecer acceso y control a las funciones clave de la aplicación de gestión hotelera. Con esta API, Facilita la sincronización de datos y la automatización de procesos.',
      date: 'octubre del 2022',
      image: apiHotelHero,
      tools: 'PHP | LARAVEL',
      urlWeb: 'https://api.hotel.juanjosepau.dev',
      urlGit: 'https://github.com/juanjosepro/api-hotel-hero#readme',
    },
    {
      id: 'proyect_nikfort',
      title: 'NIK FORT',
      subTitle: 'Gestion de calzado',
      type: 'Aplicación web',
      description: 'Esta aplicación es una poderosa herramienta diseñada para optimizar la gestión de productos en la industria del calzado el cual se centra en gestionar  el inventario, productos, tallas y modelos de manera eficiente.',
      date: 'octubre del 2022',
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
      date: 'octubre del 2022',
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
      date: 'octubre del 2022',
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
      date: 'octubre del 2022',
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
      date: 'octubre del 2022',
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
  <div class="relative container mx-auto h-[870px] px-6 pt-12 md:h-[700px] lg:h-screen md:mb-0 lg:mb-0">
    <!-- Image main -->
    <div class="project__screenshot" id="projectScreenshot">
      <img class="image" src={projectSelected.image} alt="">
    </div>
  
    <!-- Details project -->
    <div class="project__content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_1fr]">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="absolute -right-0 top-20 w-96 hidden lg:block" style="filter: blur(130px)">
        <path fill="#0F62FE" d="M17.8,-30.2C28,-25,44.5,-30.1,52.9,-26.8C61.3,-23.5,61.5,-11.7,61.3,-0.1C61.1,11.5,60.4,23,55.7,32.7C51,42.4,42.3,50.3,32.3,48.3C22.4,46.3,11.2,34.4,3.5,28.3C-4.2,22.3,-8.5,22.2,-17.4,23.5C-26.3,24.9,-39.8,27.9,-41.7,24.2C-43.5,20.6,-33.7,10.3,-38.9,-3C-44.1,-16.3,-64.4,-32.6,-63.7,-38.3C-63,-43.9,-41.3,-38.9,-27.1,-41.8C-13,-44.7,-6.5,-55.6,-1.3,-53.3C3.8,-51,7.6,-35.4,17.8,-30.2Z" transform="translate(100 100)" />
      </svg>
      <div class="relative w-4/5 mx-auto mb-5 md:flex md:items-end md:w-auto lg:justify-end lg:items-start lg:w-full hidden">
        <div class="project__main relative lg:w-96 lg:pt-6">
          <h2 class="animate-focus-in-blur-out font-poppins text-gray-700 dark:text-gray-200 font-extralight text-4xl">{projectSelected.subTitle}</h2>
          <h2 class="animate-focus-in-blur-out font-poppins text-gray-700 dark:text-white font-extrabold text-6xl">{projectSelected.title}</h2>
          <div class="flex items-center mt-10">
            <a href={projectSelected.urlWeb} target="_blank" class="see_demo flex gap-1 items-center underline decoration-gray-400 mr-12 dark:text-gray-200 underline-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>         
              
              <span class="font-manrope text-sm text-gray-700 font-medium dark:text-gray-200">Ver demo</span>
            </a>
            <a href={projectSelected.urlGit} target="_blank" class="see_repo flex gap-1 items-center underline decoration-gray-400 dark:text-gray-200 underline-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 dark:text-gray-200" viewBox="0 0 512 512">
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
              </svg>
              <span class="font-manrope text-sm text-gray-700 font-medium dark:text-gray-200">Ver repositorio</span>
            </a>
          </div>
        </div>
      </div>

      <div class="relative w-11/12 mx-auto flex justify-center">
        <div class="project__details fade-in-bottom p-6 rounded-lg flex flex-col gap-2 bg-white dark:bg-stone-800 md:h-96">
          <h3 class="font-manrope font-light text-gray-500 dark:text-gray-200 hidden md:block">#Detalles</h3>
          <h3 class="font-manrope text-sm font-medium text-gray-700 dark:text-white block md:hidden">#{projectSelected.subTitle}</h3>

          <h2 class="font-poppins font-bold text-xl uppercase text-gray-900 dark:text-gray-200 hidden md:block">{projectSelected.subTitle}</h2>
          <h2 class="font-poppins text-lg md:text-xl font-normal leading-none block md:hidden dark:text-gray-200 mb-1">{projectSelected.type} <strong class="font-bold">{projectSelected.title}</strong></h2>
          <small class="font-manrope font-light text-gray-900 dark:text-gray-200">{projectSelected.date}</small>
          <p class="text-sm font-manrope font-normal text-gray-600 dark:text-gray-200 mb-2">{projectSelected.description}</p>
          <small class="font-manrope text-gray-800 dark:text-gray-200 mb-2 sm:mb-1">{projectSelected.tools}</small>
          <div class="flex items-center md:hidden mb-3 sm:mb-1">
            <a href={projectSelected.urlWeb} class="flex gap-1 items-center mr-6 dark:text-gray-200 underline decoration-gray-400 underline-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
              
              <span class="font-manrope text-xs text-gray-700 dark:text-gray-200 font-medium ">Ver demo</span>
            </a>
            <a href={projectSelected.urlGit} class="flex gap-1 items-center underline dark:text-gray-200 decoration-gray-400 underline-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 dark:text-gray-200" viewBox="0 0 512 512">
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
              </svg>
              <span class="font-manrope text-xs text-gray-700 dark:text-gray-200 font-medium">Ver repositorio</span>
            </a>
          </div>
          <svg on:click={sendEventLike(projectSelected.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="{`w-6 h-6 text-gray-700 dark:text-gray-200 cursor-pointer like-${projectSelected.id}`}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
          </svg>
        </div>
      </div>
    </div>
  
    <!-- list projects -->
    <div class="project__list fade-in-bottom absolute left-0 bottom-9 w-full lg:left-24 lg:w-3/5">
      <Splide aria-label="My Favorite Images" options={{
        perPage: 4,
        perMove: 3,
        rewind: true,
        arrows:  true,
        pagination: true,
        gap   : '1rem',
        // focus  : 'center',
        breakpoints: {
          768: {
            perPage: 2,
            perMove: 1,
          }
        }
      }}>
        {#each projects as project, i}
        <SplideSlide class="{'splide' + i}">
          <div on:click={() => onclicksplide(project, 'splide'+i)} class="project_item">
            <img src={project.image} alt={project.title} class="w-48 h-20 rounded mb-2 transition-all">
            <small class="font-poppins font-extralight text-center text-xs dark:text-gray-200">{firstWordUppercase(project.subTitle)}</small>
          </div>
        </SplideSlide>
        {/each}
      </Splide>
    </div>
  </div>
</section>

<style lang="scss">
  .project {
    overflow: hidden;
  }

  .project__screenshot {
    width: 700px;
    height: 700px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-60%);

    @media (min-width: 640px) {
      top: -40%;
      left: -25%;
      transform: none;
    }
  }

  .project__screenshot::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, hsla(138, 99%, 44%, 0.82), rgba(235, 229, 219, 0.89));
    border-radius: 50%;
    box-sizing: border-box;
    opacity: 0.3;
  }

  .project__screenshot::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: calc(100% - 160px);
    height: calc(100% - 160px);
    background: white;
    @apply dark:bg-stone-900;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .project__screenshot img {
    width: 300px;
    height: 180px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%);
    box-shadow: rgba(56, 58, 59, 0.2) 0px 8px 24px;
    opacity: 1;
    z-index: 1;
    border-radius: 8px;

    @media (min-width: 640px) {
      width: 340px;
      height: 220px;
    }
  }

  .project__content{
    @media (max-width: 640px) {
      position: absolute;
      top: 260px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
    }
  }

  .project__details {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    @apply dark:shadow-none;
  }

  .liked_project {
    fill: hsla(138, 99%, 44%, 0.82);
    color: hsla(138, 99%, 44%, 0.82)
  }
</style>