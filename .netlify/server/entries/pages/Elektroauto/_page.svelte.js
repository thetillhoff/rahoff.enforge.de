import { c as create_ssr_component, v as validate_component } from '../../../chunks/ssr.js';
import { C as Container } from '../../../chunks/Container.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${(($$result.head += `<!-- HEAD_svelte-1ufyg2p_START -->${(($$result.title = `<title>Elektroauto</title>`), '')}<meta name="description" content="Rahoff Elektroauto"><!-- HEAD_svelte-1ufyg2p_END -->`), '')} ${validate_component(
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
				return `<h1 data-svelte-h="svelte-13zb9ox">Elektroauto</h1> <p data-svelte-h="svelte-1t475g9">Hier gibt es bisher noch keine Inhalte. Schau doch gerne später nochmal vorbei!</p>`;
			}
		}
	)}`;
});
export { Page as default };
