import { Q as sanitize_props, T as fallback, V as attr, W as attr_class, X as attr_style, Y as clsx, Z as slot, _ as bind_props, P as pop, N as push } from "./index.js";
function Container($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  let textContainer = fallback($$props["textContainer"], false);
  let vertical = fallback($$props["vertical"], false);
  let spaced = fallback($$props["spaced"], false);
  let verticalCenteredContent = fallback($$props["verticalCenteredContent"], false);
  let horizontalCenteredContent = fallback($$props["horizontalCenteredContent"], false);
  let fullWidth = fallback($$props["fullWidth"], false);
  let centered = fallback($$props["centered"], false);
  let hidden = fallback($$props["hidden"], false);
  $$payload.out.push(`<div${attr("id", $$sanitized_props.id)}${attr_class(clsx($$sanitized_props.class), "svelte-1gvrdt0", {
    "textContainer": textContainer,
    "fullWidth": fullWidth,
    "centered": centered,
    "vertical": vertical,
    "spaced": spaced,
    "verticalCenteredContent": verticalCenteredContent,
    "horizontalCenteredContent": horizontalCenteredContent,
    "hidden": hidden
  })}${attr_style($$sanitized_props.style)}><!---->`);
  slot($$payload, $$props, "default", {}, () => {
    $$payload.out.push(`Empty Container component`);
  });
  $$payload.out.push(`<!----></div>`);
  bind_props($$props, {
    textContainer,
    vertical,
    spaced,
    verticalCenteredContent,
    horizontalCenteredContent,
    fullWidth,
    centered,
    hidden
  });
  pop();
}
export {
  Container as C
};
