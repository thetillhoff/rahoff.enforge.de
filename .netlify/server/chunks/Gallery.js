import {
	c as create_ssr_component,
	v as validate_component,
	b as add_attribute,
	h as each
} from './ssr.js';
import { C as Container } from './Container.js';
const Gallery_svelte_svelte_type_style_lang = '';
const css = {
	code: 'div.svelte-y9woxz{width:100%;margin-bottom:1rem}img{border-radius:5px}.galleryMain.svelte-y9woxz img{width:100%}.galleryList img{height:4rem}',
	map: null
};
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { mainImageSource = '' } = $$props;
	let { galleryImageSources = [''] } = $$props;
	let galleryImage;
	if (
		$$props.mainImageSource === void 0 &&
		$$bindings.mainImageSource &&
		mainImageSource !== void 0
	)
		$$bindings.mainImageSource(mainImageSource);
	if (
		$$props.galleryImageSources === void 0 &&
		$$bindings.galleryImageSources &&
		galleryImageSources !== void 0
	)
		$$bindings.galleryImageSources(galleryImageSources);
	$$result.css.add(css);
	return `${validate_component(Container, 'Container').$$render(
		$$result,
		{
			id: $$props.id,
			class: $$props.class,
			style: $$props.style,
			vertical: true,
			fullWidth: true
		},
		{},
		{
			default: () => {
				return `<div class="galleryMain svelte-y9woxz"><img${add_attribute('src', mainImageSource, 0)} alt="Active entry of the gallery"${add_attribute('this', galleryImage, 0)}></div> ${validate_component(
					Container,
					'Container'
				).$$render(
					$$result,
					{ class: 'galleryList', spaced: true },
					{},
					{
						default: () => {
							return `${each(galleryImageSources, (galleryImageSource) => {
								return `<img${add_attribute('src', galleryImageSource, 0)} alt="Entry in the gallery">`;
							})}`;
						}
					}
				)}`;
			}
		}
	)}`;
});
export { Gallery as G };
