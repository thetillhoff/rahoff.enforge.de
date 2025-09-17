import { Q as sanitize_props, N as push, T as fallback, V as attr, W as attr_class, X as attr_style, Y as clsx, Z as slot, _ as bind_props, P as pop } from "../../chunks/index.js";
import { C as Container } from "../../chunks/Container.js";
import { I as Image } from "../../chunks/Image.js";
import "clsx";
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  let big = fallback($$props["big"], false);
  let large = fallback($$props["large"], false);
  let huge = fallback($$props["huge"], false);
  let inline = fallback($$props["inline"], false);
  let borderless = fallback($$props["borderless"], false);
  $$payload.out.push(`<button${attr("id", $$sanitized_props.id)}${attr_class(clsx($$sanitized_props.class), "svelte-c69lp6", {
    "big": big,
    "large": large,
    "huge": huge,
    "inline": inline,
    "borderless": borderless
  })}${attr_style($$sanitized_props.style)}><!---->`);
  slot($$payload, $$props, "default", {}, () => {
    $$payload.out.push(`Button`);
  });
  $$payload.out.push(`<!----></button>`);
  bind_props($$props, { big, large, huge, inline, borderless });
  pop();
}
function Header($$payload, $$props) {
  let innerWidth;
  let centeredContent = fallback($$props["centeredContent"], false);
  innerWidth = 0;
  $$payload.out.push(`<header class="svelte-luwwf2">`);
  Container($$payload, {
    fullWidth: true,
    vertical: true,
    style: "border-bottom: 2px solid hsla(240, 100%, 50%, 1);",
    children: ($$payload2) => {
      Container($$payload2, {
        fullWidth: true,
        verticalCenteredContent: true,
        horizontalCenteredContent: true,
        style: "border-bottom: 2px solid hsla(240, 100%, 50%, 1);",
        children: ($$payload3) => {
          Container($$payload3, {
            fullWidth: true,
            textContainer: true,
            horizontalCenteredContent: true,
            style: "padding-left: 1rem; padding-right: 1rem;",
            children: ($$payload4) => {
              if (innerWidth < 1150) {
                $$payload4.out.push("<!--[-->");
                $$payload4.out.push(`<a class="logo svelte-luwwf2" href="/">`);
                Image($$payload4, { src: "/images/logo/rahoff-scale-1.svg", alt: "RaHoff" });
                $$payload4.out.push(`<!----></a> `);
                Button($$payload4, {
                  big: true,
                  borderless: true,
                  style: "margin-left: auto;",
                  children: ($$payload5) => {
                    Image($$payload5, { src: "/images/icons/three-stripes.svg", alt: "Menu" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out.push(`<!---->`);
              } else {
                $$payload4.out.push("<!--[!-->");
                $$payload4.out.push(`<a class="logo svelte-luwwf2" href="/">`);
                Image($$payload4, { src: "/images/logo/rahoff-scale-1.svg", alt: "RaHoff" });
                $$payload4.out.push(`<!----></a> <div style="margin-left: auto;"><a href="/" class="svelte-luwwf2">Start</a> <a class="element svelte-luwwf2" href="/Schmuck">💎 Schmuck</a> <a class="element svelte-luwwf2" href="/Bilder">🎨 Bilder</a> <a class="element svelte-luwwf2" href="/Skulpturen">🔨 Skulpturen</a> <a class="element svelte-luwwf2" href="/Elektroauto">⚡ Elektroauto</a> <a class="element svelte-luwwf2" href="mailto:rahoff@email.de?subject=[rahoff.enforge.de] Anfrage" target="_blank" rel="noopener nofollow noreferrer">✉ Kontakt</a></div>`);
              }
              $$payload4.out.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></header>`);
  bind_props($$props, { centeredContent });
}
function Footer($$payload) {
  $$payload.out.push(`<footer class="svelte-mbjs1l"><a href="/Impressum">Impressum</a> <a href="/Datenschutz">Datenschutz</a> <br/>© by RaHoff <br/>Made with ❤️ by <a href="https://github.com//thetillhoff">thetillhoff</a></footer>`);
}
function _layout($$payload, $$props) {
  Header($$payload, {});
  $$payload.out.push(`<!----> `);
  Container($$payload, {
    fullWidth: true,
    style: "margin-bottom: auto; margin-top: auto;",
    children: ($$payload2) => {
      $$payload2.out.push(`<!---->`);
      slot($$payload2, $$props, "default", {}, () => {
        $$payload2.out.push(`This page is currently under development.`);
      });
      $$payload2.out.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Footer($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _layout as default
};
