import { c as create_ssr_component, v as validate_component } from '../../../chunks/ssr.js';
import { C as Container } from '../../../chunks/Container.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${(($$result.head += `<!-- HEAD_svelte-j4zlqd_START -->${(($$result.title = `<title>Impressum</title>`), '')}<meta name="description" content="Rahoff Impressum"><!-- HEAD_svelte-j4zlqd_END -->`), '')} ${validate_component(
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
				return `<h1 data-svelte-h="svelte-140t1a5">Impressum</h1> <span data-svelte-h="svelte-p5tf3w">Angaben gemäß § 5 TMG.</span> <h2 data-svelte-h="svelte-1ujv6yo">Verantwortlich</h2> <span data-svelte-h="svelte-1phqqtt">Rainer Hoffmann
    <br>
    Mittelweg 10
    <br>
    88483 Burgrieden</span> <h2 data-svelte-h="svelte-15151ka">Kontakt</h2> <span data-svelte-h="svelte-ehv32j">rahoff@email.de</span> <h2 data-svelte-h="svelte-1frtgzy">Haftung für Inhalte</h2> <span data-svelte-h="svelte-1gsuztx">Die Inhalte dieser Webseite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</span>`;
			}
		}
	)}`;
});
export { Page as default };
