<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/1bb5768b66.js" crossorigin="anonymous"></script>
</svelte:head>

<Header />

<main class="overflow-hidden">
	<slot></slot>
</main>

<footer>

</footer>