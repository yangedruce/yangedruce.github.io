<template>
	<a
		:href="link"
		:class="linkClass"
		class="relative rounded-2xl transition ease-in-out delay-150 duration-300 w-40 md:w-60 xl:w-56 drop-shadow-lg shadow-brandPrimaryBlack">
		<template v-if="link === '#yangEdruce'">
			<img :src="logoSrc" alt="logo" class="h-4 w-auto" />
		</template>
		<p class="font-satoshi text-xs">{{ number }}</p>
		<p
			:class="textColor"
			class="absolute bottom-3 font-satoshi font-bold text-base z-10 drop-shadow-lg shadow-brandPrimaryBlack">
			{{ label }}
		</p>
		<div
			class="absolute top-3 left-[3.2rem] md:left-[4.5rem] xl:left-[2.8rem] responsiveScreen1495:left-[3.3rem] responsiveScreen1550:left-[3.8rem] responsiveScreen1610:left-[4rem] responsiveScreen1680:left-[4.3rem] 2xl:left-[4.5rem]">
			<img :src="activeEmojiImage" alt="logo_nav_item_emoji" class="h-14 md:h-20 w-auto hidden" />
		</div>
	</a>
</template>

<script setup>
	import { inject } from "vue";
	import { logoSrc } from "@/darkModeMixin";

	const isDarkMode = inject("isDarkMode");
</script>

<script>
	export default {
		props: {
			link: String,
			linkClass: String,
			number: String,
			label: String,
			textColor: String,
			isActive: Boolean,
			activeEmojiImage: String,
		},
	};
</script>
