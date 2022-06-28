<script lang="ts">
	import { darkMode } from "../stores";


	let textColor: string; 
    let bgColor: string; 
    let icon: string;
    darkMode.subscribe(value => {
		bgColor = value ? "bg-zinc-900" : "bg-zinc-200"
        textColor = value ? "text-white" : "text-zinc-800"
        icon = value ? "fa-moon" : "fa-sun"
    })

    function swapColor() {
        darkMode.update(value => !value);
    }
</script>

<footer class="{bgColor} flex flex-col justify-center items-center pb-8 z-50 relative transition-all duration-500">
    <i class="fa-solid hover:bg-zinc-500 rounded-full {icon} {textColor} text-2xl cursor-pointer select-none mb-3 absolute right-4 mt-8 p-2 transition-all duration-500" on:click="{swapColor}"></i>
    <div>
        <a href="https://github.com/1ndiigo">
            <i title="GitHub" class="fa-brands fa-github px-2 {textColor} text-2xl" />
        </a>
        <a href="https://instagram.com/geode.dev">
            <i title="Instagram" class="fa-brands fa-instagram px-2 {textColor} text-2xl" />
        </a>
        <a href="https://discord.gg/3znQkj837T">
            <i title="Discord" class="fa-brands fa-discord px-2 {textColor} text-2xl" />
        </a>
    </div>
</footer>
