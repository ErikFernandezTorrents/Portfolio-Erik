import { Job } from '../components/Experience'
import { Skill } from '../components/Skills'
import { Aboutme } from '../components/About'

export const experience: Job[] = [
  {
    company: 'Golmar Sistemas de Comunicación',
    role: 'Desarrollador Web (Fullstack)',
    period: '2025 - Actualidad',
    tasks: [
      'Desempeño como Full Stack Developer en el desarrollo de aplicaciones web internas y orientadas al usuario final.',
      'Desarrollo Front End con React y Astro, aplicando buenas prácticas de rendimiento, accesibilidad y optimización SEO.',
      'Implementación de Back End y APIs con Laravel, incluyendo sistemas de autenticación, autorización y gestión de roles.',
      'Gestión y modelado de bases de datos MySQL, garantizando integridad y eficiencia en el acceso a la información.',
      'Integración y consumo de APIs internas y de terceros para la comunicación con servicios externos.',
      'Colaboración con los equipos de diseño y marketing para transformar requisitos visuales y funcionales en soluciones técnicas.',
      'Gestión de código mediante GitHub y organización de tareas y tickets a través de Microsoft Teams (Tasks/Planner).',
    ],
    technologies: [
      'React',
      'Astro',
      'Laravel',
      'MySQL',
      'REST APIs',
      'GitHub',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Microsoft Teams',
    ],
  },
  {
    company: 'Audax Renovables',
    role: 'Desarrollador Web (Fullstack)',
    period: '2024 - 2025',
    tasks: [
      'Gestión de errores y feedback funcional recibido por parte de trabajadores de distintos departamentos, aplicando soluciones rápidas y eficientes.',
      'Desarrollo de aplicaciones internas utilizando Angular, PHP, Java y servicios en la nube con Azure.',
      'Mejora de experiencia de usuario mediante componentes reutilizables y buenas prácticas de UI/UX.',
      'Integración con servicios REST y APIs internas.',
      'Colaboración bajo metodología SCRUM con los equipo de QA.',
    ],
    technologies: [
      'Angular',
      'PHP',
      'Java',
      'Azure',
      'REST APIs',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
    ],
  },
  {
    company: 'Brainful-Labs S.L.',
    role: 'Desarrollador Web (Frontend)',
    period: '2023 - 2024',
    tasks: [
      'Desarrollo de aplicaciones web para organizaciones de IA y machine learning como ECML-PKDD, EURAI e IJCAI.',
      'Enfoque en el front-end con React y Next.js.',
      'Colaboración con equipos de diseño y backend.',
      'Aplicación de metodologías ágiles y entregas continuas.',
    ],
    technologies: [
      'React',
      'Next.js',
      'JavaScript',
      'HTML',
      'CSS',
    ],
  },
  {
    company: 'Global Digital Business',
    role: 'Desarrollador Web (Fullstack)',
    period: '2022 - 2023',
    tasks: [
      'Desarrollo de módulos para tiendas online con PrestaShop.',
      'Mejora de funcionalidades y rendimiento con PHP y JavaScript.',
      'Colaboración en integraciones con backend y diseño.',
      'Aseguramiento de calidad mediante desarrollo ágil.',
    ],
    technologies: [
      'PrestaShop',
      'PHP',
      'JavaScript',
      'HTML',
      'CSS',
      'MySQL',
    ],
  },
];


export const skills: Skill[] = [
{ name: 'JavaScript', icon: '../icons/javascript.svg' },
{ name: 'React', icon: '../icons/react.svg' },
{ name: 'Angular', icon: '../icons/angular.svg' },
{ name: 'Next.js', icon: '../icons/next.svg' },
{ name: 'HTML5', icon: '../icons/html.svg' },
{ name: 'CSS3', icon: '../icons/css3.svg' },
{ name: 'PHP', icon: '../icons/php.svg' },
{ name: 'Laravel', icon: '../icons/laravel.svg' },
{ name: 'Java', icon: '../icons/java.svg' },
{ name: 'MySQL', icon: '../icons/mysql.svg' },
{ name: 'Docker', icon: '../icons/docker.svg' },
{ name: 'Azure', icon: '../icons/azure.svg' },
{ name: 'Git', icon: '../icons/git.svg' },
{ name: 'GitHub', icon: '../icons/github.svg' },
];

export const aboutme: Aboutme[] = [
  {
    text: (
      <>
        Me llamo Erik y soy <span className="text-indigo-400">desarrollador web</span> con experiencia creando soluciones digitales tanto en <span className="text-indigo-400">frontend</span> como en <span className="text-indigo-400">backend</span>. He trabajado principalmente con <span className="text-indigo-400">React</span>, <span className="text-indigo-400">JavaScript</span>, <span className="text-indigo-400">Java</span> y <span className="text-indigo-400">PHP</span>, y tengo base en Angular y servicios cloud como Azure.
      </>
    ),
  },
  {
    text: (
      <>
        Me apasiona desarrollar interfaces modernas, cuidar el <span className="text-indigo-400">rendimiento</span> y mantener una <span className="text-indigo-400">estética sólida</span>. Actualmente trabajo en <span className="text-indigo-400">Golmar Sistemas de Comunicación</span> como fullstack, abierto a nuevos retos para <span className="text-indigo-400">aportar valor</span> y <span className="text-indigo-400">crecer profesionalmente</span>.
      </>
    ),
  },
  {
    text: (
      <>
        Me considero <span className="text-indigo-400">resolutivo</span>, <span className="text-indigo-400">autodidacta</span> y con capacidad de <span className="text-indigo-400">trabajo en equipo</span>. Disfruto aprendiendo y mejorando procesos para entregar productos digitales de calidad.
      </>
    ),
  },
  {
    text: (
      <>
        Si buscas a alguien con <span className="text-indigo-400">habilidades técnicas</span> y <span className="text-indigo-400">actitud proactiva</span>, será un placer <span className="text-indigo-400">conectar</span>.
      </>
    ),
  },
];