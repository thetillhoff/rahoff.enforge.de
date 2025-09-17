import { Q as sanitize_props, N as push, T as fallback, V as attr, a5 as ensure_array_like, _ as bind_props, P as pop } from "./index.js";
import { C as Container } from "./Container.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Gallery($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  let mainImageSource = fallback($$props["mainImageSource"], "");
  let galleryImageSources = fallback($$props["galleryImageSources"], () => [""], true);
  Container($$payload, {
    id: $$sanitized_props.id,
    class: $$sanitized_props.class,
    style: $$sanitized_props.style,
    vertical: true,
    fullWidth: true,
    children: ($$payload2) => {
      $$payload2.out.push(`<div class="galleryMain svelte-jj5ub7"><img${attr("src", mainImageSource)} alt="Active entry of the gallery"/></div> `);
      Container($$payload2, {
        class: "galleryList",
        spaced: true,
        children: ($$payload3) => {
          const each_array = ensure_array_like(galleryImageSources);
          $$payload3.out.push(`<!--[-->`);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let galleryImageSource = each_array[$$index];
            $$payload3.out.push(`<img${attr("src", galleryImageSource)} alt="Entry in the gallery"/>`);
          }
          $$payload3.out.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  bind_props($$props, { mainImageSource, galleryImageSources });
  pop();
}
export {
  Gallery as G,
  html as h
};
