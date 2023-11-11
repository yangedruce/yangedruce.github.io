import { computed, ref } from "vue";
// import { computed, ref, onMounted } from "vue";

const isDarkMode = ref(false);

if ("theme" in localStorage) {
	isDarkMode.value = localStorage.theme === "dark";
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	isDarkMode.value = true;
}

const logoSrc = computed(() => (isDarkMode.value ? "/yangedruce-black-logo.png" : "/yangedruce-white-logo.png"));

const toggleDark = () => {
	isDarkMode.value = !isDarkMode.value;
	localStorage.theme = isDarkMode.value ? "dark" : "light";
	document.documentElement.classList.toggle("dark", isDarkMode.value);
};

// onMounted(() => {
//   document.documentElement.classList.toggle("dark", isDarkMode.value);
// });

export { isDarkMode, toggleDark, logoSrc };
