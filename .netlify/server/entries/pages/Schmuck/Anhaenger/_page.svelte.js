import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Container } from "../../../../chunks/Container.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-5l8xa1_START -->${$$result.title = `<title>Halsketten</title>`, ""}<meta name="description" content="Rahoff Halsketten"><!-- HEAD_svelte-5l8xa1_END -->`, ""} ${validate_component(Container, "Container").$$render(
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
        return `<h1 data-svelte-h="svelte-19vd0hp">Anhänger</h1> <p data-svelte-h="svelte-1t475g9">Hier gibt es bisher noch keine Inhalte. Schau doch gerne später nochmal vorbei!</p>`;
      }
    }
  )}`;
});
export {
  Page as default
};
