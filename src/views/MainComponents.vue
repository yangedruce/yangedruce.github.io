<template>
	<div>
		<Hero />
		<Hello />
		<Experiences />
		<SkillsUses />
		<Projects />
		<Contact />
	</div>
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
