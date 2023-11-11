<template>
	<Navigation />
	<MainComponents></MainComponents>
</template>

<script setup>
	import Navigation from "@/components/Navigation.vue";
	import MainComponents from "@/views/MainComponents.vue";
</script>

<script>
	if (
		localStorage.theme === "light" ||
		(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: light)").matches)
	) {
		localStorage.theme = "light";
		document.documentElement.classList.remove("dark");
	} else if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		localStorage.theme = "dark";
		document.documentElement.classList.add("dark");
	}
</script>
