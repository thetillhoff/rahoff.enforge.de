<script>
	import Container from '$lib/Container.svelte';
	import ElementGrid from '$lib/ElementGrid.svelte';
	import ElementPanel from '$lib/ElementPanel.svelte';
</script>

<svelte:head>
	<title>Schmuck</title>
	<meta name="description" content="Rahoff Schmuck" />
</svelte:head>

<Container vertical fullWidth centered textContainer>
	<h1>Schmuck</h1>
	<ElementGrid>
		<ElementPanel
			name="Ringe"
			src="/images/Schmuck/Ringe/Eichenstein/Eichenstein.jpg"
			href="/Schmuck/Ringe"
		></ElementPanel>
		<ElementPanel name="Halsketten" src="/images/logo/rahoff-scale-1.svg" href="/Schmuck/Halsketten"
		></ElementPanel>
		<ElementPanel name="Anhänger" src="/images/logo/rahoff-scale-1.svg" href="/Schmuck/Anhaenger"
		></ElementPanel>
	</ElementGrid>
</Container>

<style>
</style>
