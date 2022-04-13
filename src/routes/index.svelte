<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import About from '$lib/About.svelte';
	
	let scrollY = 0;
</script>

<svelte:head>
	<title>Home | Indigo Development</title>
</svelte:head>

<svelte:window bind:scrollY />

<section class="transition-all duration-500 {scrollY < 50 ? 'bg-indigo-700' : 'bg-zinc-900'}">
	<div id="heading" class="flex flex-col items-center justify-between w-full h-screen relative">
		<div id="top" />
		<div class="{scrollY < 50 ? 'opacity-100' : 'opacity-0'} transition-all">
			<i class="fa-solid fa-circle absolute text-[32rem] {scrollY < 50 ? 'opacity-5' : 'opacity-0'} z-0 text-white -top-32 -left-64"></i>
			<i class="fa-solid fa-circle absolute text-[32rem] {scrollY < 50 ? 'opacity-5' : 'opacity-0'} z-0 text-white top-1/4 -right-64"></i>
			<h1 class="text-white font-semibold text-5xl md:text-6xl slide-fade-x transition-all px-16">
				lazy devs = best devs
			</h1>
		</div>
		<div class="flex flex-col items-center justify-center py-4 transition-all {scrollY < 50 ? '' : 'opacity-0'}">
			<p class="text-white font-medium text-lg pb-2">Scroll down!</p>
			<i class="fa-solid fa-arrow-down-long text-white animate-bounce" />
		</div>
	</div>
	{#if scrollY > 50}
		<About {scrollY} />
	{/if}
	<div class="py-8"></div>
</section>
