<template>
	<div class="relative z-50">
		<div class="h-28 w-40 md:w-60 xl:w-56">
			<button
				@click="toggleDark()"
				type="button"
				class="text-center py-3 px-2 xl:px-4 w-40 md:w-56 font-satoshi font-bold text-sm md:text-base text-brandPrimaryWhite border border-brandNeutral-800 dark:border-brandPrimaryWhite bg-brandNeutral-800 dark:bg-brandPrimaryBlack rounded-2xl drop-shadow-xl shadow-brandPrimaryBlack">
				{{ isDarkMode ? "Change to light mode." : "Change to dark mode." }}
			</button>
			<div
				class="flex items-center justify-center text-center mt-2 md:mt-3 xl:mt-2.5 py-3 w-40 md:w-56 font-satoshi font-bold text-sm md:text-base text-brandPrimaryWhite border border-brandNeutral-800 dark:border-brandPrimaryWhite bg-brandNeutral-800 dark:bg-brandPrimaryBlack rounded-2xl drop-shadow-xl shadow-brandPrimaryBlack">
				<span class="relative flex h-3 w-3 mr-4">
					<span
						class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandSecondaryRed opacity-75"></span>
					<span class="relative inline-flex rounded-full h-3 w-3 bg-brandSecondaryRed"></span>
				</span>
				<span>Available to work</span>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { isDarkMode, toggleDark } from "@/darkModeMixin";
</script>
