import {
	c as create_ssr_component,
	b as add_attribute,
	e as escape,
	d as null_to_empty
} from './ssr.js';
const Container_svelte_svelte_type_style_lang = '';
const css = {
	code: 'div.svelte-2jfut8{display:flex}.textContainer.svelte-2jfut8{max-width:1150px;padding-left:2rem;padding-right:2rem}.fullWidth.svelte-2jfut8{width:100%}.centered.svelte-2jfut8{margin-left:auto;margin-right:auto}.vertical.svelte-2jfut8{flex-direction:column}.vertical.spaced.svelte-2jfut8>*{margin-top:1rem}.vertical.spaced.svelte-2jfut8>*:first-child{margin-top:0}.spaced.svelte-2jfut8:not(.vertical)>*{margin-left:1rem}.spaced.svelte-2jfut8:not(.vertical)>*:first-child{margin-left:0}.verticalCenteredContent.svelte-2jfut8{justify-content:center}.horizontalCenteredContent.svelte-2jfut8{align-items:center}.hidden.svelte-2jfut8{display:none !important}',
	map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { textContainer = false } = $$props;
	let { vertical = false } = $$props;
	let { spaced = false } = $$props;
	let { verticalCenteredContent = false } = $$props;
	let { horizontalCenteredContent = false } = $$props;
	let { fullWidth = false } = $$props;
	let { centered = false } = $$props;
	let { hidden = false } = $$props;
	if ($$props.textContainer === void 0 && $$bindings.textContainer && textContainer !== void 0)
		$$bindings.textContainer(textContainer);
	if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
		$$bindings.vertical(vertical);
	if ($$props.spaced === void 0 && $$bindings.spaced && spaced !== void 0)
		$$bindings.spaced(spaced);
	if (
		$$props.verticalCenteredContent === void 0 &&
		$$bindings.verticalCenteredContent &&
		verticalCenteredContent !== void 0
	)
		$$bindings.verticalCenteredContent(verticalCenteredContent);
	if (
		$$props.horizontalCenteredContent === void 0 &&
		$$bindings.horizontalCenteredContent &&
		horizontalCenteredContent !== void 0
	)
		$$bindings.horizontalCenteredContent(horizontalCenteredContent);
	if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
		$$bindings.fullWidth(fullWidth);
	if ($$props.centered === void 0 && $$bindings.centered && centered !== void 0)
		$$bindings.centered(centered);
	if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
		$$bindings.hidden(hidden);
	$$result.css.add(css);
	return `<div${add_attribute('id', $$props.id, 0)} class="${[
		escape(null_to_empty($$props.class), true) + ' svelte-2jfut8',
		(textContainer ? 'textContainer' : '') +
			' ' +
			(fullWidth ? 'fullWidth' : '') +
			' ' +
			(centered ? 'centered' : '') +
			' ' +
			(vertical ? 'vertical' : '') +
			' ' +
			(spaced ? 'spaced' : '') +
			' ' +
			(verticalCenteredContent ? 'verticalCenteredContent' : '') +
			' ' +
			(horizontalCenteredContent ? 'horizontalCenteredContent' : '') +
			' ' +
			(hidden ? 'hidden' : '')
	]
		.join(' ')
		.trim()}"${add_attribute('style', $$props.style, 0)}>${
		slots.default
			? slots.default({})
			: `
    Empty Container component
  `
	} </div>`;
});
export { Container as C };
