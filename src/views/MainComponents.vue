<template>
	<Hero />
	<Hello />
	<Experiences />
	<SkillsUses />
	<Projects />
	<Contact />

	<nav class="block xl:hidden">
		<div><a href="#yangEdruce">Yang Edruce</a></div>
		<div><a href="#hello">Hello</a></div>
		<div><a href="#xperiences">Experiences</a></div>
		<div><a href="#skillsUses">Skills & Uses</a></div>
		<div><a href="#projects">Projects</a></div>
		<div><a href="#contact">Contact</a></div>
	</nav>

	<Navigation />
</template>

<script setup>
	import Navigation from "@/components/Navigation.vue";
	import Hero from "@/components/Hero.vue";
	import Hello from "@/components/sections/Hello.vue";
	import Experiences from "@/components/sections/Experiences.vue";
	import SkillsUses from "@/components/sections/SkillsUses.vue";
	import Projects from "@/components/sections/Projects.vue";
	import Contact from "@/components/sections/Contact.vue";
	import { inject } from "vue";

	const isDarkMode = inject("isDarkMode");
</script>
