import { c as create_ssr_component } from "../../chunks/index.js";
/* empty css                */const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".overlay-black.svelte-rg5aru{animation:svelte-rg5aru-fadeInAnimation ease 3s}@keyframes svelte-rg5aru-fadeInAnimation{0%{opacity:1}20%{opacity:1;z-index:99}80%{z-index:-1}100%{opacity:0;z-index:-1}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"overlay-black svelte-rg5aru"}"></div>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
