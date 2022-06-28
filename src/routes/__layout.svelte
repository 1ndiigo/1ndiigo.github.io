<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	let scrollY = 0
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<script src="https://kit.fontawesome.com/1bb5768b66.js" crossorigin="anonymous" async></script>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;600;700&display=swap">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<meta name="description" content="The Home of Indigo Development">
</svelte:head>

<Header />

<main class="overflow-hidden">
	<slot></slot>
</main>

<Footer />