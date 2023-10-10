import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  phone,
  microverse,
  web,
  card,
  monitoreo,
  routes
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Servicios',
  },
  {
    id: 'projects',
    title: 'BUSES',
  },
  {
    id: 'contact',
    title: 'Contactanos',
  },
];

const services = [
  {
    title: 'Monitoreo en Tiempo Real',
    
  },
  {
    title: 'Horarios y Rutas',
    
  },
  {
    title: 'Compra de Boletos en Línea',
    
  },
  {
    title: 'Atención al Cliente',
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Descargar la Aplicación o Web',
    company_name: 'Dirigete a la tienda de aplicaciones de tu dispositivo movil y busca nuestra aplicacion Descargala e instalala en tu dispositivo',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Paso 1',
  },
  {
    title: 'Registro o Inicio de Sesión',
    company_name: 'Al abrir la aplicacion por primera vez es posible que debas registrarte con tus datos personales como nombre direccion de correo electronico y clave Si ya tienes una cuenta simplemente inicia sesion con tu informacion',
    icon: microverse,
    iconBg: '#333333',
    date: 'Paso 2',
  },
  {
    title: 'Selecciona una Ruta o un Servicio',
    company_name: 'Para planificar un viaje selecciona una ruta o un servicio de autobus Puedes buscar rutas por nombre numero o ubicación segun la funcion de la aplicacion',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Paso 3',
  },
  {
    title: 'Compra de Boletos (si es necesario)',
    company_name: 'Si deseas comprar boletos para tu viaje, selecciona la opcion correspondiente y sigue las indicaciones para realizar la compra de forma segura',
    icon: dcc,
    iconBg: '#333333',
    date: 'Paso 4',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Aplicacion Movil',
    description: 'Nuestra aplicación móvil es la solución definitiva para simplificar y mejorar tu experiencia de viaje en autobús. Con esta aplicación, puedes acceder a una variedad de servicios y características diseñados para hacerte la vida más fácil mientras te desplazas. ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: phone,
    repo: '/registrar',
    demo: '/registrar',
  },
  {
    id: 'project-2',
    name: 'Aplicacion Web',
    description:
      'Nuestra aplicación web es la herramienta esencial que necesitas para gestionar tus viajes en autobús de manera más eficiente y sin complicaciones. Con un diseño intuitivo y fácil de usar, esta plataforma te ofrece una experiencia de usuario excepcional. ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: web,
    repo: '/registrar',
    demo: '/registrar',
  },
  {
    id: 'project-3',
    name: 'Tarjetas Prepago',
    description: 'En el uso de nuestro sistema, la tarjeta prepago se convierte en tu aliada para una gestión financiera efectiva y sin complicaciones. Con nuestra plataforma, puedes cargar fondos en tu tarjeta prepago de manera rápida y segura, lo que te permite tener un control total sobre tus gastos. ',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: card,
    repo: '/registrar',
    demo: '/registrar',
  },
  {
    id: 'project-4',
    name: 'Monitoreo',
    description: `El monitoreo en tiempo real es una función esencial de nuestro sistema que te proporciona información instantánea y actualizada sobre eventos, actividades o datos específicos en un momento dado. Con esta capacidad, puedes seguir de cerca y observar lo que está ocurriendo en tiempo real, sin ningún retraso o demora.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: monitoreo,
    repo: '/registrar',
    demo: '/registrar',
  },
  {
    id: 'project-5',
    name: 'Rutas',
    description:
      'Las rutas, en el contexto de nuestra aplicación, son itinerarios predefinidos y planificados que te guían desde un punto de origen hasta un destino específico a través de un sistema de transporte, en este caso, autobuses. Nuestra aplicación ofrece información detallada sobre las rutas disponibles, lo que te permite explorar y seleccionar la mejor opción para tu viaje.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: routes,
    repo: '/registrar',
    demo: '/registrar',
  },
];

export { services, technologies, experiences, projects };
