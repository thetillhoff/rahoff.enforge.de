import { a2 as head } from "../../../../chunks/index.js";
import { C as Container } from "../../../../chunks/Container.js";
import { B as Breadcrumbs } from "../../../../chunks/Breadcrumbs.js";
import { E as ElementGrid, a as ElementPanel } from "../../../../chunks/ElementPanel.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Ringe</title>`;
    $$payload2.out.push(`<meta name="description" content="Rahoff Ringe"/>`);
  });
  Container($$payload, {
    vertical: true,
    centered: true,
    textContainer: true,
    verticalCenteredContent: true,
    children: ($$payload2) => {
      Breadcrumbs($$payload2, {
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->/ <a href="/Schmuck">Schmuck</a>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <h1>Ringe</h1> `);
      ElementGrid($$payload2, {
        children: ($$payload3) => {
          ElementPanel($$payload3, {
            name: "Eichenstein",
            src: "/images/Schmuck/Ringe/Eichenstein/Eichenstein.jpg",
            href: "/Schmuck/Ringe/Eichenstein"
          });
          $$payload3.out.push(`<!----> `);
          ElementPanel($$payload3, {
            name: "Gebogene Ronde",
            src: "/images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde.jpg",
            href: "/Schmuck/Ringe/Gebogene_Ronde"
          });
          $$payload3.out.push(`<!----> `);
          ElementPanel($$payload3, {
            name: "Lichtreflexe Classic",
            src: "/images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic.jpg",
            href: "/Schmuck/Ringe/Lichtreflexe_Classic"
          });
          $$payload3.out.push(`<!----> `);
          ElementPanel($$payload3, {
            name: "Lichtreflexe Modern",
            src: "/images/Schmuck/Ringe/Lichtreflexe_Modern/Lichtreflexe_Modern.jpg",
            href: "/Schmuck/Ringe/Lichtreflexe_Modern"
          });
          $$payload3.out.push(`<!----> `);
          ElementPanel($$payload3, {
            name: "Schwarz-Weiss",
            src: "/images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss.jpg",
            href: "/Schmuck/Ringe/Schwarz-Weiss"
          });
          $$payload3.out.push(`<!----> `);
          ElementPanel($$payload3, {
            name: "Silberhochzeit",
            src: "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit.jpg",
            href: "/Schmuck/Ringe/Silberhochzeit"
          });
          $$payload3.out.push(`<!----> `);
          ElementPanel($$payload3, {
            name: "Trauer",
            src: "/images/Schmuck/Ringe/Trauer/Trauer.jpg",
            href: "/Schmuck/Ringe/Trauer"
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
