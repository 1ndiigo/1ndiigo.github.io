<script lang="ts">
    export let scrollY = 0;

	import { darkMode } from "../stores";


	let textColor: string; 
    darkMode.subscribe(value => {
		textColor = value ? "text-white" : "text-zinc-700"
	})

</script>

<section
    class="-translate-y-80 transition-all {scrollY > 50
        ? 'opacity-100'
        : 'opacity-0'}">
    <div>
        <h2
            class="text-3xl md:text-5xl font-semibold {textColor} underline underline-offset-[24px] w-screen text-center slide-fade-x transition-all">
            About me
        </h2>
        <div
            class="flex flex-col lg:flex-row items-start justify-evenly w-screen pt-32">
            <div
                style="--sf-y-delay:250ms;"
                class="w-screen lg:w-1/5 px-8 lg:px-0 mb-16 lg:m-0 slide-fade-y opacity-0">
                <p
                    class="{textColor} underline underline-offset-8 w-full text-center mb-8 text-xl lg:text-3xl">
                    Web Development
                </p>
                <p class="{textColor} font-extralight text-opacity-60">
                    I am an avid web developer, trying to pick up Web3
                    technologies. My preferred frameworks are Vue.js and Svelte,
                    especially when combined with Typescript.
                </p>
            </div>
            <div
                style="--sf-y-delay:500ms;"
                class="w-screen lg:w-1/5 px-8 lg:px-0 mb-16 lg:m-0 slide-fade-y opacity-0">
                <p
                    class="{textColor} underline underline-offset-8 w-full text-center mb-8 text-xl lg:text-3xl"
                    data-nosnippet>
                    Gamer
                </p>
                <p
                    class="{textColor} font-extralight text-opacity-60"
                    data-nosnippet>
                    I love video games. My current favourites are Minecraft, No
                    Man's Sky and Cities Skylines.
                </p>
            </div>
            <div
                style="--sf-y-delay:750ms;"
                class="w-screen lg:w-1/5 px-8 lg:px-0 mb-16 lg:m-0 slide-fade-y opacity-0">
                <p
                    class="{textColor} underline underline-offset-8 w-full text-center mb-8 text-xl lg:text-3xl">
                    Other Software Development
                </p>
                <p class="{textColor} font-extralight text-opacity-60">
                    I have a passion for software development. I have created a
                    few tools for my own use, but I also have experience with
                    other software development tools.
                </p>
            </div>
        </div>
    </div>
    <i
        class="fa-solid fa-code {textColor} text-[24rem] sm:text-[32rem] lg:text-[48rem] absolute -top-24 sm:-top-48 -left-56 z-0 {scrollY >
        50
            ? 'opacity-5'
            : 'opacity-0'}" />
</section>
