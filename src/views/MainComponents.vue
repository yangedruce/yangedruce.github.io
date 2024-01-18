<template>
	<NavigationMobile />
	<Hero />
	<Hello />
	<Experiences />
	<SkillsUses />
	<Projects />
	<Contact />
	<Navigation />
</template>

<script setup>
	import Navigation from "@/components/Navigation.vue";
	import NavigationMobile from "@/components/NavigationMobile.vue";
	import Hero from "@/components/Hero.vue";
	import Hello from "@/components/sections/Hello.vue";
	import Experiences from "@/components/sections/Experiences.vue";
	import SkillsUses from "@/components/sections/SkillsUses.vue";
	import Projects from "@/components/sections/Projects.vue";
	import Contact from "@/components/sections/Contact.vue";
	import { inject } from "vue";

	const isDarkMode = inject("isDarkMode");
</script>
