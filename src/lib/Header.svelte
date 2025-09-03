<script>
	import Container from '$lib/Container.svelte';
	import Image from '$lib/Image.svelte';
	import Button from '$lib/Button.svelte';

	export let centeredContent = false;

	let mobileNavigationVisible = false;

	$: innerWidth = 0;
	$: centeredContentStyle = centeredContent ? ' margin-top: auto;' : '';
</script>

<svelte:window bind:innerWidth />

<header>
	<Container fullWidth vertical style="border-bottom: 2px solid hsla(240, 100%, 50%, 1);">
		<Container
			fullWidth
			verticalCenteredContent
			horizontalCenteredContent
			style="border-bottom: 2px solid hsla(240, 100%, 50%, 1);"
		>
			<Container
				fullWidth
				textContainer
				horizontalCenteredContent
				style="padding-left: 1rem; padding-right: 1rem;"
			>
				{#if innerWidth < 1150}
					<a class="logo" href="/">
						<Image src="/images/logo/rahoff-scale-1.svg" alt="RaHoff"></Image>
					</a>
					<Button
						big
						borderless
						style="margin-left: auto;"
						on:click={(e) => {
							mobileNavigationVisible = !mobileNavigationVisible;
						}}
					>
						<Image src="/images/icons/three-stripes.svg" alt="Menu"></Image>
					</Button>
				{:else}
					<a class="logo" href="/">
						<Image src="/images/logo/rahoff-scale-1.svg" alt="RaHoff"></Image>
					</a>
					<div style="margin-left: auto;">
						<a href="/"> Start </a>
						<a class="element" href="/Schmuck"> 💎 Schmuck </a>
						<a class="element" href="/Bilder"> 🎨 Bilder </a>
						<a class="element" href="/Skulpturen"> 🔨 Skulpturen </a>
						<a class="element" href="/Elektroauto"> ⚡ Elektroauto </a>
						<a
							class="element"
							href="mailto:rahoff@email.de?subject=[rahoff.enforge.de] Anfrage"
							target="_blank"
							rel="noopener nofollow noreferrer"
						>
							✉ Kontakt
						</a>
					</div>
				{/if}
			</Container>
		</Container>
	</Container>

	{#if innerWidth < 1150 && mobileNavigationVisible}
		<Container style="margin-bottom: auto; margin-top: auto;">
			<Container vertical spaced fullWidth style="font-size:1.5rem;">
				<a href="/"> Start </a>
				<a href="/Schmuck"> 💎 Schmuck </a>
				<a href="/Bilder"> 🎨 Bilder </a>
				<a href="/Skulpturen"> 🔨 Skulpturen </a>
				<a href="/Elektroauto"> ⚡ Elektroauto </a>
				<a
					href="mailto:rahoff@email.de?subject=[rahoff.enforge.de] Anfrage"
					target="_blank"
					rel="noopener nofollow noreferrer"
				>
					✉ Kontakt
				</a>
			</Container>
		</Container>
	{/if}
</header>

<style>
	header {
		width: 100%;
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
</style>
