import { Z as slot, T as fallback, V as attr, a3 as stringify, a1 as escape_html, _ as bind_props } from "./index.js";
import { I as Image } from "./Image.js";
function ElementGrid($$payload, $$props) {
  $$payload.out.push(`<div class="svelte-10netpt"><!---->`);
  slot($$payload, $$props, "default", {}, null);
  $$payload.out.push(`<!----></div>`);
}
function ElementPanel($$payload, $$props) {
  let name = fallback($$props["name"], "Name is missing");
  let src = fallback($$props["src"], "");
  let href = fallback($$props["href"], "");
  $$payload.out.push(`<a${attr("href", href)} class="elementPanel svelte-1kpzxo9">`);
  Image($$payload, { src, alt: `Image of ${stringify(name)}` });
  $$payload.out.push(`<!----> <span class="svelte-1kpzxo9">${escape_html(name)}</span></a>`);
  bind_props($$props, { name, src, href });
}
export {
  ElementGrid as E,
  ElementPanel as a
};
