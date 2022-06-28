<script lang="ts">
	import { darkMode } from "../stores";


	let textColor: string; 
    darkMode.subscribe(value => {
		textColor = value ? "text-white" : "text-zinc-700"
	})
</script>

<nav class="w-full flex items-center justify-around py-2 fixed top-0 z-50">
	<a href="/#about" class="font-mono {textColor} text-lg backdrop-blur-sm rounded-full">about</a>
	<a href="/#top" class="font-mono {textColor} text-xl backdrop-blur-sm rounded-full">&lt;indigo&#47;&gt;</a>
	<a href="/projects" class="font-mono {textColor} text-lg backdrop-blur-sm rounded-full">projects</a>
</nav>
