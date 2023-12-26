import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import MainComponents from "./views/MainComponents.vue";
import { isDarkMode } from "./darkModeMixin";

const app = createApp(App);

app.component("MainComponents", MainComponents);

app.provide("isDarkMode", isDarkMode);

app.mount("#app");

/*=============================================

=                  Navigation                 =

=============================================*/
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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
		onToggle: (self) => self.isActive && setActive(a),
	});
	a.addEventListener("click", (e) => {
		e.preventDefault();
		gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
	});
});

function setActive(link) {
	links.forEach((el) => el.classList.remove("active"));
	link.classList.add("active");
}
