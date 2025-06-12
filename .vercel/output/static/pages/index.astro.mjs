/* empty css                                    */
import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, F as Fragment, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_DMIMG1Y7.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Clac3qTV.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import * as gsap from 'gsap';
import 'clsx';
import { $ as $$ContactSection } from '../chunks/ContactSection_C0-73Ito.mjs';
export { renderers } from '../renderers.mjs';

const HeroSection = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1e3
    );
    camera.position.z = 5;
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    const particleCount = 1500;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      scales[i] = Math.random();
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "scale",
      new THREE.BufferAttribute(scales, 1)
    );
    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(12790524) },
        color2: { value: new THREE.Color(4017637) },
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        attribute float scale;
        uniform float time;
        uniform vec2 mouse;
        
        varying vec3 vColor;
        varying float vScale;
        
        void main() {
          vScale = scale;
          
          // Calculate distance to mouse
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vec2 projectPosition = vec2(mvPosition.x, mvPosition.y);
          float distToMouse = length(projectPosition - mouse * 5.0);
          
          // Apply force based on mouse position
          vec3 pos = position;
          if (distToMouse < 2.0) {
            float force = 0.2 / max(0.1, distToMouse);
            vec3 dir = normalize(vec3(projectPosition - mouse * 5.0, 0.0));
            pos += dir * force;
          }
          
          // Apply some movement over time
          pos.x += sin(pos.y * 0.5 + time * 0.5) * 0.05;
          pos.y += cos(pos.x * 0.5 + time * 0.5) * 0.05;
          pos.z += sin(pos.z * 0.5 + time * 0.5) * 0.05;
          
          vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * modelViewPosition;
          
          // Size
          gl_PointSize = scale * 4.0 + 2.0;
          gl_PointSize *= (1.0 / - modelViewPosition.z);
          
          // Color based on position
          float colorFactor = (pos.x + pos.y + pos.z) * 0.2 + 0.5;
          vColor = mix(vec3(0.76, 0.17, 0.99), vec3(0.24, 0.30, 0.90), colorFactor);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vScale;
        
        void main() {
          // Circular particles
          float strength = 1.0 - distance(gl_PointCoord, vec2(0.5));
          strength = smoothstep(0.0, 0.5, strength);
          
          gl_FragColor = vec4(vColor, strength * vScale);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;
    const onMouseMove = (event) => {
      mouseRef.current.x = event.clientX / window.innerWidth * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      if (particleMaterial.uniforms) {
        particleMaterial.uniforms.time.value = elapsedTime;
        particleMaterial.uniforms.mouse.value = mouseRef.current;
      }
      if (particles) {
        particles.rotation.y = elapsedTime * 0.05;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      scene.remove(particles);
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  useEffect(() => {
    const tl = gsap.gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" }
    });
    tl.from(".hero-title span", {
      y: 100,
      opacity: 0,
      stagger: 0.1
    }).from(
      ".hero-subtitle",
      {
        y: 20,
        opacity: 0
      },
      "-=0.6"
    ).from(
      ".hero-cta",
      {
        y: 20,
        opacity: 0
      },
      "-=0.4"
    );
    return () => {
      tl.kill();
    };
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "relative h-screen w-full overflow-hidden flex items-center justify-center", children: [
    /* @__PURE__ */ jsx(
      "canvas",
      {
        ref: canvasRef,
        className: "absolute inset-0 w-full h-full bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "container relative z-10 px-4 md:px-8 mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "hero-title font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight", children: "Transformando el futuro digital".split("").map((char, index) => /* @__PURE__ */ jsx("span", { className: "inline-block", children: char === " " ? " " : char }, index)) }),
      /* @__PURE__ */ jsx("p", { className: "hero-subtitle text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto", children: "Consultoría tecnológica especializada en inteligencia artificial, metaverso y software disruptivo para empresas que buscan liderar la transformación digital." }),
      /* @__PURE__ */ jsxs("div", { className: "hero-cta flex justify-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/servicios",
            className: "bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300",
            children: "Nuestros Servicios"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contacto",
            className: "bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-all duration-300",
            children: "Contactar"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-white/60 text-sm mb-2", children: "Scroll" }),
      /* @__PURE__ */ jsx("div", { className: "w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1", children: /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-1" }) })
    ] })
  ] });
};

const $$ServicesSection = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Inteligencia Artificial",
      description: "Soluciones personalizadas de IA que transforman datos en insights accionables y automatizaciones inteligentes para optimizar procesos y toma de decisiones.",
      icon: "brain",
      id: "ia"
    },
    {
      title: "Metaverso",
      description: "Creamos experiencias inmersivas y entornos virtuales interactivos que conectan marcas con audiencias de formas nunca antes imaginadas.",
      icon: "vr",
      id: "metaverso"
    },
    {
      title: "Software Disruptivo",
      description: "Desarrollamos aplicaciones innovadoras que rompen con lo establecido, utilizando las \xFAltimas tecnolog\xEDas y arquitecturas para ofrecer ventajas competitivas reales.",
      icon: "code",
      id: "software"
    },
    {
      title: "Consultor\xEDa Tecnol\xF3gica",
      description: "Asesoramiento estrat\xE9gico y hojas de ruta tecnol\xF3gicas para guiar tu transformaci\xF3n digital con claridad y precisi\xF3n hacia objetivos tangibles.",
      icon: "consultoria",
      id: "consultoria"
    }
  ];
  const getIcon = (icon) => {
    const icons = {
      brain: `<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
      vr: `<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 12.5C2 10 4 8.5 7 8.5c3 0 5 1.5 5 4s-2 4-5 4-5-1.5-5-4z"/>
      <path d="M17 15.5c3 0 5-1.5 5-4s-2-4-5-4-5 1.5-5 4 2 4 5 4z"/>
      <path d="M19.5 8.5h-15"/>
      <path d="M19.5 15.5h-15"/>
    </svg>`,
      code: `<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>`,
      consultoria: `<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
  return renderTemplate`${maybeRenderHead()}<section class="py-20 md:py-32 bg-white dark:bg-dark-900" id="servicios"> <div class="container mx-auto px-4 md:px-8"> <!-- Section Header --> <div class="text-center mb-16 md:mb-24 max-w-3xl mx-auto"> <h2 class="font-display text-3xl md:text-5xl font-bold mb-6 relative inline-block"> <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
Nuestros Servicios
</span> </h2> <p class="text-lg text-dark-500 dark:text-dark-200">
Tecnologías avanzadas y soluciones innovadoras para transformar tu negocio 
        y prepararlo para los retos del futuro digital.
</p> </div> <!-- Services Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${services.map((service, index) => renderTemplate`<div${addAttribute(service.id, "id")} class="service-card group relative bg-white dark:bg-dark-800 rounded-xl p-8 shadow-lg dark:shadow-accent-500/5 hover:shadow-xl dark:hover:shadow-accent-500/10 transition-all duration-500 overflow-hidden"${addAttribute(index, "data-index")}> <!-- Service Icon --> <div class="icon-container mb-6 text-accent-500 relative z-10"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(getIcon(service.icon))}` })} </div> <!-- Content --> <h3 class="text-xl font-display font-bold mb-4 relative z-10"> ${service.title} </h3> <p class="text-dark-500 dark:text-dark-200 mb-6 relative z-10"> ${service.description} </p> <!-- "Learn more" link --> <a${addAttribute(`/servicios#${service.id}`, "href")} class="inline-flex items-center text-primary-500 font-medium relative z-10 group-hover:text-primary-400 transition-colors">
Saber más
<svg class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> <!-- Background decoration --> <div class="absolute -bottom-12 -right-12 w-40 h-40 bg-primary-500/5 rounded-full transition-transform duration-500 group-hover:scale-150"></div> </div>`)} </div> </div> </section> `;
}, "C:/Users/user/Documents/EliteWare/Eliteware/src/components/ServicesSection.astro", void 0);

const $$FeaturedWork = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Nexus AI Platform",
      category: "Inteligencia Artificial",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Plataforma de an\xE1lisis predictivo que utiliza machine learning para anticipar tendencias de mercado con precisi\xF3n del 94%.",
      url: "/portfolio/nexus-ai-platform"
    },
    {
      title: "VirtualX Showroom",
      category: "Metaverso",
      image: "https://images.pexels.com/photos/6102161/pexels-photo-6102161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Experiencia inmersiva de compra en realidad virtual para marcas de lujo con interacciones realistas y an\xE1lisis de comportamiento.",
      url: "/portfolio/virtualx-showroom"
    },
    {
      title: "Quantum Analytics Suite",
      category: "Software Disruptivo",
      image: "https://images.pexels.com/photos/5926370/pexels-photo-5926370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Suite de an\xE1lisis de datos empresariales que procesa petabytes de informaci\xF3n en tiempo real para la toma de decisiones.",
      url: "/portfolio/quantum-analytics-suite"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 md:py-32 bg-gradient-to-b from-dark-900 to-dark-800"> <div class="container mx-auto px-4 md:px-8"> <!-- Section Header --> <div class="text-center mb-16 md:mb-24 max-w-3xl mx-auto"> <h2 class="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
Proyectos Destacados
</h2> <p class="text-lg text-dark-200">
Descubre cómo hemos ayudado a empresas líderes a transformar sus negocios
        con soluciones tecnológicas de vanguardia.
</p> </div> <!-- Projects Grid --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${projects.map((project, index) => renderTemplate`<div class="project-card group"${addAttribute(index, "data-index")}> <a${addAttribute(`/portfolio#${project.title.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="block h-full"> <div class="relative overflow-hidden rounded-xl bg-dark-700 h-full flex flex-col"> <!-- Project Image --> <div class="relative h-64 overflow-hidden"> <img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> <!-- Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-80"></div> <!-- Category Badge --> <div class="absolute top-4 left-4 bg-accent-500 text-white text-xs py-1 px-3 rounded-full"> ${project.category} </div> </div> <!-- Content --> <div class="p-6 flex-1 flex flex-col"> <h3 class="text-xl font-display font-bold mb-3 text-white"> ${project.title} </h3> <p class="text-dark-200 mb-6 flex-1"> ${project.description} </p> <!-- "View Project" link --> <div class="inline-flex items-center text-accent-400 font-medium group-hover:text-accent-300 transition-colors">
Ver Proyecto
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </div> </div> </div> </a> </div>`)} </div> <!-- "View All" button --> <div class="text-center mt-16"> <a href="/portfolio" class="inline-flex items-center justify-center px-8 py-3 border-2 border-accent-500 text-accent-500 font-medium rounded-md hover:bg-accent-500 hover:text-white transition-all duration-300">
Ver todos los proyectos
</a> </div> </div> </section> `;
}, "C:/Users/user/Documents/EliteWare/Eliteware/src/components/FeaturedWork.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Elite Ware - Consultora tecnol\xF3gica de vanguardia" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", HeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/user/Documents/EliteWare/Eliteware/src/components/HeroSection", "client:component-export": "default" })} ${renderComponent($$result2, "ServicesSection", $$ServicesSection, {})} ${renderComponent($$result2, "FeaturedWork", $$FeaturedWork, {})} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "C:/Users/user/Documents/EliteWare/Eliteware/src/pages/index.astro", void 0);

const $$file = "C:/Users/user/Documents/EliteWare/Eliteware/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
