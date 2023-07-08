<script>
  export let big = false;
  export let large = false;
  export let huge = false;

  export let inline = false;

  export let borderless = false;
</script>

<button id={$$props.id} class={$$props.class} style={$$props.style} class:big class:large class:huge class:inline class:borderless on:click>
  <slot>Button</slot>
</button>

<style>
/* general button styling */
button {
  /* positioning, size */
  /* 0.5 is kind of a random number, but applied on all button paddings */
  padding: calc( 1rem * 0.5);
  height: 1rem;
  min-width: 1rem;

  text-align: center;

  font-size: inherit;

  /* unify button styling */
  display: inline;
  float: left;
  outline: none;
  cursor: pointer;

  /* border */
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;

  /* default button colors
  color: hsla({{ .css.colors.buttonColor.hue }}, {{ .css.colors.buttonColor.saturation }}, {{ .css.colors.buttonColor.lightness }}, {{ .css.colors.buttonColor.alpha }});
  background-color: hsla({{ .css.colors.buttonBgColor.hue }}, {{ .css.colors.buttonBgColor.saturation }}, {{ .css.colors.buttonBgColor.lightness }}, {{ .css.colors.buttonBgColor.alpha }});
  border-color: hsla({{ .css.colors.borderColor.hue }}, {{ .css.colors.borderColor.saturation }}, {{ .css.colors.borderColor.lightness }}, {{ .css.colors.borderColor.alpha }});
  */
}

/* button sizes */
button
{
  padding: calc(1rem * 0.5);
  height: 1rem;
  min-width: 1rem;
  font-size: 1rem;
}
button.large {
  padding: calc(1rem * 1.2 * 0.5);
  height: calc(1rem * 1.2);
  min-width: calc(1rem * 1.2);
  font-size: calc(1rem * 1.2);
}
button.big {
  padding: calc(1rem * 1.4 * 0.5);
  height: calc(1rem * 1.4);
  min-width: calc(1rem * 1.4);
  font-size: calc(1rem * 1.4);
}
button.huge {
  padding: calc(1rem * 1.6 * 0.5);
  height: calc(1rem * 1.6);
  min-width: calc(1rem * 1.6);
  font-size: calc(1rem * 1.6);
}

/* image button sizes */
button.image {
  padding: 0;
  height: calc(1rem + (1rem * 0.5));
}
button.large.image {
  padding: 0;
  height: calc(1rem * 1.2 + (1rem * 1.2 * 0.5));
}
button.big.image {
  padding: 0;
  height: calc(1rem * 1.4 + (1rem * 1.4 * 0.5));
}
button.huge.image {
  padding: 0;
  height: calc(1rem * 1.6 + (1rem * 1.6 * 0.5));
}

/* inline button */
button.inline {
  float: none;
}

/* borderless button */
button.borderless {
  border: none;
}

/* contains multiple buttons */
:global(.buttons) > button {
  margin-left: 0.5rem;
}
:global(.buttons) > button.large {
  margin-left: calc(0.5rem * 1.2);
}
:global(.buttons) > button.big {
  margin-left: calc(0.5rem * 1.4);
}
:global(.buttons) > button.huge {
  margin-left: calc(0.5rem * 1.6);
}
:global(.buttons) > button:first-child {
  margin-left: 0;
}

/* inverted button
button.inverted,
.button.inverted {
  color: hsla({{ .css.colors.buttonBgColor.hue }}, {{ .css.colors.buttonBgColor.saturation }}, {{ .css.colors.buttonBgColor.lightness }}, {{ .css.colors.buttonBgColor.alpha }});
  background-color: hsla({{ .css.colors.buttonColor.hue }}, {{ .css.colors.buttonColor.saturation }}, {{ .css.colors.buttonColor.lightness }}, {{ .css.colors.buttonColor.alpha }});
}

/* primary button styling
button.primary,
.primary.button {
  color: hsla({{ .css.colors.primaryColor.hue }},{{ .css.colors.primaryColor.saturation }},{{ .css.colors.primaryColor.lightness }},{{ .css.colors.primaryColor.alpha }});
  background-color: hsla({{ .css.colors.primaryBgColor.hue }},{{ .css.colors.primaryBgColor.saturation }},{{ .css.colors.primaryBgColor.lightness }},{{ .css.colors.primaryBgColor.alpha }});
}

/* hover button styling
button:hover, button:focus,
.button:hover, .button:focus {
  background-color: hsla({{ .css.colors.buttonBgColor.hue }}, {{ .css.colors.buttonBgColor.saturation }}, {{ addPercentage "-20%" .css.colors.buttonBgColor.lightness }}, {{ .css.colors.buttonBgColor.alpha }});
}
button.inverted:hover, button.inverted:focus,
.button.inverted:hover, .button.inverted:focus {
  background-color: hsla({{ .css.colors.buttonColor.hue }}, {{ .css.colors.buttonColor.saturation }}, {{ addPercentage "20%" .css.colors.buttonColor.lightness }}, {{ .css.colors.buttonColor.alpha }});
}
button.primary:hover, button.primary:focus,
.button.primary:hover, .button.primary:focus {
  background-color: hsla({{ .css.colors.primaryBgColor.hue }}, {{ .css.colors.primaryBgColor.saturation }}, {{ addPercentage "20%" .css.colors.primaryBgColor.lightness }}, {{ .css.colors.primaryBgColor.alpha }});
}
button.primary.inverted:hover, button.primary.inverted:focus,
.button.primary.inverted:hover, .button.primary.inverted:focus {
  background-color: hsla({{ .css.colors.primaryColor.hue }}, {{ .css.colors.primaryColor.saturation }}, {{ addPercentage "20%" .css.colors.primaryColor.lightness }}, {{ .css.colors.primaryColor.alpha }});  
} */

/* icon button */
button.icon {
  height: calc(1rem * 1.2);
  min-width: calc(1rem * 1.2);
  padding: calc(1rem * 0.5 - (1rem * 1.2 - 1rem) / 2);

  /* center contents */
  display: flex;
  justify-content: center;
  align-items: center;
}
button.large.icon {
  height: calc(1rem * 1.2 * 1.2);
  min-width: calc(1rem * 1.2 * 1.2);
  padding: calc(1rem * 1.2 * 0.5 - (1rem * 1.2 * 1.2 - 1rem * 1.2) / 2);
}
button.big.icon {
  height: calc(1rem * 1.2 * 1.4);
  min-width: calc(1rem * 1.2 * 1.4);
  padding: calc(1rem * 1.4 * 0.5 - (1rem * 1.2 * 1.4 - 1rem * 1.4) / 2);
}
button.huge.icon {
  height: calc(1rem * 1.2 * 1.6);
  min-width: calc(1rem * 1.2 * 1.6);
  padding: calc(1rem * 1.6 * 0.5 - (1rem * 1.2 * 1.6 - 1rem * 1.6) / 2);
}
</style>
