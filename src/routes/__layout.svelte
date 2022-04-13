<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/1bb5768b66.js" crossorigin="anonymous"></script>
	<meta name="description" content="The Home of Indigo Development">
</svelte:head>

<Header />

<main class="overflow-hidden">
	<slot></slot>
</main>

<Footer />