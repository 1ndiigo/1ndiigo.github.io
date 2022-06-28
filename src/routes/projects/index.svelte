<script lang="ts">
    import { darkMode } from "../../stores";

    let scrollY = 0;

    let textColor: string; 
    let bgColor: string; 
    darkMode.subscribe(value => {
		bgColor = value ? "bg-zinc-900" : "bg-zinc-200"
        textColor = value ? "text-white" : "text-zinc-800"
    })

</script>

<svelte:window bind:scrollY/>

<section class="w-full h-screen {bgColor} transition-all duration-500">
    <div class="flex justify-center items-center w-full h-1/2">
        <div class="flex flex-col items-center justify-center relative w-11/12 h-5/6 bg-indigo-600 rounded-3xl {scrollY > 50 ? "-translate-y-96": ""} transition-all duration-700">
            <h1 class="text-5xl text-white">Projects</h1>
            <p class="text-xl text-white font-light pt-6 text-opacity-40">Various projects of mine</p>
        </div>
        <i class="fa-solid fa-bug absolute {textColor} left-96 rotate-12 text-opacity-30 text-9xl {scrollY > 50 ? "-translate-y-96": ""} transition-all duration-700"></i>
    </div>
    <article>
        <div class="flex items-center justify-center w-screen h-[50vh]">
            <p class="{textColor}">Coming Soon!</p>
        </div>
    </article>
</section>