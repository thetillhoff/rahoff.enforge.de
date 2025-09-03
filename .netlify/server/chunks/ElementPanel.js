import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component,
	e as escape
} from './ssr.js';
import { I as Image } from './Image.js';
const ElementGrid_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: 'div.svelte-70ievj{display:grid;grid-template-columns:repeat(auto-fit, minmax(14rem, 1fr));grid-gap:2rem}',
	map: null
};
const ElementGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$1);
	return `<div class="svelte-70ievj">${slots.default ? slots.default({}) : ``} </div>`;
});
const ElementPanel_svelte_svelte_type_style_lang = '';
const css = {
	code: '.elementPanel.svelte-12kzlb6{display:flex;flex-direction:column;border-width:2px;border-radius:calc(2 * 5px);padding:0.75rem;background-color:hsla(0, 0%, 100%, 1)}a.svelte-12kzlb6:hover,a.svelte-12kzlb6:focus{background-color:hsla(0, 0%, 70%, 1)}span.svelte-12kzlb6{margin-top:1rem}',
	map: null
};
const ElementPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { name = 'Name is missing' } = $$props;
	let { src = '' } = $$props;
	let { href = '' } = $$props;
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	$$result.css.add(css);
	return `<a${add_attribute('href', href, 0)} class="elementPanel svelte-12kzlb6">${validate_component(Image, 'Image').$$render($$result, { src, alt: 'Image of ' + name }, {}, {})} <span class="svelte-12kzlb6">${escape(name)}</span> </a>`;
});
export { ElementGrid as E, ElementPanel as a };
