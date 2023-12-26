<template>
	<Hero />
	<Hello />
	<Experiences />
	<SkillsUses />
	<Projects />
	<Contact />

	<nav>
		<div><a href="#one">Yang Edruce</a></div>
		<div><a href="#two">Hello</a></div>
		<div><a href="#three">Experiencess</a></div>
		<div><a href="#four">Skills & Uses</a></div>
		<div><a href="#five">Projects</a></div>
		<div><a href="#six">Contact</a></div>
	</nav>
</template>

<script setup>
	import Hero from "@/components/Hero.vue";
	import Hello from "@/components/sections/Hello.vue";
	import Experiences from "@/components/sections/Experiences.vue";
	import SkillsUses from "@/components/sections/SkillsUses.vue";
	import Projects from "@/components/sections/Projects.vue";
	import Contact from "@/components/sections/Contact.vue";
	import { inject } from "vue";

	const isDarkMode = inject("isDarkMode");
</script>
