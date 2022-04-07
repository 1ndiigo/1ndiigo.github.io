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

<section class="bg-slate-700">
	<div
		class="flex flex-col items-center justify-between w-full h-screen transition-all duration-500 {scrollY <
		50
			? 'bg-gradient-to-tl from-indigo-600 to-emerald-300'
			: 'bg-gradient-to-tl from-slate-700 to-slate-700'}"
	>
		<Header />
		<div id="top" />
		<h1
			class="{scrollY < 50
				? 'text-white'
				: 'hidden'} font-semibold text-6xl anim-slide-fade-x transition-all"
		>
			lazy devs = best devs
		</h1>
		<div
			class="flex flex-col items-center justify-center py-4 transition-all duration-500 {scrollY >
			50
				? 'opacity-0'
				: ''}"
		>
			<p class="text-white font-medium text-lg pb-2">Scroll down!</p>
			<i class="fa-solid fa-arrow-down-long text-white animate-bounce" />
		</div>
		{#if scrollY > 50}
			<div transition:fade class="absolute top-1/2">
				<div class="flex justify-between items-center">
					<div class="w-1/3">
						<h2 class="text-emerald-400 text-5xl font-bold anim-slide-fade-x pb-24 underline underline-offset-[24px]">
							About Me
						</h2>
						<p
							class="text-white font-extralight opacity-0 anim-slide-fade-y pb-12"
							style="--sf-y-delay: 500ms"
						>
							Hello, my name's Indigo. It's not my real name, but if you want to
							know more about me, you can find me using the links below!
						</p>
						<p
							class="text-white font-extralight opacity-0 anim-slide-fade-y pb-12"
							style="--sf-y-delay: 750ms"
						>
							I like to work with UIs and TypeScript. My preferred frameworks
							are Vue.js and Svelte.
						</p>
						<p
							class="text-white font-extralight opacity-0 anim-slide-fade-y pb-12"
							style="--sf-y-delay: 1000ms"
						>
							I occassionally dabble in other languages, such as C#, Python,
							Kotlin and a few more.
						</p>
					</div>
					<div class="w-96 bg-slate-500 h-96 rounded-full flex items-center justify-center">
						<p class="text-white text-3xl text-center w-1/2">
							Image coming soon
						</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
	<div class="py-96" />
</section>
