<template>
	<section id="hello" class="m-4 xl:m-8">
		<div class="bg-brandSecondaryOrange p-4 xl:p-8 rounded-2xl h-screen">
			<p class="font-satoshi text-xl md:text-2xl xl:text-4xl text-brandPrimaryWhite -ml-1.5 xl:ml-0 -mt-2 xl:-mt-3">
				01
			</p>
			<div class="relative h-full w-full">
				<h2
					class="absolute bottom-3 2xl:bottom-0 3xl:-bottom-24 -ml-2 3xl:-ml-8 font-satoshi font-bold text-brandPrimaryWhite text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl 3xl:text-10xl">
					Hello
				</h2>
			</div>
		</div>
		<div class="relative flex items-center gap-4 md:gap-6 h-8 mt-4 xl:mt-8 mx-4 md:mx-8">
			<p class="font-satoshi text-xs text-brandNeutral-800 dark:text-brandPrimaryWhite">
				<span class="font-bold">01</span>/05
			</p>
			<div
				class="relative w-full h-full overflow-hidden whitespace-nowrap flex items-center px-4 rounded-full bg-brandSecondaryOrange">
				<div class="absolute flex items-center animate-marquee3 text-brandPrimaryWhite leading-none">
					<span>&nbsp;</span>
					<span class="uppercase font-satoshi text-xs">
						You are now entering HELLO section. You are now entering HELLO section. You are now entering HELLO section.
						You are now entering HELLO section. You are now entering HELLO section. You are now entering HELLO section.
						You are now entering HELLO section. You are now entering HELLO section. You are now entering HELLO section.
						You are now entering HELLO section. You are now entering HELLO section. You are now entering HELLO section.
						You are now entering HELLO section. You are now entering HELLO section. You are now entering HELLO section.
						You are now entering HELLO section.
					</span>
				</div>
				<div class="absolute flex items-center animate-marquee4 text-brandPrimaryWhite leading-none">
					<span>&nbsp;</span>
					<span class="uppercase font-satoshi text-xs">
						You are now entering HELLO section. You are now entering HELLO section. You are now entering HELLO section.
						You are now entering HELLO section. You are now entering HELLO section. You are now entering HELLO section.
						You are now entering HELLO section. You are now entering HELLO section. You are now entering HELLO section.
						You are now entering HELLO section. You are now entering HELLO section. You are now entering HELLO section.
						You are now entering HELLO section. You are now entering HELLO section. You are now entering HELLO section.
						You are now entering HELLO section.
					</span>
				</div>
			</div>
			<p class="font-satoshi font-bold text-xs text-brandNeutral-800 dark:text-brandPrimaryWhite">Hello.</p>
		</div>
		<div
			class="bg-brandNeutral-50 dark:bg-brandNeutral-800 border border-brandNeutral-800 dark:border-brandPrimaryWhite p-4 xl:p-8 rounded-2xl text-brandNeutral-800 dark:text-brandPrimaryWhite font-satoshi text-xl md:text-4xl xl:text-6xl leading-tight mt-4 xl:mt-8">
			<p>
				Hello, I'm Nurul Izyan Syaza, aka
				<span
					class="italic text-brandNeutral-50 dark:text-brandNeutral-800 text-stroke sm:text-stroke-2"
					:class="isDarkMode ? 'text-stroke-brandPrimaryWhite' : 'text-stroke-brandNeutral-800'">
					Yang Edruce,
				</span>
				and I am a creative web developer and multi-disciplinary designer.
			</p>
			<p class="mt-8 md:mt-16 xl:mt-24">
				I have 5 years of development experience, most of which was spent working with agencies. I specialise in
				creating visually stunning websites and web applications that drive business growth. I have a deep passion for
				<span
					class="italic text-brandNeutral-50 dark:text-brandNeutral-800 text-stroke sm:text-stroke-2"
					:class="isDarkMode ? 'text-stroke-brandPrimaryWhite' : 'text-stroke-brandNeutral-800'">
					UiUX, web animation, branding, and typography.
				</span>
			</p>
			<p class="mt-8 md:mt-16 xl:mt-24">
				My background as a freelancer with over 8 years of design experience enhances my front-end development skills,
				as it helps me apply those skills to
				<span
					class="italic text-brandNeutral-50 dark:text-brandNeutral-800 text-stroke sm:text-stroke-2"
					:class="isDarkMode ? 'text-stroke-brandPrimaryWhite' : 'text-stroke-brandNeutral-800'">
					practical knowledge of feasibility and limitations
				</span>
				when developing any projects. Those skills also allow me to be creative while working on the projects,
				<span
					class="italic text-brandNeutral-50 dark:text-brandNeutral-800 text-stroke sm:text-stroke-2"
					:class="isDarkMode ? 'text-stroke-brandPrimaryWhite' : 'text-stroke-brandNeutral-800'">
					starting with designing the concept and developing it until the very moment it hits publish.
				</span>
			</p>
		</div>
	</section>
</template>

<script setup>
	import { isDarkMode } from "@/scripts/HelloScript.js";
</script>
