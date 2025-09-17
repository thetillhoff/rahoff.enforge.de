import { a2 as head, V as attr, a3 as stringify, a4 as spread_props, a5 as ensure_array_like, a1 as escape_html } from "../../../../../chunks/index.js";
import { C as Container } from "../../../../../chunks/Container.js";
import { B as Breadcrumbs } from "../../../../../chunks/Breadcrumbs.js";
import { G as Gallery, h as html } from "../../../../../chunks/Gallery.js";
/* empty css                                                        */
function _page($$payload) {
  let innerWidth;
  const gallery = {
    mainImageSource: "/images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde.jpg",
    galleryImageSources: [
      "/images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde.jpg",
      "/images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde_1.jpg",
      "/images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde_2.jpg",
      "/images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde_3.jpg"
    ]
  };
  const title = "Gebogene Ronde";
  const properties = [
    "Massives Silber",
    "Handgeschmiedet",
    "Breite der gebogenen Ronde: 14 mm",
    "Breite der Ringschiene von 5 mm bis 7 mm wechselnd"
  ];
  const description = `Sehr schöner Kontrast zwischen der Glanz-Ronde und dem glitzernden Hammerschlag des Ringkörpers.
  <br/><br/>
  Größe nach Ihren Vorgaben.`;
  innerWidth = 0;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Gebogene Ronde</title>`;
    $$payload2.out.push(`<meta name="description"${attr("content", `Rahoff ${stringify(title)}`)}/>`);
  });
  Container($$payload, {
    vertical: true,
    centered: true,
    textContainer: true,
    verticalCenteredContent: true,
    children: ($$payload2) => {
      Breadcrumbs($$payload2, {
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->/ <a href="/Schmuck">Schmuck</a> / <a href="/Schmuck/Ringe">Ringe</a>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <h1>Gebogene Ronde</h1> `);
      Container($$payload2, {
        vertical: true,
        style: "background-color: #fff; padding: 1rem; border-radius: 10px;",
        children: ($$payload3) => {
          if (innerWidth < 1150) {
            $$payload3.out.push("<!--[-->");
            Container($$payload3, {
              vertical: true,
              children: ($$payload4) => {
                Gallery($$payload4, spread_props([gallery]));
                $$payload4.out.push(`<!----> `);
                Container($$payload4, {
                  vertical: true,
                  style: "padding-top: 3rem;",
                  children: ($$payload5) => {
                    const each_array = ensure_array_like(properties);
                    $$payload5.out.push(`<strong>Abgebildete Ausführung:</strong> <ul><!--[-->`);
                    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                      let property = each_array[$$index];
                      $$payload5.out.push(`<li>${escape_html(property)}</li>`);
                    }
                    $$payload5.out.push(`<!--]--></ul>`);
                  },
                  $$slots: { default: true }
                });
                $$payload4.out.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> <strong style="padding-top: 2rem;">Beschreibung:</strong> <p>${html(description)}</p>`);
          } else {
            $$payload3.out.push("<!--[!-->");
            Container($$payload3, {
              fullWidth: true,
              children: ($$payload4) => {
                Gallery($$payload4, spread_props([{ style: "width: 50%;" }, gallery]));
                $$payload4.out.push(`<!----> <div style="width: 2rem;"></div> `);
                Container($$payload4, {
                  vertical: true,
                  style: "padding-top: 2rem;",
                  children: ($$payload5) => {
                    const each_array_1 = ensure_array_like(properties);
                    $$payload5.out.push(`<strong style="margin-left: 1rem;">Abgebildete Ausführung:</strong> <ul><!--[-->`);
                    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                      let property = each_array_1[$$index_1];
                      $$payload5.out.push(`<li>${escape_html(property)}</li>`);
                    }
                    $$payload5.out.push(`<!--]--></ul>`);
                  },
                  $$slots: { default: true }
                });
                $$payload4.out.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> <strong style="padding-top: 3rem;">Beschreibung:</strong> <p>${html(description)}</p>`);
          }
          $$payload3.out.push(`<!--]-->`);
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
