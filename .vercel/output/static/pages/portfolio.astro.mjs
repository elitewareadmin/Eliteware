/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DMIMG1Y7.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Clac3qTV.mjs';
import { $ as $$Button } from '../chunks/Button_DjtcrgC6.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      id: "quantum-ai",
      title: "Quantum AI Platform",
      client: "QuantumTech Solutions",
      category: "Inteligencia Artificial Cu\xE1ntica",
      tags: ["Computaci\xF3n Cu\xE1ntica", "Machine Learning", "Optimizaci\xF3n"],
      description: "Plataforma revolucionaria que combina computaci\xF3n cu\xE1ntica con IA para resolver problemas complejos de optimizaci\xF3n y simulaci\xF3n molecular.",
      challenge: "QuantumTech necesitaba una soluci\xF3n que aprovechara el poder de la computaci\xF3n cu\xE1ntica para resolver problemas de optimizaci\xF3n complejos que los sistemas cl\xE1sicos no pod\xEDan manejar eficientemente.",
      solution: "Desarrollamos una plataforma h\xEDbrida que combina algoritmos cu\xE1nticos con IA cl\xE1sica, permitiendo resolver problemas de optimizaci\xF3n complejos y realizar simulaciones moleculares avanzadas.",
      results: [
        "Reducci\xF3n del 95% en tiempo de procesamiento para problemas de optimizaci\xF3n complejos",
        "Precisi\xF3n mejorada en un 75% para simulaciones moleculares",
        "Capacidad de procesar problemas 100x m\xE1s grandes que los sistemas tradicionales"
      ],
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      featured: true
    },
    {
      id: "ruby-enterprise",
      title: "Ruby Enterprise Solutions",
      client: "Global Finance Corp",
      category: "Desarrollo Ruby",
      tags: ["Ruby on Rails", "Microservicios", "API"],
      description: "Sistema empresarial escalable construido con Ruby on Rails, implementando una arquitectura de microservicios moderna y APIs robustas.",
      challenge: "Global Finance necesitaba modernizar su infraestructura legacy y crear un sistema modular que pudiera escalar con su crecimiento internacional.",
      solution: "Implementamos una arquitectura de microservicios en Ruby, con APIs RESTful y GraphQL, integraci\xF3n continua y despliegue automatizado.",
      results: [
        "Reducci\xF3n del 60% en tiempo de desarrollo de nuevas caracter\xEDsticas",
        "Escalabilidad mejorada soportando 10x m\xE1s usuarios concurrentes",
        "99.99% de uptime desde el despliegue"
      ],
      image: "https://images.pexels.com/photos/6102161/pexels-photo-6102161.jpeg",
      featured: true
    },
    {
      id: "blockchain-platform",
      title: "Enterprise Blockchain Platform",
      client: "LogisticChain International",
      category: "Tecnolog\xEDa Blockchain",
      tags: ["Smart Contracts", "Supply Chain", "Trazabilidad"],
      description: "Plataforma blockchain empresarial para trazabilidad en cadena de suministro y automatizaci\xF3n de contratos.",
      challenge: "LogisticChain necesitaba una soluci\xF3n para garantizar la trazabilidad y transparencia en su cadena de suministro internacional.",
      solution: "Desarrollamos una plataforma blockchain privada con smart contracts personalizados para automatizar procesos y garantizar trazabilidad.",
      results: [
        "100% de trazabilidad en tiempo real de productos",
        "Reducci\xF3n del 40% en disputas de contratos",
        "Ahorro anual de \u20AC2M en costos operativos"
      ],
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
      featured: true
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation Program",
      client: "Industrial Solutions Corp",
      category: "Consultor\xEDa Estrat\xE9gica",
      tags: ["Transformaci\xF3n Digital", "Industria 4.0", "Automatizaci\xF3n"],
      description: "Programa integral de transformaci\xF3n digital para modernizar procesos industriales y adoptar tecnolog\xEDas de Industria 4.0.",
      challenge: "Industrial Solutions necesitaba modernizar sus operaciones y adoptar tecnolog\xEDas digitales para mantener su competitividad.",
      solution: "Implementamos un programa de transformaci\xF3n digital que incluy\xF3 automatizaci\xF3n de procesos, IoT industrial y analytics avanzado.",
      results: [
        "Eficiencia operativa mejorada en un 45%",
        "Reducci\xF3n del 30% en costos de mantenimiento",
        "ROI del 300% en el primer a\xF1o"
      ],
      image: "https://images.pexels.com/photos/5926370/pexels-photo-5926370.jpeg",
      featured: false
    },
    {
      id: "cloud-native",
      title: "Cloud Native Platform",
      client: "TechScale Solutions",
      category: "Desarrollo Cloud",
      tags: ["Kubernetes", "Microservicios", "DevOps"],
      description: "Plataforma nativa en la nube construida con Kubernetes y microservicios para m\xE1xima escalabilidad y resiliencia.",
      challenge: "TechScale necesitaba una plataforma que pudiera escalar autom\xE1ticamente y manejar millones de transacciones diarias.",
      solution: "Desarrollamos una plataforma cloud-native con Kubernetes, implementando CI/CD y pr\xE1cticas DevOps avanzadas.",
      results: [
        "Escalabilidad autom\xE1tica hasta 1M usuarios concurrentes",
        "Tiempo de despliegue reducido de d\xEDas a minutos",
        "99.999% de disponibilidad"
      ],
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      featured: false
    },
    {
      id: "iot-platform",
      title: "Industrial IoT Platform",
      client: "Smart Manufacturing Co",
      category: "IoT",
      tags: ["Edge Computing", "Industria 4.0", "Analytics"],
      description: "Plataforma IoT industrial con procesamiento en el edge y analytics avanzado para optimizaci\xF3n de producci\xF3n.",
      challenge: "Smart Manufacturing necesitaba optimizar su producci\xF3n mediante an\xE1lisis en tiempo real de datos de sensores.",
      solution: "Implementamos una plataforma IoT con procesamiento en el edge y analytics avanzado para optimizaci\xF3n en tiempo real.",
      results: [
        "Eficiencia de producci\xF3n mejorada en un 35%",
        "Reducci\xF3n del 25% en consumo energ\xE9tico",
        "Predicci\xF3n de mantenimiento con 95% de precisi\xF3n"
      ],
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      featured: false
    }
  ];
  const categories = [...new Set(projects.map((project) => project.category))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio - Elite Ware", "data-astro-cid-hcjuqwdu": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="pt-32 pb-20 bg-gradient-to-b from-dark-900 to-dark-800" data-astro-cid-hcjuqwdu> <div class="container mx-auto px-4 md:px-8" data-astro-cid-hcjuqwdu> <div class="max-w-3xl mx-auto text-center" data-astro-cid-hcjuqwdu> <h1 class="font-display text-4xl md:text-6xl font-bold text-white mb-6" data-astro-cid-hcjuqwdu>
Nuestro Portfolio
</h1> <p class="text-lg text-dark-200 mb-10" data-astro-cid-hcjuqwdu>
Descubre cómo hemos ayudado a empresas líderes a transformar sus negocios con soluciones tecnológicas de vanguardia.
</p> <!-- Filters --> <div class="flex flex-wrap justify-center gap-4 mb-4" id="portfolio-filters" data-astro-cid-hcjuqwdu> <button class="filter-btn active bg-dark-700 hover:bg-dark-600 text-white px-5 py-2 rounded-full transition-all duration-300" data-filter="all" data-astro-cid-hcjuqwdu>
Todos
</button> ${categories.map((category) => renderTemplate`<button class="filter-btn bg-dark-700 hover:bg-dark-600 text-white px-5 py-2 rounded-full transition-all duration-300"${addAttribute(category.toLowerCase().replace(/\s+/g, "-"), "data-filter")} data-astro-cid-hcjuqwdu> ${category} </button>`)} </div> </div> </div> </section>  <section class="py-20 bg-white dark:bg-dark-800" data-astro-cid-hcjuqwdu> <div class="container mx-auto px-4 md:px-8" data-astro-cid-hcjuqwdu> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="portfolio-grid" data-astro-cid-hcjuqwdu> ${projects.map((project) => renderTemplate`<div${addAttribute(`portfolio-item group ${project.category.toLowerCase().replace(/\s+/g, "-")}`, "class")}${addAttribute(project.category.toLowerCase().replace(/\s+/g, "-"), "data-category")} data-astro-cid-hcjuqwdu> <div class="bg-dark-700 rounded-xl overflow-hidden h-full" data-astro-cid-hcjuqwdu> <!-- Project Image --> <div class="relative h-64 overflow-hidden" data-astro-cid-hcjuqwdu> <img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-astro-cid-hcjuqwdu> <!-- Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-80" data-astro-cid-hcjuqwdu></div> <!-- Category Badge --> <div class="absolute top-4 left-4 bg-accent-500 text-white text-xs py-1 px-3 rounded-full" data-astro-cid-hcjuqwdu> ${project.category} </div> <!-- Client Badge --> <div class="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white text-xs py-1 px-3 rounded-full" data-astro-cid-hcjuqwdu> ${project.client} </div> </div> <!-- Content --> <div class="p-6" data-astro-cid-hcjuqwdu> <h3 class="text-2xl font-display font-bold mb-3 text-white" data-astro-cid-hcjuqwdu> ${project.title} </h3> <p class="text-dark-200 mb-6" data-astro-cid-hcjuqwdu> ${project.description} </p> <!-- Challenge --> <div class="mb-6" data-astro-cid-hcjuqwdu> <h4 class="text-lg font-semibold text-white mb-2" data-astro-cid-hcjuqwdu>El Desafío</h4> <p class="text-dark-200" data-astro-cid-hcjuqwdu>${project.challenge}</p> </div> <!-- Solution --> <div class="mb-6" data-astro-cid-hcjuqwdu> <h4 class="text-lg font-semibold text-white mb-2" data-astro-cid-hcjuqwdu>Nuestra Solución</h4> <p class="text-dark-200" data-astro-cid-hcjuqwdu>${project.solution}</p> </div> <!-- Results --> <div class="mb-6" data-astro-cid-hcjuqwdu> <h4 class="text-lg font-semibold text-white mb-2" data-astro-cid-hcjuqwdu>Resultados</h4> <ul class="space-y-2" data-astro-cid-hcjuqwdu> ${project.results.map((result) => renderTemplate`<li class="flex items-start text-dark-200" data-astro-cid-hcjuqwdu> <svg class="h-6 w-6 text-accent-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-hcjuqwdu> <path strokeLinecap="round" strokeLinejoin="round"${addAttribute(2, "strokeWidth")} d="M5 13l4 4L19 7" data-astro-cid-hcjuqwdu></path> </svg> <span data-astro-cid-hcjuqwdu>${result}</span> </li>`)} </ul> </div> <!-- Tags --> <div class="flex flex-wrap gap-2 mb-6" data-astro-cid-hcjuqwdu> ${project.tags.map((tag) => renderTemplate`<span class="text-xs bg-dark-600 text-dark-200 px-2 py-1 rounded" data-astro-cid-hcjuqwdu> ${tag} </span>`)} </div> <!-- CTA --> <div class="flex justify-end" data-astro-cid-hcjuqwdu> ${renderComponent($$result2, "Button", $$Button, { "href": `/portfolio/${project.id}`, "variant": "primary", "size": "sm", "data-astro-cid-hcjuqwdu": true }, { "default": ($$result3) => renderTemplate`
Ver Detalles
` })} </div> </div> </div> </div>`)} </div> </div> </section>  <section class="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white" data-astro-cid-hcjuqwdu> <div class="container mx-auto px-4 md:px-8 text-center" data-astro-cid-hcjuqwdu> <h2 class="font-display text-3xl md:text-4xl font-bold mb-6" data-astro-cid-hcjuqwdu>
¿Listo para tu próximo proyecto?
</h2> <p class="text-xl opacity-90 max-w-2xl mx-auto mb-10" data-astro-cid-hcjuqwdu>
Trabajemos juntos para convertir tus ideas en soluciones tecnológicas innovadoras que transformen tu negocio.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/contacto", "variant": "secondary", "size": "lg", "data-astro-cid-hcjuqwdu": true }, { "default": ($$result3) => renderTemplate`
Hablemos de tu proyecto
` })} </div> </section> ` })}  `;
}, "C:/Users/user/Documents/EliteWare/Eliteware/src/pages/portfolio.astro", void 0);

const $$file = "C:/Users/user/Documents/EliteWare/Eliteware/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
