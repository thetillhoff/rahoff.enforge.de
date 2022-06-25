<script>
	import Page from '$lib/Page.svelte';
  import Container from '$lib/Container.svelte';
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Gallery from '$lib/Gallery.svelte';
  import Image from '$lib/Image.svelte';

  $: innerWidth = 0;

  const gallery = {
    mainImageSource: "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit.jpg",
    galleryImageSources: [
      "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit.jpg",
      "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_1.jpg",
      "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_2.jpg",
      "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_3.jpg",
      "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_4.jpg",
      "/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_5.jpg",
    ]
  };

  const title = "Zwei Silberringe Silberhochzeit";
  const properties = [
    "Zwei massive Silberringe",
    "In strahlendem Silber",
    "Beide rundum hammerschlag-geschmiedet",
    "Ränder poliert",
    "Durchgehende Ringschiene",
    "Breite jeweils 5 mm",
  ];
  const description = `Sehr schönes Lichtspiel mit brillanten Lichtreflexen durch den handgeschmiedeten, durchgehenden Hammerschlag ringsum.
  <br/><br/>
  Ein originelles Geschenk zur Silberhochzeit. Wird meist an der linken Hand am Ringfinger getragen, zusätzlich zum Ehering an der rechten Hand;
  <br/><br/>
  Ausdruck einer innigen Verbundenheit auch nach 25 Jahren...
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
