import {
	c as create_ssr_component,
	e as escape,
	v as validate_component,
	h as each
} from '../../../../../chunks/ssr.js';
import { C as Container } from '../../../../../chunks/Container.js';
import { B as Breadcrumbs } from '../../../../../chunks/Breadcrumbs.js';
import { G as Gallery } from '../../../../../chunks/Gallery.js';
/* empty css                                                         */ const title =
	'Zwei Silberringe Schwarz-Weiss';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let innerWidth;
	const gallery = {
		mainImageSource: '/images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss.jpg',
		galleryImageSources: [
			'/images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss.jpg',
			'/images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss_1.jpg',
			'/images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss_2.jpg',
			'/images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss_3.jpg',
			'/images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss_4.jpg'
		]
	};
	const properties = [
		'Zwei massive Silberringe',
		'Der Eine strahlend hell in Silber',
		'Der Andere außen schwarz-oxidiert',
		'Beide rundum hammerschlag-geschmiedet',
		'Ränder poliert',
		'Breite jeweils 5 mm'
	];
	const description = `Sehr schönes Lichtspiel mit brillanten Lichtreflexen durch den handgeschmiedeten, durchgehenden Hammerschlag ringsum.
  <br/><br/>
  Toller Kontrast der Ringe miteinander durch die zwei Farben. Werden nebeneinander zusammen an einem Finger getragen.
  <br/><br/>
  Größe, Breite, Dicke nach Ihren Vorgaben.`;
	innerWidth = 0;
	return ` ${(($$result.head += `<!-- HEAD_svelte-1wtwzc1_START -->${(($$result.title = `<title>${escape(title)}</title>`), '')}<meta name="description" content="${'Rahoff ' + escape(title, true)}"><!-- HEAD_svelte-1wtwzc1_END -->`), '')} ${validate_component(
		Container,
		'Container'
	).$$render(
		$$result,
		{
			vertical: true,
			centered: true,
			textContainer: true,
			verticalCenteredContent: true
		},
		{},
		{
			default: () => {
				return `${validate_component(Breadcrumbs, 'Breadcrumbs').$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `/ <a href="/Schmuck" data-svelte-h="svelte-16ithaz">Schmuck</a>
    / <a href="/Schmuck/Ringe" data-svelte-h="svelte-1foz8y6">Ringe</a>`;
						}
					}
				)} <h1>${escape(title)}</h1> ${validate_component(Container, 'Container').$$render(
					$$result,
					{
						vertical: true,
						style: 'background-color: #fff; padding: 1rem; border-radius: 10px;'
					},
					{},
					{
						default: () => {
							return `${
								innerWidth < 1150
									? `${validate_component(Container, 'Container').$$render(
											$$result,
											{ vertical: true },
											{},
											{
												default: () => {
													return `${validate_component(Gallery, 'Gallery').$$render($$result, Object.assign({}, gallery), {}, {})} ${validate_component(
														Container,
														'Container'
													).$$render(
														$$result,
														{
															vertical: true,
															style: 'padding-top: 3rem;'
														},
														{},
														{
															default: () => {
																return `<strong data-svelte-h="svelte-1utr6cv">Abgebildete Ausführung:</strong> <ul>${each(
																	properties,
																	(property) => {
																		return `<li>${escape(property)} </li>`;
																	}
																)}</ul>`;
															}
														}
													)}`;
												}
											}
										)} <strong style="padding-top: 2rem;" data-svelte-h="svelte-pklq5d">Beschreibung:</strong> <p><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p>`
									: `${validate_component(Container, 'Container').$$render(
											$$result,
											{ fullWidth: true },
											{},
											{
												default: () => {
													return `${validate_component(Gallery, 'Gallery').$$render($$result, Object.assign({}, { style: 'width: 50%;' }, gallery), {}, {})} <div style="width: 2rem;"></div> ${validate_component(
														Container,
														'Container'
													).$$render(
														$$result,
														{
															vertical: true,
															style: 'padding-top: 2rem;'
														},
														{},
														{
															default: () => {
																return `<strong style="margin-left: 1rem;" data-svelte-h="svelte-1stxh2n">Abgebildete Ausführung:</strong> <ul>${each(
																	properties,
																	(property) => {
																		return `<li>${escape(property)} </li>`;
																	}
																)}</ul>`;
															}
														}
													)}`;
												}
											}
										)} <strong style="padding-top: 3rem;" data-svelte-h="svelte-wvoip4">Beschreibung:</strong> <p><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p>`
							}`;
						}
					}
				)}`;
			}
		}
	)}`;
});
export { Page as default };
