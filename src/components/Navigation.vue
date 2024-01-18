<template>
	<nav>
		<div class="fixed z-50 top-0 left-0 p-11 w-full">
			<div class="hidden xl:flex items-center justify-center gap-2.5">
				<NavigationLink
					v-for="(item, index) in navigationItems"
					:key="index"
					:link="item.link"
					:link-class="item.linkClass"
					:number="item.number"
					:text-color="item.textColor"
					:label="item.label"
					:show-logo="item.link === '#yangEdruce'"
					:active-emoji-image="item.activeEmojiImage" />
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
				"bg-brandPrimaryWhite border border-brandPrimaryWhite text-brandNeutral-800 py-4 px-4 md:px-8 h-28 w-56",
			number: "",
			textColor: "text-brandNeutral-800",
			label: "Yang Edruce",
			activeEmojiImage: "/emoji/yangedruce-emoji.png",
		},
		{
			link: "#hello",
			linkClass: "bg-brandNeutral-100 border border-brandNeutral-100 text-brandNeutral-800 py-4 px-4 md:px-8 h-28 w-56",
			number: "01",
			textColor: "text-brandNeutral-800",
			label: "Hello",
			activeEmojiImage: "/emoji/hello-emoji.png",
		},
		{
			link: "#experiences",
			linkClass: "bg-brandNeutral-150 border border-brandNeutral-150 text-brandNeutral-800 py-4 px-4 md:px-8 h-28 w-56",
			number: "02",
			textColor: "text-brandNeutral-800",
			label: "Experiences",
			activeEmojiImage: "/emoji/experiences-emoji.png",
		},
		{
			link: "#skillsUses",
			linkClass: "bg-brandNeutral-200 border border-brandNeutral-200 text-brandNeutral-800 py-4 px-4 md:px-8 h-28 w-56",
			number: "03",
			textColor: "text-brandNeutral-800",
			label: "Skills & Uses",
			activeEmojiImage: "/emoji/skillsuses-emoji.png",
		},
		{
			link: "#projects",
			linkClass: "bg-brandNeutral-300 border border-brandNeutral-300 text-brandNeutral-800 py-4 px-4 md:px-8 h-28 w-56",
			number: "04",
			textColor: "text-brandNeutral-800",
			label: "Projects",
			activeEmojiImage: "/emoji/projects-emoji.png",
		},
		{
			link: "#contact",
			linkClass: "bg-brandNeutral-400 border border-brandNeutral-400 text-brandNeutral-800 py-4 px-4 md:px-8 h-28 w-56",
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
		let breakpointSize = 1280;

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

						if (window.innerWidth > breakpointSize) {
							gsap.to(window, { duration: 1, scrollTo: targetOffset, overwrite: "auto" });
						}
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
