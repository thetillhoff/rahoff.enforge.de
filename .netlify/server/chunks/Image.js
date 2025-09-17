import { Q as sanitize_props, N as push, T as fallback, V as attr, W as attr_class, X as attr_style, Y as clsx, _ as bind_props, P as pop } from "./index.js";
/* empty css                                    */
function Image($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  let src = fallback($$props["src"], "");
  let alt = fallback($$props["alt"], "");
  $$payload.out.push(`<img${attr("id", $$sanitized_props.id)}${attr_class(clsx($$sanitized_props.class), "svelte-rq7fm0")}${attr_style($$sanitized_props.style)}${attr("src", src)}${attr("alt", alt)}/>`);
  bind_props($$props, { src, alt });
  pop();
}
export {
  Image as I
};
