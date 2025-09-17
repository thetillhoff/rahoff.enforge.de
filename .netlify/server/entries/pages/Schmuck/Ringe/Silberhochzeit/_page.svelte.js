import { a2 as head, V as attr, a3 as stringify, a4 as spread_props, a5 as ensure_array_like, a1 as escape_html } from "../../../../../chunks/index.js";
import { C as Container } from "../../../../../chunks/Container.js";
import { B as Breadcrumbs } from "../../../../../chunks/Breadcrumbs.js";
import { G as Gallery, h as html } from "../../../../../chunks/Gallery.js";
/* empty css                                                        */
function _page($$payload) {
  let innerWidth;
  const gallery = {
    mainImageSource: "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit.jpg",
    galleryImageSources: [
      "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit.jpg",
      "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_1.jpg",
      "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_2.jpg",
      "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_3.jpg",
      "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_4.jpg",
      "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_5.jpg"
    ]
  };
  const title = "Zwei Silberringe Silberhochzeit";
  const properties = [
    "Zwei massive Silberringe",
    "In strahlendem Silber",
    "Beide rundum hammerschlag-geschmiedet",
    "Ränder poliert",
    "Durchgehende Ringschiene",
    "Breite jeweils 5 mm"
  ];
  const description = `Sehr schönes Lichtspiel mit brillanten Lichtreflexen durch den handgeschmiedeten, durchgehenden Hammerschlag ringsum.
  <br/><br/>
  Ein originelles Geschenk zur Silberhochzeit. Wird meist an der linken Hand am Ringfinger getragen, zusätzlich zum Ehering an der rechten Hand;
  <br/><br/>
  Ausdruck einer innigen Verbundenheit auch nach 25 Jahren...
  <br/><br/>
  Größe, Breite, Dicke nach Ihren Vorgaben.`;
  innerWidth = 0;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Zwei Silberringe Silberhochzeit</title>`;
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
      $$payload2.out.push(`<!----> <h1>Zwei Silberringe Silberhochzeit</h1> `);
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
