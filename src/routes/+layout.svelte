<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Container from '$lib/Container.svelte';
	import './styles.css';
</script>

<Header />

<Container fullWidth style="margin-bottom: auto; margin-top: auto;">
  <slot>
		This page is currently under development.
  </slot>
</Container>

<Footer />

<style>
	:global(html) {
		height: 100%;
	}

  :global(body) {
    min-height: 100%;
    display: flex;
    justify-content: normal;
    align-items: center;
    flex-direction: column;
    margin: 0;

    background-color: hsla(0,0%,90%,1);

    font-size: 1rem;
  }

  :global(*) {
    font-family: "Open Sans", sans-serif;
    color: hsla(0, 0%, 10%, 1);
    box-sizing: content-box; /* remove strange behaviour of some native elements - looking at you _button_! */
    border-color: hsla(0, 0%, 20%, 1);
    /* text-decoration-color: hsla({{ .css.colors.primaryColor.hue }}, {{ .css.colors.primaryColor.saturation }}, {{ .css.colors.primaryColor.lightness }}, {{ .css.colors.primaryColor.alpha }}); */
    transition: all 0.1s ease-in-out;
  }

  :global(p) {
    line-height: 1.5;
  }
  
  :global(.centeredContent) {
    margin-top: auto;
  }
</style>
