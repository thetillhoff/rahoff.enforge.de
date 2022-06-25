<script>
  import Container from '$lib/Container.svelte';
  import Image from '$lib/Image.svelte';
  import Button from '$lib/Button.svelte';
  import Footer from '$lib/Footer.svelte';
  
  export let centeredContent = false;

  let mobileNavigationVisible = false;

  $: innerWidth = 0;
  $: centeredContentStyle = (centeredContent) ? ' margin-top: auto;' : '';

</script>

<svelte:window bind:innerWidth/>

<Container fullWidth vertical style="border-bottom: 2px solid hsla(240, 100%, 50%, 1);">
  <Container fullWidth verticalCenteredContent horizontalCenteredContent style="border-bottom: 2px solid hsla(240, 100%, 50%, 1);">
    <Container fullWidth textContainer horizontalCenteredContent style="padding-left: 1rem; padding-right: 1rem;">
      {#if innerWidth < 1150}
      <a class="logo" href="/">
        <Image src="/images/logo/rahoff-scale-1.svg" alt="RaHoff"></Image>
      </a>
      <Button big borderless style="margin-left: auto;" on:click={e => {mobileNavigationVisible=!mobileNavigationVisible;}}>
        <Image src="/images/icons/three-stripes.svg" alt="Menu" ></Image>
      </Button>
      {:else}
      <a class="logo" href="/">
        <Image src="/images/logo/rahoff-scale-1.svg" alt="RaHoff"></Image>
      </a>
      <div style="margin-left: auto;">
        <a href="/">
          Start
        </a>
        <a class="element" href="/Schmuck">
          💎 Schmuck
        </a>
        <a class="element" href="/Bilder">
          🎨 Bilder
        </a>
        <a class="element" href="/Skulpturen">
          🔨 Skulpturen
        </a>
        <a class="element" href="/Elektroauto">
          ⚡ Elektroauto
        </a>
        <a class="element" href="mailto:rahoff@email.de?subject=[rahoff.enforge.de] Anfrage" target="_blank" rel="noopener nofollow noreferrer">
          ✉ Kontakt
        </a>
      </div>
      {/if}
    </Container>
  </Container>
</Container>

{#if innerWidth < 1150 && mobileNavigationVisible}
<Container style="margin-bottom: auto; margin-top: auto;">
  <Container vertical spaced style="font-size:1.5rem;">
    <a href="/">
      Start
    </a>
    <a href="/Schmuck">
      💎 Schmuck
    </a>
    <a href="/Bilder">
      🎨 Bilder
    </a>
    <a href="/Skulpturen">
      🔨 Skulpturen
    </a>
    <a href="/Elektroauto">
      ⚡ Elektroauto
    </a>
    <a href="mailto:rahoff@email.de?subject=[rahoff.enforge.de] Anfrage" target="_blank" rel="noopener nofollow noreferrer">
      ✉ Kontakt
    </a>
  </Container>
</Container>
{:else}
<Container fullWidth style="margin-bottom: auto;{centeredContentStyle}">
  <slot>
    This page is currently under development.
  </slot>
</Container>
{/if}

<Footer></Footer>

<style>
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

  a {
    padding: 1rem;
  }

  a:not(.logo) {
    margin-right: 2rem;
  }

  a:hover {
    background-color: hsla(0, 0%, 70%, 1);
  }

  /* :global(.menu) {
    position: relative;
    animation: animatetop 0.4s;
  }
  
  @keyframes animatetop {
    from {
      top: -100%;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  } */
</style>
