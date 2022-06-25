<script>
	import Page from '$lib/Page.svelte';
  import Container from '$lib/Container.svelte';
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Gallery from '$lib/Gallery.svelte';
  import Image from '$lib/Image.svelte';

  $: innerWidth = 0;

  const gallery = {
    mainImageSource: "/images/Schmuck/Ringe/Eichenstein/Eichenstein.jpg",
    galleryImageSources: [
      "/images/Schmuck/Ringe/Eichenstein/Eichenstein.jpg",
      "/images/Schmuck/Ringe/Eichenstein/Eichenstein_1.jpg",
      "/images/Schmuck/Ringe/Eichenstein/Eichenstein_2.jpg",
      "/images/Schmuck/Ringe/Eichenstein/Eichenstein_3.jpg",
      "/images/Schmuck/Ringe/Eichenstein/Eichenstein_4.jpg",
    ]
  };

  const title = "Eichenstein";
  const properties = [
    "Massives Silber",
    "Flanken satiniert",
    "Ränder poliert",
    "Durchgehende Ringschiene",
    "Breite ca. 6 mm",
    "Der Eichenholzstein hat einen Durchmesser von 16 mm",
    "Mit Rundum-Zargen-Fassung beträgt der Durchmesser des Ringsteines 18 mm.",
  ];
  const description = `Der ganz besondere Ring: Der Eichenholzstein wurde so behandelt, dass die Struktur, die Maserung und die Jahresringe des Holzes sehr gut zu erkennen sind. Zu sehen sind die ersten 3 Jahresringe einer mächtigen, alten Eiche...
  <br/><br/>
  Größe, Breite, und Dicke des Rings - den Eichenholzstein gibt es beispielsweise auch in 18 mm - werden nach Ihren Vorgaben gefertigt.`;

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
