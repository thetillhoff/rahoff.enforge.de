import { c as create_ssr_component, v as validate_component } from '../../chunks/ssr.js';
import { C as Container } from '../../chunks/Container.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${(($$result.head += `<!-- HEAD_svelte-1qt85bx_START -->${(($$result.title = `<title>Intro</title>`), '')}<meta name="description" content="Rahoff Intro"><!-- HEAD_svelte-1qt85bx_END -->`), '')} ${validate_component(
		Container,
		'Container'
	).$$render(
		$$result,
		{
			vertical: true,
			centered: true,
			textContainer: true,
			verticalCenteredContent: true,
			style: 'max-width: 50rem;'
		},
		{},
		{
			default: () => {
				return `<h1 data-svelte-h="svelte-14z58h2">Hallo!
		<br>
		Ich bin Rainer Hoffmann.</h1> <p data-svelte-h="svelte-1tv1ygp">Genie, Milliardär, Playboy, Philanthrop - halt stop, das war <a href="https://de.wikipedia.org/wiki/Iron_Man_(Film)">💥 Tony Stark</a>.
		<br><br>
		Trotzdem spiegelt sich aber eine Leidenschaft für Maschinenbau in meinen Hobbies wider:
		<br>
		Als <a href="/Schmuck">💎 Goldschmied</a>, <a href="/Bilder">🎨 Maler</a>, <a href="/Skulpturen">🔨 Schreiner</a> und nicht zuletzt durch mein selbstgebautes <a href="/Elektroauto">⚡ Elektroauto</a> bin ich in meinem Umfeld bekannt als Künstler und Bastler.
		<br><br>
		Regelmäßig werde ich deshalb nach Bildern gefragt oder möchte jemandem eine Freude mit einem Schmuckstück machen. Beides soll diese Webseite unterstützen.
		<br><br>
		Hier findest Du Bilder und Beschreibungen meiner Werke - wenn Dir etwas besonders gut gefällt oder Du mehr wissen möchtest, freue ich mich auf <a href="mailto:rahoff@email.de?subject=[rahoff.enforge.de] Anfrage">✉ Deine Nachricht</a>!</p>`;
			}
		}
	)}`;
});
export { Page as default };
