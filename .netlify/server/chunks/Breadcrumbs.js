import { Z as slot } from "./index.js";
function Breadcrumbs($$payload, $$props) {
  $$payload.out.push(`<span class="svelte-15xixqf">Zurück zu: <!---->`);
  slot($$payload, $$props, "default", {}, null);
  $$payload.out.push(`<!----></span>`);
}
export {
  Breadcrumbs as B
};
