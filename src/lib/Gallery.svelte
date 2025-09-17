<script>
	import Container from '$lib/Container.svelte';
	import { onMount } from 'svelte';

	export let mainImageSource = '';
	export let galleryImageSources = [''];

	let galleryImage;
</script>

<Container id={$$props.id} class={$$props.class} style={$$props.style} vertical fullWidth>
	<div class="galleryMain">
		<img bind:this={galleryImage} src={mainImageSource} alt="Active entry of the gallery" />
	</div>
	<Container class="galleryList" spaced>
		{#each galleryImageSources as galleryImageSource}
			<button
				type="button"
				class="gallery-thumbnail"
				on:click={() => {
					if (galleryImage.src != galleryImageSource) {
						galleryImage.src = galleryImageSource;
					}
				}}
			>
				<img src={galleryImageSource} alt="Entry in the gallery" />
			</button>
		{/each}
	</Container>
</Container>

<style>
	div {
		width: 100%;
		margin-bottom: 1rem;
	}

	:global(img) {
		border-radius: 5px;
	}

	.galleryMain {
		height: 20rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.galleryMain :global(img) {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		object-position: center;
	}

	:global(.galleryList) :global(.gallery-thumbnail) {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		width: 100%;
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:global(.galleryList) :global(.gallery-thumbnail img) {
		max-height: 100%;
		max-width: 100%;
		object-fit: contain;
		object-position: center;
	}
</style>
