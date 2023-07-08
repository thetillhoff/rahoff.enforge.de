import { c as create_ssr_component, b as add_attribute, e as escape, d as null_to_empty } from "./ssr.js";
/* empty css                                     */const css = {
  code: "img.svelte-1y1o7c8{height:100%;max-width:100%;display:block;object-fit:cover}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css);
  return `<img${add_attribute("id", $$props.id, 0)} class="${escape(null_to_empty($$props.class), true) + " svelte-1y1o7c8"}"${add_attribute("style", $$props.style, 0)}${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}>`;
});
export {
  Image as I
};
