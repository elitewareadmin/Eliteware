import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, e as renderSlot, a as renderTemplate } from './astro/server_DMIMG1Y7.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    href,
    class: className = "",
    target,
    rel = target === "_blank" ? "noopener noreferrer" : void 0,
    ariaLabel
  } = Astro2.props;
  const variantClasses = {
    primary: "bg-accent-500 hover:bg-accent-600 text-white border-transparent",
    secondary: "bg-transparent border-accent-500 text-accent-500 hover:bg-accent-500/10",
    ghost: "bg-transparent hover:bg-dark-100 dark:hover:bg-dark-700 text-dark-800 dark:text-white border-transparent"
  };
  const sizeClasses = {
    sm: "text-sm py-2 px-4",
    md: "text-base py-2.5 px-6",
    lg: "text-lg py-3 px-8"
  };
  const classes = `
  inline-flex items-center justify-center
  border-2 rounded-md font-medium
  transition-all duration-300 ease-in-out
  focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-50
  ${variantClasses[variant]}
  ${sizeClasses[size]}
  ${className}
`;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(classes, "class")}${addAttribute(target, "target")}${addAttribute(rel, "rel")}${addAttribute(ariaLabel, "aria-label")}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(classes, "class")} type="button"${addAttribute(ariaLabel, "aria-label")}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "C:/Users/user/Documents/EliteWare/Eliteware/src/components/Button.astro", void 0);

export { $$Button as $ };
