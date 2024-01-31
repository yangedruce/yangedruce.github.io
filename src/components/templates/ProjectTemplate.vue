<template>
	<section id="projects" class="m-4 xl:m-8">
		<div class="bg-brandNeutral-300 p-4 xl:p-8 rounded-2xl h-screen">
			<p class="font-satoshi text-xl md:text-2xl xl:text-4xl text-brandNeutral-800 -ml-1.5 xl:ml-0 -mt-3">04</p>
			<div class="relative h-full w-full">
				<h2
					class="absolute bottom-3.5 md:bottom-8 xl:bottom-14 3xl:bottom-7 -ml-2 md:-ml-2.5 3xl:-ml-8 font-satoshi font-bold text-brandNeutral-800 text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl 3xl:text-10xl">
					Projects
				</h2>
			</div>
		</div>
		<div class="relative flex items-center gap-4 xl:gap-6 h-8 mt-4 xl:mt-8 mx-4 xl:mx-8">
			<p class="font-satoshi text-xs text-brandNeutral-800 dark:text-brandPrimaryWhite">
				<span class="font-bold">04</span>/05
			</p>
			<div
				class="relative w-full h-full overflow-hidden whitespace-nowrap flex items-center px-4 rounded-full bg-brandNeutral-300">
				<div class="absolute flex items-center animate-marquee3 text-brandNeutral-800 leading-none">
					<span>&nbsp;</span>
					<span class="uppercase font-satoshi text-xs">
						You are now entering PROJECTS section. You are now entering PROJECTS section. You are now entering PROJECTS
						section. You are now entering PROJECTS section. You are now entering PROJECTS section. You are now entering
						PROJECTS section. You are now entering PROJECTS section. You are now entering PROJECTS section. You are now
						entering PROJECTS section. You are now entering PROJECTS section. You are now entering PROJECTS section. You
						are now entering PROJECTS section. You are now entering PROJECTS section. You are now entering PROJECTS
						section. You are now entering PROJECTS section. You are now entering PROJECTS section.
					</span>
				</div>
				<div class="absolute flex items-center animate-marquee4 text-brandNeutral-800 leading-none">
					<span>&nbsp;</span>
					<span class="uppercase font-satoshi text-xs">
						You are now entering PROJECTS section. You are now entering PROJECTS section. You are now entering PROJECTS
						section. You are now entering PROJECTS section. You are now entering PROJECTS section. You are now entering
						PROJECTS section. You are now entering PROJECTS section. You are now entering PROJECTS section. You are now
						entering PROJECTS section. You are now entering PROJECTS section. You are now entering PROJECTS section. You
						are now entering PROJECTS section. You are now entering PROJECTS section. You are now entering PROJECTS
						section. You are now entering PROJECTS section. You are now entering PROJECTS section.
					</span>
				</div>
			</div>
			<p class="font-satoshi font-bold text-xs text-brandNeutral-800 dark:text-brandPrimaryWhite">Projects.</p>
		</div>
		<div
			class="bg-brandPrimaryWhite dark:bg-brandNeutral-800 border border-brandNeutral-800 dark:border-brandPrimaryWhite p-4 xl:p-8 rounded-2xl text-brandNeutral-800 dark:text-brandPrimaryWhite font-satoshi text-xl md:text-4xl xl:text-6xl leading-tight mt-4 xl:mt-8">
			<p>
				<a href="https://yangedruce.com/dashbuilt" target="_blank"> dashbuilt </a>
				<a
					href="https://mysume.com/login"
					target="_blank"
					class="italic text-brandPrimaryWhite dark:text-brandNeutral-800 text-stroke sm:text-stroke-2"
					:class="isDarkMode ? 'text-stroke-brandPrimaryWhite' : 'text-stroke-brandNeutral-800'">
					mysume
				</a>
				<a href="https://yangedruce.com/qutuworldwide" target="_blank"> qutu worldwide </a>
				<a
					href="https://spinny.yangedruce.com/"
					target="_blank"
					class="italic text-brandPrimaryWhite dark:text-brandNeutral-800 text-stroke sm:text-stroke-2"
					:class="isDarkMode ? 'text-stroke-brandPrimaryWhite' : 'text-stroke-brandNeutral-800'">
					spinny
				</a>
				<a href="https://tasky.yangedruce.com/" target="_blank"> tasky </a>
				<a
					href="https://yangedruce.com/"
					target="_blank"
					class="italic text-brandPrimaryWhite dark:text-brandNeutral-800 text-stroke sm:text-stroke-2"
					:class="isDarkMode ? 'text-stroke-brandPrimaryWhite' : 'text-stroke-brandNeutral-800'">
					yang edruce
				</a>
			</p>
		</div>
	</section>
</template>

<script setup>
	import { isDarkMode } from "@/scripts/ProjectScript.js";
</script>
