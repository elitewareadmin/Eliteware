/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_DMIMG1Y7.mjs';
import 'kleur/colors';
import { $ as $$Button } from '../chunks/Button_DjtcrgC6.mjs';
import { $ as $$Layout } from '../chunks/Layout_Clac3qTV.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const TeamMembers = [
  {
    name: "José Julián Calvo Lopesino",
    position: "CEO y Fundador",
    bio: "Visionario tecnológico con más de 20 años de experiencia liderando proyectos de transformación digital. José Julián combina su profundo conocimiento técnico con una visión estratégica única para impulsar la innovación y el crecimiento.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Aida Manzanero Calvo",
    position: "CCO",
    bio: "Experta en estrategia comercial y desarrollo de negocio con amplia experiencia en el sector tecnológico. Aida lidera las iniciativas comerciales y de expansión de Elite Ware, forjando alianzas estratégicas clave.",
    image: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Laura Sánchez",
    position: "Directora de Innovación",
    bio: "Experta en experiencias inmersivas y metaverso con background en diseño UX y psicología cognitiva. Laura ha trabajado en el desarrollo de entornos virtuales para marcas globales y proyectos educativos.",
    image: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Jarvis Huice",
    position: "Desarrolador full-stack",
    bio: "Experta en experiencias inmersivas y metaverso con background en diseño UX y psicología cognitiva. Laura ha trabajado en el desarrollo de entornos virtuales para marcas globales y proyectos educativos.",
    image: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

const Values = [
  {
    title: "Innovación Constante",
    description: "Buscamos permanentemente nuevas formas de aplicar la tecnología para resolver problemas complejos y crear valor diferencial.",
    icon: "lightbulb"
  },
  {
    title: "Excelencia Técnica",
    description: "Nos comprometemos con los más altos estándares de calidad en todo lo que hacemos, desde el diseño hasta la implementación.",
    icon: "badge"
  },
  {
    title: "Enfoque Humano",
    description: "Creemos que la tecnología debe estar al servicio de las personas, mejorando vidas y facilitando conexiones significativas.",
    icon: "users"
  },
  {
    title: "Colaboración",
    description: "Trabajamos estrechamente con nuestros clientes, convirtiéndonos en socios estratégicos comprometidos con su éxito.",
    icon: "handshake"
  },
  {
    title: "Impacto Positivo",
    description: "Buscamos que nuestras soluciones generen un impacto positivo en la sociedad y contribuyan a un futuro más sostenible.",
    icon: "earth"
  },
  {
    title: "Aprendizaje Continuo",
    description: "Cultivamos una cultura de curiosidad y mejora constante, manteniéndonos a la vanguardia de las nuevas tecnologías.",
    icon: "book"
  }
];

const getIcon = (icon) => {
  switch (icon) {
    case "lightbulb":
      return ` <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>`;
    case "badge":
      return `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>`;
    case "users":
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>`;
    case "handshake":
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>`;
    case "earth":
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`;
    case "book":
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>`;
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>`;
  }
};

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nosotros - Elite Ware", "data-astro-cid-noeej2nj": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="pt-32 pb-20 bg-gradient-to-b from-dark-900 to-dark-800" data-astro-cid-noeej2nj> <div class="container mx-auto px-4 md:px-8" data-astro-cid-noeej2nj> <div class="max-w-3xl mx-auto text-center" data-astro-cid-noeej2nj> <h1 class="font-display text-4xl md:text-6xl font-bold text-white mb-6" data-astro-cid-noeej2nj>
Nosotros
</h1> <p class="text-lg text-dark-200 mb-10" data-astro-cid-noeej2nj>
Conoce quiénes somos, nuestra misión y los valores que guían nuestro
          trabajo diario.
</p> </div> </div> </section>  <section class="py-20 bg-white dark:bg-dark-800" data-astro-cid-noeej2nj> <div class="container mx-auto px-4 md:px-8" data-astro-cid-noeej2nj> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-astro-cid-noeej2nj> <!-- Content --> <div data-astro-cid-noeej2nj> <h2 class="font-display text-3xl md:text-4xl font-bold mb-6" data-astro-cid-noeej2nj>
Nuestra Historia
</h2> <div class="space-y-4 text-dark-500 dark:text-dark-200" data-astro-cid-noeej2nj> <p data-astro-cid-noeej2nj>
Elite Ware nació en 2018 con una visión clara: convertirse en un
              referente en la aplicación de tecnologías emergentes para
              transformar negocios y crear experiencias digitales
              extraordinarias.
</p> <p data-astro-cid-noeej2nj>
Fundada por un equipo de expertos en tecnología con amplia
              experiencia en empresas líderes del sector, Elite Ware ha crecido
              rápidamente hasta consolidarse como una consultora tecnológica de
              vanguardia especializada en inteligencia artificial, metaverso y
              desarrollo de software disruptivo.
</p> <p data-astro-cid-noeej2nj>
Hoy, nuestro equipo multidisciplinar trabaja con clientes de
              diversos sectores, desde startups innovadoras hasta grandes
              corporaciones, ayudándoles a navegar el complejo paisaje
              tecnológico actual y a implementar soluciones que les permitan
              destacar en la era digital.
</p> </div> <div class="mt-8" data-astro-cid-noeej2nj> ${renderComponent($$result2, "Button", $$Button, { "href": "/contacto", "variant": "primary", "data-astro-cid-noeej2nj": true }, { "default": ($$result3) => renderTemplate`
Trabaja con nosotros
` })} </div> </div> <!-- Image --> <div class="relative rounded-xl overflow-hidden shadow-xl" data-astro-cid-noeej2nj> <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Equipo de Elite Ware" class="w-full h-full object-cover" data-astro-cid-noeej2nj> </div> </div> </div> </section>  <section class="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white" data-astro-cid-noeej2nj> <div class="container mx-auto px-4 md:px-8" data-astro-cid-noeej2nj> <div class="grid grid-cols-1 md:grid-cols-2 gap-12" data-astro-cid-noeej2nj> <!-- Mission --> <div class="bg-white/10 backdrop-blur-md p-8 rounded-xl" data-astro-cid-noeej2nj> <h3 class="font-display text-2xl font-bold mb-4" data-astro-cid-noeej2nj>Nuestra Misión</h3> <p class="text-lg" data-astro-cid-noeej2nj>
Potenciar el éxito de nuestros clientes a través de soluciones
            tecnológicas innovadoras que transformen sus negocios, mejoren sus
            operaciones y les permitan crear experiencias digitales
            excepcionales para sus usuarios.
</p> </div> <!-- Vision --> <div class="bg-white/10 backdrop-blur-md p-8 rounded-xl" data-astro-cid-noeej2nj> <h3 class="font-display text-2xl font-bold mb-4" data-astro-cid-noeej2nj>Nuestra Visión</h3> <p class="text-lg" data-astro-cid-noeej2nj>
Ser reconocidos globalmente como líderes en la aplicación de
            tecnologías emergentes para resolver desafíos empresariales
            complejos y crear un futuro digital más inteligente, conectado y
            centrado en las personas.
</p> </div> </div> </div> </section>  <section class="py-20 bg-gray-50 dark:bg-dark-700" data-astro-cid-noeej2nj> <div class="container mx-auto px-4 md:px-8" data-astro-cid-noeej2nj> <div class="text-center mb-16" data-astro-cid-noeej2nj> <h2 class="font-display text-3xl md:text-4xl font-bold mb-6" data-astro-cid-noeej2nj>
Nuestros Valores
</h2> <p class="text-lg text-dark-500 dark:text-dark-200 max-w-3xl mx-auto" data-astro-cid-noeej2nj>
Estos principios fundamentales guían todas nuestras decisiones y
          acciones, definiendo quiénes somos como empresa y cómo trabajamos.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-noeej2nj> ${Values.map((value) => renderTemplate`<div class="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-lg dark:shadow-accent-500/5" data-astro-cid-noeej2nj> <div class="text-primary-500 mb-4" data-astro-cid-noeej2nj>${unescapeHTML(getIcon(value.icon))}</div> <h3 class="font-display text-xl font-bold mb-3" data-astro-cid-noeej2nj>${value.title}</h3> <p class="text-dark-500 dark:text-dark-300" data-astro-cid-noeej2nj> ${value.description} </p> </div>`)} </div> </div> </section>  <section class="py-20 bg-white dark:bg-dark-800" data-astro-cid-noeej2nj> <div class="container mx-auto px-4 md:px-8" data-astro-cid-noeej2nj> <div class="text-center mb-16" data-astro-cid-noeej2nj> <h2 class="font-display text-3xl md:text-4xl font-bold mb-6" data-astro-cid-noeej2nj>
Nuestro Equipo
</h2> <p class="text-lg text-dark-500 dark:text-dark-200 max-w-3xl mx-auto" data-astro-cid-noeej2nj>
Contamos con un equipo multidisciplinar de expertos apasionados por la
          tecnología y la innovación.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-noeej2nj> ${TeamMembers.map((member) => renderTemplate`<div class="team-member group relative" data-astro-cid-noeej2nj>  <div class="relative mb-6 overflow-hidden rounded-xl" style="aspect-ratio: 3/4;" data-astro-cid-noeej2nj> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-astro-cid-noeej2nj>  <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" data-astro-cid-noeej2nj></div>  <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0" data-astro-cid-noeej2nj> ${member.social.linkedin && renderTemplate`<a${addAttribute(member.social.linkedin, "href")} class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-dark-800 hover:bg-primary-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"${addAttribute(`LinkedIn de ${member.name}`, "aria-label")} data-astro-cid-noeej2nj>  </a>`} ${member.social.twitter && renderTemplate`<a${addAttribute(member.social.twitter, "href")} class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-dark-800 hover:bg-primary-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"${addAttribute(`Twitter de ${member.name}`, "aria-label")} data-astro-cid-noeej2nj>  </a>`} ${member.social.github && renderTemplate`<a${addAttribute(member.social.github, "href")} class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-dark-800 hover:bg-primary-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"${addAttribute(`GitHub de ${member.name}`, "aria-label")} data-astro-cid-noeej2nj>  </a>`} </div> </div> <!-- Content --> <h3 class="font-display text-xl font-bold mb-1" data-astro-cid-noeej2nj>${member.name}</h3> <p class="text-primary-500 font-medium mb-3" data-astro-cid-noeej2nj>${member.position}</p> <p class="text-dark-500 dark:text-dark-300 text-sm" data-astro-cid-noeej2nj>${member.bio}</p> </div>`)} </div> <!-- CTA Section --> <section class="py-20 bg-dark-900 text-white" data-astro-cid-noeej2nj> <div class="container mx-auto px-4 md:px-8 text-center" data-astro-cid-noeej2nj> <h2 class="font-display text-3xl md:text-4xl font-bold mb-6" data-astro-cid-noeej2nj>
¿Quieres unirte a nuestro equipo?
</h2> <p class="text-xl text-dark-200 max-w-2xl mx-auto mb-10" data-astro-cid-noeej2nj>
Estamos en constante búsqueda de talento apasionado por la
            tecnología y la innovación. Explora nuestras oportunidades
            profesionales.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/contacto", "variant": "primary", "size": "lg", "data-astro-cid-noeej2nj": true }, { "default": ($$result3) => renderTemplate`
Ver oportunidades
` })} </div> </section> </div>   </section>` })}`;
}, "C:/Users/user/Documents/EliteWare/Eliteware/src/pages/nosotros.astro", void 0);

const $$file = "C:/Users/user/Documents/EliteWare/Eliteware/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
