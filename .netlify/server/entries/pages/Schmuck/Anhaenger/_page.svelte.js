import { a2 as head } from "../../../../chunks/index.js";
import { C as Container } from "../../../../chunks/Container.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Halsketten</title>`;
    $$payload2.out.push(`<meta name="description" content="Rahoff Halsketten"/>`);
  });
  Container($$payload, {
    vertical: true,
    centered: true,
    textContainer: true,
    verticalCenteredContent: true,
    children: ($$payload2) => {
      $$payload2.out.push(`<h1>Anhänger</h1> <p>Hier gibt es bisher noch keine Inhalte. Schau doch gerne später nochmal vorbei!</p>`);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
