<script>
  import Container from '$lib/Container.svelte';
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Gallery from '$lib/Gallery.svelte';
  import Image from '$lib/Image.svelte';

  $: innerWidth = 0;

  const gallery = {
    mainImageSource: "/images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic.jpg",
    galleryImageSources: [
      "/images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic.jpg",
      "/images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic_1.jpg",
      "/images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic_2.jpg",
      "/images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic_3.jpg",
    ]
  };

  const title = "Lichtreflexe Classic";
  const properties = [
    "Massives Silber",
    "Rundum hammerschlag-geschmiedet",
    "Ränder poliert",
    "Breite der Ringschiene hier im bild 10,1 mm",
  ];
  const description = `Sehr schönes Lichtspiel mit brillanten Lichtreflexen durch den handgeschmiedeten, durchgehenden Hammerschlag ringsum.
  <br/>
  Klassische Form. Zeitlos schön.
  <br/><br/>
  Größe, Breite, Dicke nach Ihren Vorgaben. `;
</script>

<svelte:window bind:innerWidth/>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Rahoff {title}" />
</svelte:head>

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

<style>
</style>
