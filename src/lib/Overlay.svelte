<script>
	import Button from '$lib/Button.svelte';

	export let visible = false;
	export let manual = false;
</script>

{#if manual}
	<div
		style={$$props.style}
		on:click={(e) => {
			visible = true;
		}}
	>
		<slot name="activator"></slot>
	</div>
	<div
		class:visible
		class="overlay"
		on:click={(e) => {
			visible = false;
		}}
	>
		<Button style="position: fixed; right: 3rem; top: 3rem;">close</Button>
		<div
			class="content"
			on:click={(e) => {
				e.stopPropagation();
			}}
		>
			<slot name="content">empty overlay!</slot>
		</div>
	</div>
{:else}
	<div class:visible class="overlay">
		<div class="content">
			<slot name="content">empty overlay!</slot>
		</div>
	</div>
{/if}

<style>
	:global(.overlay) {
		position: fixed;
		visibility: hidden;

		width: 100%;
		height: 100%;

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		background-color: hsla(240, 100%, 50%, 1);
	}

	:global(.content) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		background-color: rgba(255, 255, 255, 0.9); /* Black background with opacity */
	}

	:global(.visible) {
		animation: slide-menu 2s ease-in-out 1 forwards;
	}

	@keyframes slide-menu {
		from {
			visibility: hidden;
		}
		to {
			visibility: visible;
		}
	}
</style>
