<template>
	<nav>
		<div class="fixed z-50 top-0 left-0 p-11 w-full">
			<div class="flex items-center justify-center gap-2.5">
				<NavigationLink
					v-for="(item, index) in navigationItems"
					:key="index"
					:link="item.link"
					:link-class="item.linkClass"
					:number="item.number"
					:text-color="item.textColor"
					:label="item.label"
					:show-logo="item.link === '#yangEdruce'"
					:active-emoji-image="item.activeEmojiImage"/>
				<Cta />
			</div>
		</div>
	</nav>
</template>

<script setup>
	import Cta from "@/components/Cta.vue";
	import NavigationLink from "@/components/NavigationLink.vue";

	const navigationItems = [
		{
			link: "#yangEdruce",
			linkClass:
				"bg-brandNeutral-600 dark:bg-brandPrimaryWhite border border-brandNeutral-600 dark:border-brandPrimaryWhite text-brandPrimaryWhite dark:text-brandNeutral-800 py-4 px-4 md:px-8 h-28 w-56",
			number: "",
			textColor: "text-brandPrimaryWhite dark:text-brandNeutral-800",
			label: "Yang Edruce",
			activeEmojiImage: "/emoji/yangedruce-emoji.png",
		},
		{
			link: "#hello",
			linkClass:
				"bg-brandSecondaryOrange border border-brandSecondaryOrange text-brandPrimaryWhite py-4 px-4 md:px-8 h-28 w-56",
			number: "01",
			textColor: "text-brandPrimaryWhite",
			label: "Hello",
			activeEmojiImage: "/emoji/hello-emoji.png",
		},
		{
			link: "#experiences",
			linkClass:
				"bg-brandSecondaryPurple border border-brandSecondaryPurple text-brandPrimaryWhite py-4 px-4 md:px-8 h-28 w-56",
			number: "02",
			textColor: "text-brandPrimaryWhite",
			label: "Experiences",
			activeEmojiImage: "/emoji/experiences-emoji.png",
		},
		{
			link: "#skillsUses",
			linkClass:
				"bg-brandSecondaryBlue border border-brandSecondaryBlue text-brandPrimaryWhite py-4 px-4 md:px-8 h-28 w-56",
			number: "03",
			textColor: "text-brandPrimaryWhite",
			label: "Skills & Uses",
			activeEmojiImage: "/emoji/skillsuses-emoji.png",
		},
		{
			link: "#projects",
			linkClass:
				"bg-brandSecondaryRed border border-brandSecondaryRed text-brandPrimaryWhite py-4 px-4 md:px-8 h-28 w-56",
			number: "04",
			textColor: "text-brandPrimaryWhite",
			label: "Projects",
			activeEmojiImage: "/emoji/projects-emoji.png",
		},
		{
			link: "#contact",
			linkClass:
				"bg-brandSecondaryGreen border border-brandSecondaryGreen text-brandNeutral-800 py-4 px-4 md:px-8 h-28 w-56",
			number: "05",
			textColor: "text-brandNeutral-800",
			label: "Contact",
			activeEmojiImage: "/emoji/contact-emoji.png",
		},
	];
</script>
<script>
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { ScrollToPlugin } from "gsap/ScrollToPlugin";
	import NavigationLink from "@/components/NavigationLink.vue";

	document.addEventListener("DOMContentLoaded", function () {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		let links = gsap.utils.toArray("nav a");

		links.forEach((a) => {
			let element = document.querySelector(a.getAttribute("href")),
				linkST = ScrollTrigger.create({
					trigger: element,
					start: "top top",
				});

			ScrollTrigger.create({
				trigger: element,
				start: "top center",
				end: "bottom center",
				onToggle: (self) => {
					if (self.isActive) {
						setActive(a);
						const targetElement = document.querySelector(a.getAttribute("href"));
						const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;

						history.pushState({ path: a.getAttribute("href") }, "", a.getAttribute("href"));

						gsap.to(window, { duration: 1, scrollTo: targetOffset, overwrite: "auto" });
					}
				},
			});
		});

		function setActive(link) {
			links.forEach((el) => el.querySelector("a div img").classList.add("hidden"));
			link.classList.add("active");
			link.querySelector("a div img").classList.remove("hidden");
		}
	});

	export default {
		components: {
			NavigationLink,
		},
		setup() {
			return {
				navigationItems,
			};
		},
	};
</script>
