import { a2 as head } from "../../chunks/index.js";
import { C as Container } from "../../chunks/Container.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Intro</title>`;
    $$payload2.out.push(`<meta name="description" content="Rahoff Intro"/>`);
  });
  Container($$payload, {
    vertical: true,
    centered: true,
    textContainer: true,
    verticalCenteredContent: true,
    style: "max-width: 50rem;",
    children: ($$payload2) => {
      $$payload2.out.push(`<h1>Hallo! <br/> Ich bin Rainer Hoffmann.</h1> <p>Genie, Milliardär, Playboy, Philanthrop - halt stop, das war <a href="https://de.wikipedia.org/wiki/Iron_Man_(Film)">💥 Tony Stark</a>. <br/><br/> Trotzdem spiegelt sich aber eine Leidenschaft für Maschinenbau in meinen Hobbies wider: <br/> Als <a href="/Schmuck">💎 Goldschmied</a>, <a href="/Bilder">🎨 Maler</a>, <a href="/Skulpturen">🔨 Schreiner</a> und nicht zuletzt durch mein selbstgebautes <a href="/Elektroauto">⚡ Elektroauto</a> bin ich in
		meinem Umfeld bekannt als Künstler und Bastler. <br/><br/> Regelmäßig werde ich deshalb nach Bildern gefragt oder möchte jemandem eine Freude mit einem Schmuckstück
		machen. Beides soll diese Webseite unterstützen. <br/><br/> Hier findest Du Bilder und Beschreibungen meiner Werke - wenn Dir etwas besonders gut gefällt oder
		Du mehr wissen möchtest, freue ich mich auf <a href="mailto:rahoff@email.de?subject=[rahoff.enforge.de] Anfrage">✉ Deine Nachricht</a>!</p>`);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
