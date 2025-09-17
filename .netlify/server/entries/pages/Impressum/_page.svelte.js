import { a2 as head } from "../../../chunks/index.js";
import { C as Container } from "../../../chunks/Container.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Impressum</title>`;
    $$payload2.out.push(`<meta name="description" content="Rahoff Impressum"/>`);
  });
  Container($$payload, {
    vertical: true,
    centered: true,
    textContainer: true,
    verticalCenteredContent: true,
    children: ($$payload2) => {
      $$payload2.out.push(`<h1>Impressum</h1> <span>Angaben gemäß § 5 TMG.</span> <h2>Verantwortlich</h2> <span>Rainer Hoffmann <br/> Mittelweg 10 <br/> 88483 Burgrieden</span> <h2>Kontakt</h2> <span>rahoff@email.de</span> <h2>Haftung für Inhalte</h2> <span>Die Inhalte dieser Webseite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
		Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als
		Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
		allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
		nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
		Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
		Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
		hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
		einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
		Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</span>`);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
