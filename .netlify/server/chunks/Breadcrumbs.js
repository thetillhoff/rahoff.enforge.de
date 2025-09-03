import { c as create_ssr_component } from './ssr.js';
const Breadcrumbs_svelte_svelte_type_style_lang = '';
const css = {
	code: 'span.svelte-5aj9ub{margin-top:1rem}',
	map: null
};
const Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `<span class="svelte-5aj9ub">Zurück zu:
  ${slots.default ? slots.default({}) : ``} </span>`;
});
export { Breadcrumbs as B };
