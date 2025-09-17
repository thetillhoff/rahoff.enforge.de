<script>
	export let src = '';
	export let alt = '';
</script>

<button type="button" class="image-button" on:click>
	<img id={$$props.id} class={$$props.class} style={$$props.style} {src} {alt} />
</button>

<style>
	.image-button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: block;
		width: 100%;
		height: 100%;
	}

	img {
		height: 100%;
		width: 100%;
		max-width: 100%;
		display: block;
		object-fit: contain;
		object-position: center;
		/* border-radius: 5px; */
	}
</style>
