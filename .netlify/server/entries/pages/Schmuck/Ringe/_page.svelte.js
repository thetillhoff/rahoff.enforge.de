import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Container } from "../../../../chunks/Container.js";
import { B as Breadcrumbs } from "../../../../chunks/Breadcrumbs.js";
import { E as ElementGrid, a as ElementPanel } from "../../../../chunks/ElementPanel.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-ui484d_START -->${$$result.title = `<title>Ringe</title>`, ""}<meta name="description" content="Rahoff Ringe"><!-- HEAD_svelte-ui484d_END -->`, ""} ${validate_component(Container, "Container").$$render(
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
        return `${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, {}, {}, {
          default: () => {
            return `/ <a href="/Schmuck" data-svelte-h="svelte-16ithaz">Schmuck</a>`;
          }
        })} <h1 data-svelte-h="svelte-17f6pjv">Ringe</h1> ${validate_component(ElementGrid, "ElementGrid").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(ElementPanel, "ElementPanel").$$render(
              $$result,
              {
                name: "Eichenstein",
                src: "/images/Schmuck/Ringe/Eichenstein/Eichenstein.jpg",
                href: "/Schmuck/Ringe/Eichenstein"
              },
              {},
              {}
            )} ${validate_component(ElementPanel, "ElementPanel").$$render(
              $$result,
              {
                name: "Gebogene Ronde",
                src: "/images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde.jpg",
                href: "/Schmuck/Ringe/Gebogene_Ronde"
              },
              {},
              {}
            )} ${validate_component(ElementPanel, "ElementPanel").$$render(
              $$result,
              {
                name: "Lichtreflexe Classic",
                src: "/images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic.jpg",
                href: "/Schmuck/Ringe/Lichtreflexe_Classic"
              },
              {},
              {}
            )} ${validate_component(ElementPanel, "ElementPanel").$$render(
              $$result,
              {
                name: "Lichtreflexe Modern",
                src: "/images/Schmuck/Ringe/Lichtreflexe_Modern/Lichtreflexe_Modern.jpg",
                href: "/Schmuck/Ringe/Lichtreflexe_Modern"
              },
              {},
              {}
            )} ${validate_component(ElementPanel, "ElementPanel").$$render(
              $$result,
              {
                name: "Schwarz-Weiss",
                src: "/images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss.jpg",
                href: "/Schmuck/Ringe/Schwarz-Weiss"
              },
              {},
              {}
            )} ${validate_component(ElementPanel, "ElementPanel").$$render(
              $$result,
              {
                name: "Silberhochzeit",
                src: "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit.jpg",
                href: "/Schmuck/Ringe/Silberhochzeit"
              },
              {},
              {}
            )} ${validate_component(ElementPanel, "ElementPanel").$$render(
              $$result,
              {
                name: "Trauer",
                src: "/images/Schmuck/Ringe/Trauer/Trauer.jpg",
                href: "/Schmuck/Ringe/Trauer"
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    }
  )}`;
});
export {
  Page as default
};
