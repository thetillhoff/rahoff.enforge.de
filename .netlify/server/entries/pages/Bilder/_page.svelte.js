import { a2 as head } from "../../../chunks/index.js";
import { C as Container } from "../../../chunks/Container.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Bilder</title>`;
    $$payload2.out.push(`<meta name="description" content="Rahoff Bilder"/>`);
  });
  Container($$payload, {
    vertical: true,
    fullWidth: true,
    centered: true,
    textContainer: true,
    children: ($$payload2) => {
      $$payload2.out.push(`<h1>Bilder</h1> <p>Hier gibt es bisher noch keine Inhalte. Schau doch gerne später nochmal vorbei!</p>`);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
