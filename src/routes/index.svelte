<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { browser } from '$app/env';
	import Header from '$lib/Header.svelte';
	import { fade } from 'svelte/transition';

	let scrollY = 0;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<svelte:window bind:scrollY />

<section
	class="transition-all duration-500 {scrollY < 50
		? 'bg-indigo-700'
		: 'bg-zinc-900'}"
>
	<div
		id="heading"
		class="flex flex-col items-center justify-between w-full h-screen"
	>
		<Header />
		<div id="top" />
		<h1
			class="text-white font-semibold text-6xl anim-slide-fade-x transition-all {scrollY <
			50
				? 'block'
				: 'hidden'}"
		>
			lazy devs = best devs
		</h1>
		<div
			class="flex flex-col items-center justify-center py-4 transition-all {scrollY <
			50
				? 'opacity-100'
				: 'opacity-0'}"
		>
			<p class="text-white font-medium text-lg pb-2">Scroll down!</p>
			<i class="fa-solid fa-arrow-down-long text-white animate-bounce" />
		</div>
	</div>
	{#if scrollY > 50}
	<section class="-translate-y-96 transition-all {scrollY >
			50
				? 'opacity-100'
				: 'opacity-0'}">
		<h2
			class="text-5xl font-semibold text-white underline underline-offset-[24px] w-screen text-center anim-slide-fade-x"
		>
			About me
		</h2>
		<div class="flex flex-col md:flex-row items-start justify-evenly w-screen pt-32">
			<div style="--sf-y-delay:250ms;" class="w-screen md:w-1/5 px-8 md:px-0 mb-16 md:m-0 anim-slide-fade-y opacity-0">
				<p class="text-white w-full text-center mb-8 text-2xl">
					Web Development
				</p>
				<p class="text-white font-extralight">
					I am an avid web developer, trying to pick up web3 technologies. My preferred frameworks are Vue.js and Svelte, especially when combined with Typescript ❤️.
				</p>
			</div>
			<div style="--sf-y-delay:500ms;" class="w-screen md:w-1/5 px-8 md:px-0 mb-16 md:m-0 anim-slide-fade-y opacity-0">
				<p class="text-white w-full text-center mb-8 text-2xl">Gamer</p>
				<p class="text-white font-extralight">
					I love video games. My current favourites are Minecraft and Cities Skylines.
				</p>
			</div>
			<div style="--sf-y-delay:750ms;" class="w-screen md:w-1/5 px-8 md:px-0 mb-16 md:m-0 anim-slide-fade-y opacity-0">
				<p class="text-white w-full text-center mb-8 text-2xl">
					Other Software Development
				</p>
				<p class="text-white font-extralight">
					I have a passion for software development. I have created a few tools for my own use, but I also have experience with other software development tools.
				</p>
			</div>
		</div>
	</section>
	{/if}
	<div class="py-96" />
</section>
