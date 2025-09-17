import { a2 as head } from "../../../chunks/index.js";
import { C as Container } from "../../../chunks/Container.js";
import { E as ElementGrid, a as ElementPanel } from "../../../chunks/ElementPanel.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Schmuck</title>`;
    $$payload2.out.push(`<meta name="description" content="Rahoff Schmuck"/>`);
  });
  Container($$payload, {
    vertical: true,
    fullWidth: true,
    centered: true,
    textContainer: true,
    children: ($$payload2) => {
      $$payload2.out.push(`<h1>Schmuck</h1> `);
      ElementGrid($$payload2, {
        children: ($$payload3) => {
          ElementPanel($$payload3, {
            name: "Ringe",
            src: "/images/Schmuck/Ringe/Eichenstein/Eichenstein.jpg",
            href: "/Schmuck/Ringe"
          });
          $$payload3.out.push(`<!----> `);
          ElementPanel($$payload3, {
            name: "Halsketten",
            src: "/images/logo/rahoff-scale-1.svg",
            href: "/Schmuck/Halsketten"
          });
          $$payload3.out.push(`<!----> `);
          ElementPanel($$payload3, {
            name: "Anhänger",
            src: "/images/logo/rahoff-scale-1.svg",
            href: "/Schmuck/Anhaenger"
          });
          $$payload3.out.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!---->`);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
