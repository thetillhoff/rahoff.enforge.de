import { c as create_ssr_component, v as validate_component } from '../../../chunks/ssr.js';
import { C as Container } from '../../../chunks/Container.js';
import { E as ElementGrid, a as ElementPanel } from '../../../chunks/ElementPanel.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${(($$result.head += `<!-- HEAD_svelte-fgh0fl_START -->${(($$result.title = `<title>Schmuck</title>`), '')}<meta name="description" content="Rahoff Schmuck"><!-- HEAD_svelte-fgh0fl_END -->`), '')} ${validate_component(
		Container,
		'Container'
	).$$render(
		$$result,
		{
			vertical: true,
			fullWidth: true,
			centered: true,
			textContainer: true
		},
		{},
		{
			default: () => {
				return `<h1 data-svelte-h="svelte-12n554c">Schmuck</h1> ${validate_component(
					ElementGrid,
					'ElementGrid'
				).$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `${validate_component(ElementPanel, 'ElementPanel').$$render(
								$$result,
								{
									name: 'Ringe',
									src: '/images/Schmuck/Ringe/Eichenstein/Eichenstein.jpg',
									href: '/Schmuck/Ringe'
								},
								{},
								{}
							)} ${validate_component(ElementPanel, 'ElementPanel').$$render(
								$$result,
								{
									name: 'Halsketten',
									src: '/images/logo/rahoff-scale-1.svg',
									href: '/Schmuck/Halsketten'
								},
								{},
								{}
							)} ${validate_component(ElementPanel, 'ElementPanel').$$render(
								$$result,
								{
									name: 'Anhänger',
									src: '/images/logo/rahoff-scale-1.svg',
									href: '/Schmuck/Anhaenger'
								},
								{},
								{}
							)}`;
						}
					}
				)}`;
			}
		}
	)}`;
});
export { Page as default };
