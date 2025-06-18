/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DMIMG1Y7.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Clac3qTV.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
export { renderers } from '../renderers.mjs';

const supabaseUrl = undefined                                 ;
const supabaseAnonKey = undefined                                      ;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    yearsExperience: "",
    cv: null,
    coverLetter: null,
    privacyAccepted: false
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);
  const validateFile = (file, maxSize = 5) => {
    if (!file.type.includes("pdf")) {
      throw new Error("El archivo debe estar en formato PDF");
    }
    if (file.size > maxSize * 1024 * 1024) {
      throw new Error(`El archivo no debe superar los ${maxSize}MB`);
    }
  };
  const uploadFile = async (file, path) => {
    const { data, error: error2 } = await supabase.storage.from("applications").upload(`${path}/${Date.now()}-${file.name}`, file);
    if (error2) throw error2;
    return data.path;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (!formData.cv) throw new Error("El CV es obligatorio");
      validateFile(formData.cv);
      if (formData.coverLetter) {
        validateFile(formData.coverLetter);
      }
      const cvUrl = await uploadFile(formData.cv, "cv");
      let coverLetterUrl = null;
      if (formData.coverLetter) {
        coverLetterUrl = await uploadFile(formData.coverLetter, "cover-letters");
      }
      const { error: insertError } = await supabase.from("job_applications").insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position_id: formData.position,
        years_experience: parseInt(formData.yearsExperience),
        cv_url: cvUrl,
        cover_letter_url: coverLetterUrl,
        privacy_accepted: formData.privacyAccepted
      });
      if (insertError) throw insertError;
      setSuccess(true);
      formRef.current?.reset();
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        yearsExperience: "",
        cv: null,
        coverLetter: null,
        privacyAccepted: false
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ha ocurrido un error");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("form", { ref: formRef, onSubmit: handleSubmit, className: "space-y-6", children: [
    error && /* @__PURE__ */ jsx("div", { className: "p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg", children: error }),
    success && /* @__PURE__ */ jsx("div", { className: "p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg", children: "Tu postulación ha sido enviada con éxito. Te contactaremos pronto." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "fullName", className: "block text-sm font-medium mb-2", children: "Nombre completo *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "fullName",
            required: true,
            className: "w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-accent-500",
            value: formData.fullName,
            onChange: (e) => setFormData({ ...formData, fullName: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-2", children: "Email *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "email",
            required: true,
            className: "w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-accent-500",
            value: formData.email,
            onChange: (e) => setFormData({ ...formData, email: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-medium mb-2", children: "Teléfono *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "tel",
            id: "phone",
            required: true,
            className: "w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-accent-500",
            value: formData.phone,
            onChange: (e) => setFormData({ ...formData, phone: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "yearsExperience", className: "block text-sm font-medium mb-2", children: "Años de experiencia *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            id: "yearsExperience",
            required: true,
            min: "0",
            max: "50",
            className: "w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-accent-500",
            value: formData.yearsExperience,
            onChange: (e) => setFormData({ ...formData, yearsExperience: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "cv", className: "block text-sm font-medium mb-2", children: "CV (PDF, máx. 5MB) *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            id: "cv",
            accept: ".pdf",
            required: true,
            className: "w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-accent-500",
            onChange: (e) => setFormData({ ...formData, cv: e.target.files?.[0] || null })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "coverLetter", className: "block text-sm font-medium mb-2", children: "Carta de presentación (PDF, máx. 5MB)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            id: "coverLetter",
            accept: ".pdf",
            className: "w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-accent-500",
            onChange: (e) => setFormData({ ...formData, coverLetter: e.target.files?.[0] || null })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            id: "privacy",
            required: true,
            className: "mt-1 rounded border-dark-200 dark:border-dark-600 text-accent-500 focus:ring-accent-500",
            checked: formData.privacyAccepted,
            onChange: (e) => setFormData({ ...formData, privacyAccepted: e.target.checked })
          }
        ),
        /* @__PURE__ */ jsxs("label", { htmlFor: "privacy", className: "ml-2 text-sm", children: [
          "Acepto la ",
          /* @__PURE__ */ jsx("a", { href: "/privacidad", className: "text-accent-500 hover:underline", children: "política de privacidad" }),
          " y el tratamiento de mis datos personales *"
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "w-full px-8 py-3 bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white font-medium rounded-md transition-colors relative",
          children: loading ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center", children: [
            /* @__PURE__ */ jsxs("svg", { className: "animate-spin h-5 w-5 mr-3\\", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx("circle", { className: "opacity-25\\", cx: "12\\", cy: "12\\", r: "10\\", stroke: "currentColor\\", strokeWidth: "4\\", fill: "none" }),
              /* @__PURE__ */ jsx("path", { className: "opacity-75\\", fill: "currentColor\\", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
            ] }),
            "Enviando..."
          ] }) : "Enviar postulación"
        }
      )
    ] })
  ] });
};

const $$Unete = createComponent(($$result, $$props, $$slots) => {
  const positions = [
    {
      id: "senior-ai-engineer",
      title: "Senior AI Engineer",
      department: "Inteligencia Artificial",
      description: "Buscamos un ingeniero senior especializado en IA para liderar el desarrollo de soluciones innovadoras en machine learning y deep learning.",
      requirements: [
        "5+ a\xF1os de experiencia en desarrollo de soluciones de IA",
        "Experiencia con PyTorch, TensorFlow y frameworks modernos de ML",
        "Conocimientos s\xF3lidos en deep learning y procesamiento de lenguaje natural",
        "Experiencia liderando equipos t\xE9cnicos",
        "Excelentes habilidades de comunicaci\xF3n"
      ]
    },
    {
      id: "metaverse-developer",
      title: "Metaverse Developer",
      department: "Metaverso",
      description: "\xDAnete a nuestro equipo de desarrollo de metaverso para crear experiencias inmersivas de pr\xF3xima generaci\xF3n.",
      requirements: [
        "3+ a\xF1os de experiencia en desarrollo 3D y VR/AR",
        "Experiencia con Unity o Unreal Engine",
        "Conocimientos de WebGL y Three.js",
        "Familiaridad con tecnolog\xEDas blockchain",
        "Pasi\xF3n por tecnolog\xEDas emergentes"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xDAnete a Nuestro Equipo - Elite Ware" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="pt-32 pb-20 bg-gradient-to-b from-dark-900 to-dark-800"> <div class="container mx-auto px-4 md:px-8"> <div class="max-w-3xl mx-auto text-center"> <h1 class="font-display text-4xl md:text-6xl font-bold text-white mb-6">
Únete a Nuestro Equipo
</h1> <p class="text-lg text-dark-200 mb-10">
Forma parte de una empresa líder en innovación tecnológica y ayúdanos a construir el futuro digital.
</p> </div> </div> </section>  <section class="py-20 bg-white dark:bg-dark-800"> <div class="container mx-auto px-4 md:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div> <h2 class="font-display text-3xl font-bold mb-6">
Nuestra Cultura
</h2> <div class="space-y-4 text-dark-500 dark:text-dark-200"> <p>
En Elite Ware, creemos en el poder de la innovación y la colaboración. Fomentamos un ambiente de trabajo donde las ideas fluyen libremente y cada miembro del equipo tiene la oportunidad de crecer y desarrollarse profesionalmente.
</p> <p>
Valoramos la diversidad de pensamiento y experiencia, y creemos que los mejores resultados surgen cuando personas con diferentes perspectivas trabajan juntas hacia objetivos comunes.
</p> </div> <div class="mt-8 space-y-4"> <h3 class="font-display text-xl font-bold mb-4">
Beneficios
</h3> <ul class="grid grid-cols-1 md:grid-cols-2 gap-4"> <li class="flex items-start"> <span class="text-accent-500 mr-2">→</span> <span>Horario flexible</span> </li> <li class="flex items-start"> <span class="text-accent-500 mr-2">→</span> <span>Trabajo remoto</span> </li> <li class="flex items-start"> <span class="text-accent-500 mr-2">→</span> <span>Seguro médico privado</span> </li> <li class="flex items-start"> <span class="text-accent-500 mr-2">→</span> <span>Formación continua</span> </li> <li class="flex items-start"> <span class="text-accent-500 mr-2">→</span> <span>Plan de carrera</span> </li> <li class="flex items-start"> <span class="text-accent-500 mr-2">→</span> <span>Eventos de equipo</span> </li> </ul> </div> </div> <div class="relative rounded-xl overflow-hidden shadow-xl"> <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" alt="Equipo de Elite Ware" class="w-full h-full object-cover"> </div> </div> </div> </section>  <section class="py-20 bg-gray-50 dark:bg-dark-700"> <div class="container mx-auto px-4 md:px-8"> <h2 class="font-display text-3xl font-bold mb-12 text-center">
Posiciones Abiertas
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${positions.map((position) => renderTemplate`<div class="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-lg"> <h3 class="font-display text-2xl font-bold mb-2"> ${position.title} </h3> <p class="text-accent-500 font-medium mb-4"> ${position.department} </p> <p class="text-dark-500 dark:text-dark-200 mb-6"> ${position.description} </p> <div class="mb-6"> <h4 class="font-semibold mb-3">Requisitos:</h4> <ul class="space-y-2"> ${position.requirements.map((req) => renderTemplate`<li class="flex items-start text-dark-500 dark:text-dark-300"> <span class="text-accent-500 mr-2">→</span> <span>${req}</span> </li>`)} </ul> </div> <a${addAttribute(`#application-form`, "href")} class="inline-flex items-center px-6 py-2 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-md transition-colors">
Aplicar ahora
</a> </div>`)} </div> </div> </section>  <section id="application-form" class="py-20 bg-white dark:bg-dark-800"> <div class="container mx-auto px-4 md:px-8"> <div class="max-w-2xl mx-auto"> <h2 class="font-display text-3xl font-bold mb-8 text-center">
Formulario de Postulación
</h2> ${renderComponent($$result2, "JobApplicationForm", JobApplicationForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/user/Documents/EliteWare/Eliteware/src/components/JobApplicationForm", "client:component-export": "default" })} </div> </div> </section> ` })}`;
}, "C:/Users/user/Documents/EliteWare/Eliteware/src/pages/unete.astro", void 0);

const $$file = "C:/Users/user/Documents/EliteWare/Eliteware/src/pages/unete.astro";
const $$url = "/unete";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Unete,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
