<script>
	import Container from '$lib/Container.svelte';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import ElementGrid from '$lib/ElementGrid.svelte';
	import ElementPanel from '$lib/ElementPanel.svelte';
</script>

<svelte:head>
	<title>Ringe</title>
	<meta name="description" content="Rahoff Ringe" />
</svelte:head>

<Container vertical centered textContainer verticalCenteredContent>
	<Breadcrumbs>
		/ <a href="/Schmuck">Schmuck</a>
	</Breadcrumbs>
	<h1>Ringe</h1>
	<ElementGrid>
		<ElementPanel
			name="Eichenstein"
			src="/images/Schmuck/Ringe/Eichenstein/Eichenstein.jpg"
			href="/Schmuck/Ringe/Eichenstein"
		></ElementPanel>
		<ElementPanel
			name="Gebogene Ronde"
			src="/images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde.jpg"
			href="/Schmuck/Ringe/Gebogene_Ronde"
		></ElementPanel>
		<ElementPanel
			name="Lichtreflexe Classic"
			src="/images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic.jpg"
			href="/Schmuck/Ringe/Lichtreflexe_Classic"
		></ElementPanel>
		<ElementPanel
			name="Lichtreflexe Modern"
			src="/images/Schmuck/Ringe/Lichtreflexe_Modern/Lichtreflexe_Modern.jpg"
			href="/Schmuck/Ringe/Lichtreflexe_Modern"
		></ElementPanel>
		<ElementPanel
			name="Schwarz-Weiss"
			src="/images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss.jpg"
			href="/Schmuck/Ringe/Schwarz-Weiss"
		></ElementPanel>
		<ElementPanel
			name="Silberhochzeit"
			src="/images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit.jpg"
			href="/Schmuck/Ringe/Silberhochzeit"
		></ElementPanel>
		<ElementPanel
			name="Trauer"
			src="/images/Schmuck/Ringe/Trauer/Trauer.jpg"
			href="/Schmuck/Ringe/Trauer"
		></ElementPanel>
	</ElementGrid>
</Container>

<style>
</style>
