/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_DMIMG1Y7.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Clac3qTV.mjs';
import { $ as $$Button } from '../chunks/Button_DjtcrgC6.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      id: "ia",
      title: "Inteligencia Artificial",
      subtitle: "Soluciones avanzadas de IA para optimizar procesos",
      description: [
        "Nuestras soluciones de Inteligencia Artificial est\xE1n dise\xF1adas para transformar la forma en que tu empresa procesa y utiliza los datos, permiti\xE9ndote obtener insights valiosos, automatizar procesos complejos y tomar decisiones m\xE1s acertadas.",
        "Utilizamos los \xFAltimos avances en machine learning, deep learning y procesamiento del lenguaje natural para crear sistemas inteligentes adaptados a tus necesidades espec\xEDficas."
      ],
      icon: "brain",
      features: [
        "Sistemas predictivos y prescriptivos personalizados",
        "An\xE1lisis de datos masivos con algoritmos avanzados",
        "Reconocimiento de patrones y anomal\xEDas",
        "Procesamiento del lenguaje natural y an\xE1lisis de sentimiento",
        "Computer vision y reconocimiento de im\xE1genes",
        "Asistentes virtuales y chatbots inteligentes"
      ],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    },
    {
      id: "metaverso",
      title: "Metaverso",
      subtitle: "Experiencias inmersivas en entornos virtuales",
      description: [
        "Dise\xF1amos y desarrollamos experiencias inmersivas en el metaverso que permiten a tu marca crear conexiones significativas con tus clientes en entornos virtuales interactivos y visualmente impactantes.",
        "Desde showrooms virtuales hasta eventos y conferencias en 3D, creamos espacios digitales que rompen las barreras f\xEDsicas y ofrecen nuevas posibilidades de interacci\xF3n."
      ],
      icon: "vr",
      features: [
        "Dise\xF1o y desarrollo de espacios virtuales en 3D",
        "Experiencias inmersivas para VR y AR",
        "Eventos y conferencias en el metaverso",
        "Showrooms y tiendas virtuales interactivas",
        "Capacitaci\xF3n y formaci\xF3n en entornos virtuales",
        "Integraci\xF3n con blockchain y NFTs"
      ],
      image: "https://images.pexels.com/photos/8728556/pexels-photo-8728556.jpeg"
    },
    {
      id: "software",
      title: "Software Disruptivo",
      subtitle: "Desarrollo de aplicaciones innovadoras",
      description: [
        "Creamos software a medida que rompe con los paradigmas establecidos, utilizando arquitecturas modernas y tecnolog\xEDas de vanguardia para ofrecer soluciones que transforman la manera en que operas y te relacionas con tus clientes.",
        "Nuestro enfoque centrado en la innovaci\xF3n nos permite desarrollar aplicaciones que no solo resuelven problemas actuales, sino que tambi\xE9n se anticipan a las necesidades futuras."
      ],
      icon: "code",
      features: [
        "Desarrollo de aplicaciones web y m\xF3viles con arquitecturas modernas",
        "Microservicios y arquitecturas serverless",
        "Aplicaciones progresivas (PWA) de alto rendimiento",
        "Integraci\xF3n con IoT y dispositivos conectados",
        "Sistemas blockchain y contratos inteligentes",
        "APIs robustas y escalables"
      ],
      image: "https://images.pexels.com/photos/7989247/pexels-photo-7989247.jpeg"
    },
    {
      id: "consultoria",
      title: "Consultor\xEDa Tecnol\xF3gica",
      subtitle: "Asesoramiento estrat\xE9gico y hojas de ruta",
      description: [
        "Ofrecemos consultor\xEDa tecnol\xF3gica de alto nivel para ayudarte a definir y ejecutar tu estrategia digital, identificando oportunidades de innovaci\xF3n y optimizando tus procesos y sistemas actuales.",
        "Nuestro equipo de expertos te guiar\xE1 en cada etapa de tu transformaci\xF3n digital, desde la evaluaci\xF3n inicial hasta la implementaci\xF3n y medici\xF3n de resultados."
      ],
      icon: "chart",
      features: [
        "Auditor\xEDa y diagn\xF3stico tecnol\xF3gico",
        "Estrategia y hoja de ruta de transformaci\xF3n digital",
        "Asesoramiento en arquitectura de sistemas",
        "Optimizaci\xF3n de procesos mediante tecnolog\xEDa",
        "Evaluaci\xF3n y selecci\xF3n de proveedores tecnol\xF3gicos",
        "Formaci\xF3n y capacitaci\xF3n en nuevas tecnolog\xEDas"
      ],
      image: "https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg"
    }
  ];
  const getIcon = (icon) => {
    const icons = {
      brain: `<svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/>
      <path d="M14.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/>
      <path d="M3 15.5a7 7 0 0 1 7-7"/>
      <path d="M14 8.5a7 7 0 0 1 7 7"/>
      <path d="M9 15a1 1 0 0 0-1 1"/>
      <path d="M8 8a2 2 0 0 0-2 2"/>
      <path d="M18 11.5a3.5 3.5 0 0 0-3.5-3.5"/>
      <path d="M18.5 15.5a1 1 0 0 0-1-1"/>
      <path d="M17 17a2 2 0 0 0-2 2"/>
      <path d="M7 17.5a2.5 2.5 0 0 0 2.5 2.5"/>
      <path d="M12 16.5a2.5 2.5 0 0 0 2.5 2.5"/>
      <path d="M8 12.5a2.5 2.5 0 0 0 2.5 2.5"/>
      <path d="M13.5 15a2.5 2.5 0 0 0 2.5-2.5"/>
    </svg>`,
      vr: `<svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 12.5C2 10 4 8.5 7 8.5c3 0 5 1.5 5 4s-2 4-5 4-5-1.5-5-4z"/>
      <path d="M17 15.5c3 0 5-1.5 5-4s-2-4-5-4-5 1.5-5 4 2 4 5 4z"/>
      <path d="M19.5 8.5h-15"/>
      <path d="M19.5 15.5h-15"/>
    </svg>`,
      code: `<svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>`,
      chart: `<svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 3v18h18"/>
      <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      <path d="M6 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      <path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      <path d="M8.59 13.51l6.83 3.98"/>
      <path d="M15.41 6.51l-6.82 3.98"/>
    </svg>`
    };
    return icons[icon] || icons.brain;
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios - Elite Ware", "data-astro-cid-wrzvmyuk": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="pt-32 pb-20 bg-gradient-to-b from-dark-900 to-dark-800" data-astro-cid-wrzvmyuk> <div class="container mx-auto px-4 md:px-8" data-astro-cid-wrzvmyuk> <div class="max-w-3xl mx-auto text-center" data-astro-cid-wrzvmyuk> <h1 class="font-display text-4xl md:text-6xl font-bold text-white mb-6" data-astro-cid-wrzvmyuk>
Nuestros Servicios
</h1> <p class="text-lg text-dark-200 mb-10" data-astro-cid-wrzvmyuk>
Soluciones tecnológicas avanzadas diseñadas para transformar tu negocio y prepararlo para los retos del futuro digital.
</p> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-wrzvmyuk> ${services.map((service) => renderTemplate`<a${addAttribute(`#${service.id}`, "href")} class="bg-dark-700 hover:bg-dark-600 text-white px-5 py-2 rounded-full transition-all duration-300" data-astro-cid-wrzvmyuk> ${service.title} </a>`)} </div> </div> </div> </section>  ${services.map((service, index) => renderTemplate`<section${addAttribute(service.id, "id")}${addAttribute(`py-24 ${index % 2 === 0 ? "bg-white dark:bg-dark-800" : "bg-gray-50 dark:bg-dark-700"}`, "class")} data-astro-cid-wrzvmyuk> <div class="container mx-auto px-4 md:px-8" data-astro-cid-wrzvmyuk> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-astro-cid-wrzvmyuk> <!-- Content --> <div${addAttribute(`${index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}`, "class")} data-astro-cid-wrzvmyuk> <div class="mb-8" data-astro-cid-wrzvmyuk> <div class="inline-block p-3 rounded-xl bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 mb-6" data-astro-cid-wrzvmyuk> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(getIcon(service.icon))}` })} </div> <h2 class="font-display text-3xl md:text-4xl font-bold mb-4" data-astro-cid-wrzvmyuk> ${service.title} </h2> <p class="text-xl text-dark-500 dark:text-dark-200 mb-6" data-astro-cid-wrzvmyuk> ${service.subtitle} </p> ${service.description.map((paragraph) => renderTemplate`<p class="text-dark-500 dark:text-dark-300 mb-4" data-astro-cid-wrzvmyuk>${paragraph}</p>`)} </div> <!-- Features --> <div class="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg dark:shadow-accent-500/5" data-astro-cid-wrzvmyuk> <h3 class="font-display font-semibold text-lg mb-4" data-astro-cid-wrzvmyuk>Características Principales</h3> <ul class="space-y-3" data-astro-cid-wrzvmyuk> ${service.features.map((feature) => renderTemplate`<li class="flex items-start" data-astro-cid-wrzvmyuk> <svg class="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wrzvmyuk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-wrzvmyuk></path> </svg> <span data-astro-cid-wrzvmyuk>${feature}</span> </li>`)} </ul> </div> <!-- CTA --> <div class="mt-8" data-astro-cid-wrzvmyuk> ${renderComponent($$result2, "Button", $$Button, { "href": "/contacto", "variant": "primary", "size": "lg", "data-astro-cid-wrzvmyuk": true }, { "default": ($$result3) => renderTemplate`
Consultar sobre ${service.title}` })} </div> </div> <!-- Image --> <div${addAttribute(`${index % 2 === 0 ? "order-2" : "order-1 lg:order-1"}`, "class")} data-astro-cid-wrzvmyuk> <div class="relative rounded-xl overflow-hidden shadow-xl" data-astro-cid-wrzvmyuk> <div class="aspect-w-16 aspect-h-9" data-astro-cid-wrzvmyuk> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover" data-astro-cid-wrzvmyuk> </div> <!-- Overlay gradient --> <div class="absolute inset-0 bg-gradient-to-tr from-dark-900/50 to-transparent" data-astro-cid-wrzvmyuk></div> </div> </div> </div> </div> </section>`)} <section class="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white" data-astro-cid-wrzvmyuk> <div class="container mx-auto px-4 md:px-8 text-center" data-astro-cid-wrzvmyuk> <h2 class="font-display text-3xl md:text-4xl font-bold mb-6" data-astro-cid-wrzvmyuk>
¿Listo para transformar tu negocio?
</h2> <p class="text-xl opacity-90 max-w-2xl mx-auto mb-10" data-astro-cid-wrzvmyuk>
Contáctanos hoy mismo para discutir cómo nuestras soluciones tecnológicas pueden impulsar tu empresa hacia el futuro.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/contacto", "variant": "secondary", "size": "lg", "data-astro-cid-wrzvmyuk": true }, { "default": ($$result3) => renderTemplate`
Solicitar una consulta
` })} </div> </section> ` })}  `;
}, "C:/Users/user/Documents/EliteWare/Eliteware/src/pages/servicios.astro", void 0);

const $$file = "C:/Users/user/Documents/EliteWare/Eliteware/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
