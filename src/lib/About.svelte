<script>
    export let scrollY = 0
</script>

<section
    class="-translate-y-96 transition-all {scrollY > 50
        ? 'opacity-100'
        : 'opacity-0'}"
>
    <h2
        class="text-3xl md:text-5xl font-semibold text-white underline underline-offset-[24px] w-screen text-center slide-fade-x transition-all"
    >
        About me
    </h2>
    <div
        class="flex flex-col md:flex-row items-start justify-evenly w-screen pt-32"
    >
        <div
            style="--sf-y-delay:250ms;"
            class="w-screen md:w-1/5 px-8 md:px-0 mb-16 md:m-0 slide-fade-y opacity-0"
        >
            <p class="text-white w-full text-center mb-8 text-xl md:text-2xl">
                Web Development
            </p>
            <p class="text-white font-extralight">
                I am an avid web developer, trying to pick up Web3 technologies.
                My preferred frameworks are Vue.js and Svelte, especially when
                combined with Typescript ❤️.
            </p>
        </div>
        <div
            style="--sf-y-delay:500ms;"
            class="w-screen md:w-1/5 px-8 md:px-0 mb-16 md:m-0 slide-fade-y opacity-0"
        >
            <p class="text-white w-full text-center mb-8 text-xl md:text-2xl">
                Gamer
            </p>
            <p class="text-white font-extralight">
                I love video games. My current favourites are Minecraft and
                Cities Skylines.
            </p>
        </div>
        <div
            style="--sf-y-delay:750ms;"
            class="w-screen md:w-1/5 px-8 md:px-0 mb-16 md:m-0 slide-fade-y opacity-0"
        >
            <p class="text-white w-full text-center mb-8 text-xl md:text-2xl">
                Other Software Development
            </p>
            <p class="text-white font-extralight">
                I have a passion for software development. I have created a few
                tools for my own use, but I also have experience with other
                software development tools.
            </p>
        </div>
    </div>
    <i
        class="fa-solid fa-code text-white opacity-5 text-[24rem] sm:text-[32rem] md:text-[48rem] absolute -top-24 sm:-top-48 -left-56 z-0 {scrollY <
        50
            ? 'opacity-5'
            : 'opacity-0'} transition-all"
    />
</section>
