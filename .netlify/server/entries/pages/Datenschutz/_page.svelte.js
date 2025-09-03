import { c as create_ssr_component, v as validate_component } from '../../../chunks/ssr.js';
import { C as Container } from '../../../chunks/Container.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${(($$result.head += `<!-- HEAD_svelte-arrqad_START -->${(($$result.title = `<title>Datenschutz</title>`), '')}<meta name="description" content="Rahoff Datenschutz"><!-- HEAD_svelte-arrqad_END -->`), '')} ${validate_component(
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
				return `<h1 data-svelte-h="svelte-zjkvgb">Datenschutz</h1> <span data-svelte-h="svelte-1u81dqs">Beim Aufrufen dieser Webseite werden automatisch folgende Daten beim Hosting-Provider gespeichert:
    <ul><li>Ihre IP-Adresse</li> <li>Datum und Uhrzeit Ihres Zugriffs</li> <li>Name und URL der abgerufenen Datei</li> <li>verwendeter Browser &amp; ggf. das verwendete Betriebssystem</li></ul>
    Die genannten Daten werden zu folgenden Zwecken verarbeitet:
    <ul><li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Webseite</li> <li>Gewährleistung einer komfortablen Nutzung der Webseite</li> <li>Auswertung der Systemsicherheit und -stabilität</li> <li>weitere administrative Zwecke</li></ul>
    Die Rechtsgrundlage für die Datenverarbeitung ist Art 6. Abs. 1 S. 1 lit. f DSGVO. In keinem Fall werden die erhobenen Daten zu dem Zweck erhoben, Rückschlüsse auf Ihre Person zu ziehen.</span> <h2 data-svelte-h="svelte-y8mofl">Google Analytics</h2> <span data-svelte-h="svelte-ioqfky">Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (“Google”). Google Analytics verwendet sog. “Cookies”, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</span>`;
			}
		}
	)}`;
});
export { Page as default };
