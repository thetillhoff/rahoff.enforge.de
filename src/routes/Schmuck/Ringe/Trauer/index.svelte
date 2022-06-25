<script>
	import Page from '$lib/Page.svelte';
  import Container from '$lib/Container.svelte';
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Gallery from '$lib/Gallery.svelte';
  import Image from '$lib/Image.svelte';

  $: innerWidth = 0;

  const gallery = {
    mainImageSource: "/images/Schmuck/Ringe/Trauer/Trauer.jpg",
    galleryImageSources: [
      "/images/Schmuck/Ringe/Trauer/Trauer.jpg",
      "/images/Schmuck/Ringe/Trauer/Trauer_1.jpg",
      "/images/Schmuck/Ringe/Trauer/Trauer_2.jpg",
      "/images/Schmuck/Ringe/Trauer/Trauer_3.jpg",
      "/images/Schmuck/Ringe/Trauer/Trauer_4.jpg",
    ]
  };

  const title = "Silberring Trauer";
  const properties = [
    "Massives Silber",
    "Außen schwarz-oxidiert, dadurch erhält der Ring einen dunklen Grundton",
    "Rundum hammerschlag-geschmiedet",
    "Ränder poliert",
    "Durchgehende Ringschiene",
    "Breite 5 mm",
  ];
  const description = `Ausdruck Ihrer Trauer um einen lieben Menschen durch das Tragen eines Trauerrings. Echte Trauer bedarf weder großer noch vieler Worte.
  <br/><br/>
  Die Schwärze des Rings hellt sich mit der Zeit in geschmackvoller Art auf, so wie sich die Trauer selbst mit der Zeit aufhellen wird. Der Ring kann dem Hinterbliebenen Trost spenden.
  <br/><br/>
  Das letzte Bild zeigt einen Trauerring, der mehrere Monate dauerhaft getragen wurde. Wird meist an linker Hand am Ringfinger oder Mittelfinger getragen.
  <br/><br/>
  Größe, Breite, Dicke nach Ihren Vorgaben.`;

</script>

<svelte:window bind:innerWidth/>

<Page>
  <Container vertical centered textContainer verticalCenteredContent>
    <Breadcrumbs>
      / <a href="/Schmuck">Schmuck</a>
      / <a href="/Schmuck/Ringe">Ringe</a>
    </Breadcrumbs>
    <h1>
      {title}
    </h1>
    <Container vertical style="background-color: #fff; padding: 1rem; border-radius: 10px;">
      {#if innerWidth < 1150}
      <Container vertical>
        <Gallery {...gallery} />
        <Container vertical style="padding-top: 3rem;">
          <strong>Abgebildete Ausführung:</strong>
          <ul>
            {#each properties as property}
            <li>
              {property}
            </li>
            {/each}
          </ul>
        </Container>
      </Container>
      <strong style="padding-top: 2rem;">Beschreibung:</strong>
      <p>
        {@html description}
      </p>
      {:else}
      <Container fullWidth>
        <Gallery style="width: 50%;" {...gallery} />
        <div style="width: 2rem;"></div>
        <Container vertical style="padding-top: 2rem;">
          <strong style="margin-left: 1rem;">Abgebildete Ausführung:</strong>
          <ul>
            {#each properties as property}
            <li>
              {property}
            </li>
            {/each}
          </ul>
        </Container>
      </Container>
      <strong style="padding-top: 3rem;">Beschreibung:</strong>
      <p>
        {@html description}
      </p>
      {/if}
    </Container>
  </Container>
</Page>
