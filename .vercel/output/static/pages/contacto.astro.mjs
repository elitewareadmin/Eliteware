/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DMIMG1Y7.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Clac3qTV.mjs';
import { $ as $$ContactSection } from '../chunks/ContactSection_C0-73Ito.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto - Elite Ware" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="pt-32 pb-20 bg-gradient-to-b from-dark-900 to-dark-800"> <div class="container mx-auto px-4 md:px-8"> <div class="max-w-3xl mx-auto text-center"> <h1 class="font-display text-4xl md:text-6xl font-bold text-white mb-6">
Contacto
</h1> <p class="text-lg text-dark-200 mb-10">
Estamos aquí para ayudarte. Ponte en contacto con nosotros y cuéntanos sobre tu proyecto o consulta.
</p> </div> </div> </section>  ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "C:/Users/user/Documents/EliteWare/Eliteware/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/user/Documents/EliteWare/Eliteware/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
