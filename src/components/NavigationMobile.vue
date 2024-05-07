<template>
	<div
		class="xl:hidden fixed z-[60] w-screen text-brandNeutral-800 dark:text-brandPrimaryWhite bg-brandPrimaryWhite dark:bg-brandPrimaryBlack">
		<button
			class="absolute right-6 md:right-4 top-2 text-xs md:text-base font-satoshi text-center py-3 px-2 xl:px-4 h-12 md:h-16 w-12 md:w-16 md:mr-2 text-brandNeutral-800 dark:text-brandPrimaryWhite border border-brandNeutral-800 dark:border-brandPrimaryWhite bg-brandPrimaryWhite dark:bg-brandNeutral-800 rounded-2xl drop-shadow-xl shadow-brandPrimaryBlack"
			@click="open">
			Menu
		</button>
		<div
			id="menu"
			class="hidden fixed top-0 left-0 w-screen bg-brandPrimaryWhite dark:bg-brandPrimaryBlack overflow-y-auto"
			:class="{ 'h-screen': isPortrait, 'h-full': !isPortrait }">
			<button
				class="text-xs md:text-base font-satoshi absolute right-6 md:right-4 top-6 text-center py-3 px-2 xl:px-4 h-12 md:h-16 w-12 md:w-16 md:mr-2 text-brandNeutral-800 dark:text-brandPrimaryWhite border border-brandNeutral-800 dark:border-brandPrimaryWhite bg-brandPrimaryWhite dark:bg-brandNeutral-800 rounded-2xl drop-shadow-xl shadow-brandPrimaryBlack"
				@click="close">
				Close
			</button>
			<ul class="space-y-4 md:space-y-8 p-6">
				<template v-for="(item, index) in navigationItems">
					<li class="flex">
						<p class="font-satoshi text-xs md:text-base mr-4 md:mr-6 lg:mr-8 mt-1.5 md:mt-5">{{ item.number }}</p>
						<a :href="item.link" @click="close" class="block font-satoshi font-bold text-xl md:text-4xl">
							{{ item.label }}
						</a>
					</li>
				</template>
			</ul>
			<div class="flex flex-col md:flex-row items-center h-28 w-full px-6">
				<button
					@click="toggleDark()"
					type="button"
					class="text-center py-3 px-2 xl:px-4 w-full md:mr-2 font-satoshi font-bold text-sm md:text-base text-brandNeutral-800 dark:text-brandPrimaryWhite border border-brandNeutral-800 dark:border-brandPrimaryWhite bg-brandPrimaryWhite dark:bg-brandNeutral-800 rounded-2xl drop-shadow-xl shadow-brandPrimaryBlack">
					{{ isDarkMode ? "Change to light mode." : "Change to dark mode." }}
				</button>
				<div
					class="flex items-center justify-center text-center mt-2 md:mt-0 py-3 w-full md:ml-2 font-satoshi font-bold text-sm md:text-base text-brandPrimaryWhite border border-brandNeutral-800 dark:border-brandPrimaryWhite bg-brandNeutral-800 rounded-2xl drop-shadow-xl shadow-brandPrimaryBlack">
					<span class="relative flex h-3 w-3 mr-4">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandSecondaryGreen opacity-75"></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-brandSecondaryGreen"></span>
					</span>
					<span>Available to work</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import { isDarkMode, toggleDark } from "@/darkModeMixin";

	const navigationItems = [
		{
			link: "#hello",
			number: "01",
			label: "Hello",
		},
		{
			link: "#experiences",
			number: "02",
			label: "Experiences",
		},
		{
			link: "#skillsUses",
			number: "03",
			label: "Skills & Uses",
		},
		{
			link: "#projects",
			number: "04",
			label: "Projects",
		},
		{
			link: "#contact",
			number: "05",
			label: "Contact",
		},
	];

	const isPortrait = ref(window.matchMedia("(orientation: portrait)").matches);

	function open(event) {
		const menu = document.getElementById("menu");
		menu.classList.remove("hidden");
	}

	function close(event) {
		const menu = document.getElementById("menu");
		menu.classList.add("hidden");
	}

	window.addEventListener("orientationchange", () => {
		isPortrait.value = window.matchMedia("(orientation: portrait)").matches;
	});
</script>

<script>
	export default {
		props: {
			link: String,
		},
	};
</script>
