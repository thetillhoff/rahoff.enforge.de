import {
	c as create_ssr_component,
	b as add_attribute,
	e as escape,
	d as null_to_empty,
	v as validate_component
} from '../../chunks/ssr.js';
import { C as Container } from '../../chunks/Container.js';
import { I as Image } from '../../chunks/Image.js';
const Button_svelte_svelte_type_style_lang = '';
const css$3 = {
	code: 'button.svelte-1a7lmdk{padding:calc( 1rem * 0.5);height:1rem;min-width:1rem;text-align:center;font-size:inherit;display:inline;float:left;outline:none;cursor:pointer;border-style:solid;border-width:2px;border-radius:5px}button.svelte-1a7lmdk{padding:calc(1rem * 0.5);height:1rem;min-width:1rem;font-size:1rem}button.large.svelte-1a7lmdk{padding:calc(1rem * 1.2 * 0.5);height:calc(1rem * 1.2);min-width:calc(1rem * 1.2);font-size:calc(1rem * 1.2)}button.big.svelte-1a7lmdk{padding:calc(1rem * 1.4 * 0.5);height:calc(1rem * 1.4);min-width:calc(1rem * 1.4);font-size:calc(1rem * 1.4)}button.huge.svelte-1a7lmdk{padding:calc(1rem * 1.6 * 0.5);height:calc(1rem * 1.6);min-width:calc(1rem * 1.6);font-size:calc(1rem * 1.6)}button.image.svelte-1a7lmdk{padding:0;height:calc(1rem + (1rem * 0.5))}button.large.image.svelte-1a7lmdk{padding:0;height:calc(1rem * 1.2 + (1rem * 1.2 * 0.5))}button.big.image.svelte-1a7lmdk{padding:0;height:calc(1rem * 1.4 + (1rem * 1.4 * 0.5))}button.huge.image.svelte-1a7lmdk{padding:0;height:calc(1rem * 1.6 + (1rem * 1.6 * 0.5))}button.inline.svelte-1a7lmdk{float:none}button.borderless.svelte-1a7lmdk{border:none}.buttons>button.svelte-1a7lmdk{margin-left:0.5rem}.buttons>button.large.svelte-1a7lmdk{margin-left:calc(0.5rem * 1.2)}.buttons>button.big.svelte-1a7lmdk{margin-left:calc(0.5rem * 1.4)}.buttons>button.huge.svelte-1a7lmdk{margin-left:calc(0.5rem * 1.6)}.buttons>button.svelte-1a7lmdk:first-child{margin-left:0}button.icon.svelte-1a7lmdk{height:calc(1rem * 1.2);min-width:calc(1rem * 1.2);padding:calc(1rem * 0.5 - (1rem * 1.2 - 1rem) / 2);display:flex;justify-content:center;align-items:center}button.large.icon.svelte-1a7lmdk{height:calc(1rem * 1.2 * 1.2);min-width:calc(1rem * 1.2 * 1.2);padding:calc(1rem * 1.2 * 0.5 - (1rem * 1.2 * 1.2 - 1rem * 1.2) / 2)}button.big.icon.svelte-1a7lmdk{height:calc(1rem * 1.2 * 1.4);min-width:calc(1rem * 1.2 * 1.4);padding:calc(1rem * 1.4 * 0.5 - (1rem * 1.2 * 1.4 - 1rem * 1.4) / 2)}button.huge.icon.svelte-1a7lmdk{height:calc(1rem * 1.2 * 1.6);min-width:calc(1rem * 1.2 * 1.6);padding:calc(1rem * 1.6 * 0.5 - (1rem * 1.2 * 1.6 - 1rem * 1.6) / 2)}',
	map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { big = false } = $$props;
	let { large = false } = $$props;
	let { huge = false } = $$props;
	let { inline = false } = $$props;
	let { borderless = false } = $$props;
	if ($$props.big === void 0 && $$bindings.big && big !== void 0) $$bindings.big(big);
	if ($$props.large === void 0 && $$bindings.large && large !== void 0) $$bindings.large(large);
	if ($$props.huge === void 0 && $$bindings.huge && huge !== void 0) $$bindings.huge(huge);
	if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
		$$bindings.inline(inline);
	if ($$props.borderless === void 0 && $$bindings.borderless && borderless !== void 0)
		$$bindings.borderless(borderless);
	$$result.css.add(css$3);
	return `<button${add_attribute('id', $$props.id, 0)} class="${[
		escape(null_to_empty($$props.class), true) + ' svelte-1a7lmdk',
		(big ? 'big' : '') +
			' ' +
			(large ? 'large' : '') +
			' ' +
			(huge ? 'huge' : '') +
			' ' +
			(inline ? 'inline' : '') +
			' ' +
			(borderless ? 'borderless' : '')
	]
		.join(' ')
		.trim()}"${add_attribute('style', $$props.style, 0)}>${slots.default ? slots.default({}) : `Button`} </button>`;
});
const Header_svelte_svelte_type_style_lang = '';
const css$2 = {
	code: 'header.svelte-17hh9h4{width:100%}a.svelte-17hh9h4{padding:1rem}a.svelte-17hh9h4:not(.logo){margin-right:2rem}a.svelte-17hh9h4:hover{background-color:hsla(0, 0%, 70%, 1)}',
	map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let innerWidth;
	let { centeredContent = false } = $$props;
	let mobileNavigationVisible = false;
	if (
		$$props.centeredContent === void 0 &&
		$$bindings.centeredContent &&
		centeredContent !== void 0
	)
		$$bindings.centeredContent(centeredContent);
	$$result.css.add(css$2);
	innerWidth = 0;
	return ` <header class="svelte-17hh9h4">${validate_component(Container, 'Container').$$render(
		$$result,
		{
			fullWidth: true,
			vertical: true,
			style: 'border-bottom: 2px solid hsla(240, 100%, 50%, 1);'
		},
		{},
		{
			default: () => {
				return `${validate_component(Container, 'Container').$$render(
					$$result,
					{
						fullWidth: true,
						verticalCenteredContent: true,
						horizontalCenteredContent: true,
						style: 'border-bottom: 2px solid hsla(240, 100%, 50%, 1);'
					},
					{},
					{
						default: () => {
							return `${validate_component(Container, 'Container').$$render(
								$$result,
								{
									fullWidth: true,
									textContainer: true,
									horizontalCenteredContent: true,
									style: 'padding-left: 1rem; padding-right: 1rem;'
								},
								{},
								{
									default: () => {
										return `${
											innerWidth < 1150
												? `<a class="logo svelte-17hh9h4" href="/">${validate_component(
														Image,
														'Image'
													).$$render(
														$$result,
														{
															src: '/images/logo/rahoff-scale-1.svg',
															alt: 'RaHoff'
														},
														{},
														{}
													)}</a> ${validate_component(Button, 'Button').$$render(
														$$result,
														{
															big: true,
															borderless: true,
															style: 'margin-left: auto;'
														},
														{},
														{
															default: () => {
																return `${validate_component(Image, 'Image').$$render(
																	$$result,
																	{
																		src: '/images/icons/three-stripes.svg',
																		alt: 'Menu'
																	},
																	{},
																	{}
																)}`;
															}
														}
													)}`
												: `<a class="logo svelte-17hh9h4" href="/">${validate_component(
														Image,
														'Image'
													).$$render(
														$$result,
														{
															src: '/images/logo/rahoff-scale-1.svg',
															alt: 'RaHoff'
														},
														{},
														{}
													)}</a> <div style="margin-left: auto;" data-svelte-h="svelte-18pnogt"><a href="/" class="svelte-17hh9h4">Start</a> <a class="element svelte-17hh9h4" href="/Schmuck">💎 Schmuck</a> <a class="element svelte-17hh9h4" href="/Bilder">🎨 Bilder</a> <a class="element svelte-17hh9h4" href="/Skulpturen">🔨 Skulpturen</a> <a class="element svelte-17hh9h4" href="/Elektroauto">⚡ Elektroauto</a> <a class="element svelte-17hh9h4" href="mailto:rahoff@email.de?subject=[rahoff.enforge.de] Anfrage" target="_blank" rel="noopener nofollow noreferrer">✉ Kontakt</a></div>`
										}`;
									}
								}
							)}`;
						}
					}
				)}`;
			}
		}
	)} ${
		innerWidth < 1150 && mobileNavigationVisible
			? `${validate_component(Container, 'Container').$$render(
					$$result,
					{
						style: 'margin-bottom: auto; margin-top: auto;'
					},
					{},
					{
						default: () => {
							return `${validate_component(Container, 'Container').$$render(
								$$result,
								{
									vertical: true,
									spaced: true,
									fullWidth: true,
									style: 'font-size:1.5rem;'
								},
								{},
								{
									default: () => {
										return `<a href="/" class="svelte-17hh9h4" data-svelte-h="svelte-1f2xjkm">Start</a> <a href="/Schmuck" class="svelte-17hh9h4" data-svelte-h="svelte-z29661">💎 Schmuck</a> <a href="/Bilder" class="svelte-17hh9h4" data-svelte-h="svelte-1e3tnl2">🎨 Bilder</a> <a href="/Skulpturen" class="svelte-17hh9h4" data-svelte-h="svelte-1s3x2vl">🔨 Skulpturen</a> <a href="/Elektroauto" class="svelte-17hh9h4" data-svelte-h="svelte-lo3mtv">⚡ Elektroauto</a> <a href="mailto:rahoff@email.de?subject=[rahoff.enforge.de] Anfrage" target="_blank" rel="noopener nofollow noreferrer" class="svelte-17hh9h4" data-svelte-h="svelte-1ubuesj">✉ Kontakt</a>`;
									}
								}
							)}`;
						}
					}
				)}`
			: ``
	} </header>`;
});
const Footer_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: 'footer.svelte-15k4mrt{margin-top:3rem;text-align:center}',
	map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$1);
	return `<footer class="svelte-15k4mrt" data-svelte-h="svelte-1xcdmka"><a href="/Impressum">Impressum</a> <a href="/Datenschutz">Datenschutz</a> <br>© by RaHoff
  <br>Made with ❤️ by <a href="https://github.com//thetillhoff">thetillhoff</a> </footer>`;
});
const styles = '';
const _layout_svelte_svelte_type_style_lang = '';
const css = {
	code: 'html{height:100%}body{min-height:100%;display:flex;justify-content:normal;align-items:center;flex-direction:column;margin:0;background-color:hsla(0,0%,90%,1);font-size:1rem}*{font-family:"Open Sans", sans-serif;color:hsla(0, 0%, 10%, 1);box-sizing:content-box;border-color:hsla(0, 0%, 20%, 1);transition:all 0.1s ease-in-out}p{line-height:1.5}.centeredContent{margin-top:auto}',
	map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `${validate_component(Header, 'Header').$$render($$result, {}, {}, {})} ${validate_component(
		Container,
		'Container'
	).$$render(
		$$result,
		{
			fullWidth: true,
			style: 'margin-bottom: auto; margin-top: auto;'
		},
		{},
		{
			default: () => {
				return `${
					slots.default
						? slots.default({})
						: `
		This page is currently under development.
  `
				}`;
			}
		}
	)} ${validate_component(Footer, 'Footer').$$render($$result, {}, {}, {})}`;
});
export { Layout as default };
