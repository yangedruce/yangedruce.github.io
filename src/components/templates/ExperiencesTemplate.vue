<template>
	<section id="experiences" class="m-4 xl:m-8">
		<div :class="purpleBackgroundClasses">
			<p class="font-satoshi text-xl md:text-2xl xl:text-4xl text-brandNeutral-800 -ml-1.5 xl:ml-0 -mt-3">02</p>
			<div class="relative h-full w-full">
				<h2
					class="absolute bottom-3.5 md:bottom-8 xl:bottom-14 3xl:bottom-4 -ml-2 3xl:-ml-8 font-satoshi font-bold text-brandNeutral-800 text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl 3xl:text-10xl">
					Experiences
				</h2>
			</div>
		</div>
		<div class="relative flex items-center gap-4 md:gap-6 h-8 mt-4 xl:mt-8 mx-4 md:mx-8">
			<p class="font-satoshi text-xs text-brandNeutral-800 dark:text-brandPrimaryWhite">
				<span class="font-bold">02</span>/05
			</p>
			<div
				class="relative w-full h-full overflow-hidden whitespace-nowrap flex items-center px-4 rounded-full bg-brandNeutral-150">
				<div class="absolute flex items-center animate-marquee3 text-brandNeutral-800 leading-none">
					<span>&nbsp;</span>
					<span class="uppercase font-satoshi text-xs">
						You are now entering EXPERIENCES section. You are now entering EXPERIENCES section. You are now entering
						EXPERIENCES section. You are now entering EXPERIENCES section. You are now entering EXPERIENCES section. You
						are now entering EXPERIENCES section. You are now entering EXPERIENCES section. You are now entering
						EXPERIENCES section. You are now entering EXPERIENCES section. You are now entering EXPERIENCES section. You
						are now entering EXPERIENCES section. You are now entering EXPERIENCES section. You are now entering
						EXPERIENCES section. You are now entering EXPERIENCES section. You are now entering EXPERIENCES section. You
						are now entering EXPERIENCES section.
					</span>
				</div>
				<div class="absolute flex items-center animate-marquee4 text-brandNeutral-800 leading-none">
					<span>&nbsp;</span>
					<span class="uppercase font-satoshi text-xs">
						You are now entering EXPERIENCES section. You are now entering EXPERIENCES section. You are now entering
						EXPERIENCES section. You are now entering EXPERIENCES section. You are now entering EXPERIENCES section. You
						are now entering EXPERIENCES section. You are now entering EXPERIENCES section. You are now entering
						EXPERIENCES section. You are now entering EXPERIENCES section. You are now entering EXPERIENCES section. You
						are now entering EXPERIENCES section. You are now entering EXPERIENCES section. You are now entering
						EXPERIENCES section. You are now entering EXPERIENCES section. You are now entering EXPERIENCES section. You
						are now entering EXPERIENCES section.
					</span>
				</div>
			</div>
			<p class="font-satoshi font-bold text-xs text-brandNeutral-800 dark:text-brandPrimaryWhite">Experiences.</p>
		</div>
		<div :class="gridBoxClasses">
			<div :class="leftExperienceClasses">
				<div class="px-4 xl:px-0">
					<span
						class="bg-brandNeutral-400 text-brandNeutral-800 text-sm text-center font-satoshi font-bold uppercase rounded-full py-1 w-24 px-4">
						CURRENT
					</span>
				</div>
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite mt-8 px-5 xl:px-0">
					4Thirteen Group Sdn. Bhd.
				</p>
				<p class="font-satoshi text-sm xl:text-base text-brandPrimaryWhite px-5 xl:px-0">
					Shah Alam, Selangor, Malaysia
				</p>
				<p class="font-satoshi text-sm xl:text-base text-brandPrimaryWhite px-5 xl:px-0">
					Sept 2021 - Sept 2023 | Full-time | Hybrid
				</p>
				<Divider />
				<div class="block xl:hidden px-4 xl:px-8">
					<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite">Former Web Developer</p>
					<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-3 xl:ml-4">
						<li :class="bulletItemClasses" v-for="item in bulletPointsWebDeveloper" :key="item">
							<span :class="bulletItemTextClasses">
								{{ item }}
							</span>
						</li>
						<p class="underline mt-6 text-brandPrimaryWhite">Achievements:</p>
						<li :class="bulletItemClasses" v-for="item in bulletPointsAchievementsWebDeveloper" :key="item">
							<span :class="bulletItemTextClasses">
								{{ item }}
							</span>
						</li>
					</ul>
					<p class="mt-6 font-satoshi text-sm xl:text-base text-brandNeutral-500 font-bold">
						Delivered Projects:
						<span class="font-normal">
							HR Bolt (Tailwind CSS | Laravel | Vue.js | JavaScripts | JQuery | SASS | CSS), KLCC/Alamanda Booking
							System (Laravel |Tailwind CSS | JavaScripts | JQuery | SASS | CSS), Code413 (Laravel | Tailwind CSS |
							Swiper.js | Matter.js | CSS animation/transitions | JavaScripts | JQuery | SASS | CSS), 4Thirteen (Webflow
							| CSS | JavaScripts | GSAP), MTBC (WordPress | PHP | CSS | JavaScripts | JQuery), Yoodo - Wheel Yoo Win
							(WYW) | Roda Riang Raya (RRR) (Laravel | Tailwind CSS | CSS | JavaScripts | Alpine.js | Embedded to
							WordPress using iFrame), Yoodo (WordPress | PHP | CSS | Tailwind CSS | WP Bakery | JavaScripts | JQuery),
							Rohto Projects - Sunplay | Lipcare (Laravel | Tailwind CSS | CSS | SASS | JavaScripts | JQuery | Swiper.js
							| Twill), Family Frontiers (Laravel | Tailwind CSS | CSS | SASS), CelcomDigi (Webflow | CSS | JavaScripts
							| GSAP | Three.js | Swiper.js), LINC, DoggyBag
						</span>
					</p>
				</div>
			</div>
			<div :class="rightExperienceClasses">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite -mt-3">Former Web Developer</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-3 xl:ml-4">
					<li :class="bulletItemClasses" v-for="item in bulletPointsWebDeveloper" :key="item">
						<span :class="bulletItemTextClasses">
							{{ item }}
						</span>
					</li>
					<p class="underline mt-6 text-brandPrimaryWhite">Achievements:</p>
					<li :class="bulletItemClasses" v-for="item in bulletPointsAchievementsWebDeveloper" :key="item">
						<span :class="bulletItemTextClasses">
							{{ item }}
						</span>
					</li>
				</ul>
				<p class="mt-6 font-satoshi text-sm xl:text-base text-brandNeutral-500 font-bold">
					Delivered Projects:
					<span class="font-normal">
						HR Bolt (Tailwind CSS | Laravel | Vue.js | JavaScripts | JQuery | SASS | CSS), KLCC/Alamanda Booking System
						(Laravel |Tailwind CSS | JavaScripts | JQuery | SASS | CSS), Code413 (Laravel | Tailwind CSS | Swiper.js |
						Matter.js | CSS animation/transitions | JavaScripts | JQuery | SASS | CSS), 4Thirteen (Webflow | CSS |
						JavaScripts | GSAP), MTBC (WordPress | PHP | CSS | JavaScripts | JQuery), Yoodo - Wheel Yoo Win (WYW) | Roda
						Riang Raya (RRR) (Laravel | Tailwind CSS | CSS | JavaScripts | Alpine.js | Embedded to WordPress using
						iFrame), Yoodo (WordPress | PHP | CSS | Tailwind CSS | WP Bakery | JavaScripts | JQuery), Rohto Projects -
						Sunplay | Lipcare (Laravel | Tailwind CSS | CSS | SASS | JavaScripts | JQuery | Swiper.js | Twill), Family
						Frontiers (Laravel | Tailwind CSS | CSS | SASS), CelcomDigi (Webflow | CSS | JavaScripts | GSAP | Three.js |
						Swiper.js), LINC, DoggyBag
					</span>
				</p>
			</div>
			<div :class="leftExperienceClasses">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Qutu Worldwide Sdn. Bhd.
				</p>
				<p class="font-satoshi text-sm xl:text-base text-brandPrimaryWhite px-5 xl:px-0">
					Petaling Jaya, Selangor, Malaysia
				</p>
				<p class="font-satoshi text-sm xl:text-base text-brandPrimaryWhite px-5 xl:px-0">
					June 2021 - Aug 2021 | Full-time | Remote
				</p>
				<Divider />
				<div class="block xl:hidden px-4 xl:px-8">
					<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite">Front End Developer</p>
					<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-4">
						<li :class="bulletItemClasses" v-for="item in bulletPointsFrontEndDeveloper" :key="item">
							<span :class="bulletItemTextClasses">
								{{ item }}
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div :class="rightExperienceClasses">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite -mt-3">Front End Developer</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-4">
					<li :class="bulletItemClasses" v-for="item in bulletPointsFrontEndDeveloper" :key="item">
						<span :class="bulletItemTextClasses">
							{{ item }}
						</span>
					</li>
				</ul>
			</div>
			<div :class="leftExperienceClasses">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Tonggak Mega Design
				</p>
				<p class="font-satoshi text-sm xl:text-base text-brandPrimaryWhite px-5 xl:px-0">
					Cyberjaya, Selangor, Malaysia
				</p>
				<p class="font-satoshi text-sm xl:text-base text-brandPrimaryWhite px-5 xl:px-0">Part-time | Remote</p>
				<Divider />
				<div class="block xl:hidden px-4 xl:px-8">
					<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite">Freelance Web Developer</p>
					<p class="font-satoshi text-sm xl:text-base text-brandPrimaryWhite">Jan 2019 - June 2021</p>
					<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-4">
						<li :class="bulletItemClasses" v-for="item in bulletPointsFreelanceWebDeveloper" :key="item">
							<span :class="bulletItemTextClasses">
								{{ item }}
							</span>
						</li>
					</ul>
					<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite mt-6">Freelance Designer</p>
					<p class="font-satoshi text-sm xl:text-base text-brandPrimaryWhite">Sept 2015 - June 2021</p>
					<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-4">
						<li :class="bulletItemClasses" v-for="item in bulletPointsFreelanceDesigner" :key="item">
							<span :class="bulletItemTextClasses">
								{{ item }}
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div :class="rightExperienceClasses">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite -mt-3">Freelance Web Developer</p>
				<p class="font-satoshi text-sm xl:text-base text-brandPrimaryWhite">Jan 2019 - June 2021</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-4">
					<li :class="bulletItemClasses" v-for="item in bulletPointsFreelanceWebDeveloper" :key="item">
						<span :class="bulletItemTextClasses">
							{{ item }}
						</span>
					</li>
				</ul>
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite mt-6">Freelance Designer</p>
				<p class="font-satoshi text-sm xl:text-base text-brandPrimaryWhite">Sept 2015 - June 2021</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-4">
					<li :class="bulletItemClasses" v-for="item in bulletPointsFreelanceDesigner" :key="item">
						<span :class="bulletItemTextClasses">
							{{ item }}
						</span>
					</li>
				</ul>
			</div>
			<div :class="leftExperienceClasses">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">Telekom Malaysia</p>
				<p class="font-satoshi text-sm xl:text-base text-brandPrimaryWhite px-5 xl:px-0">Kuala Lumpur, Malaysia</p>
				<p class="font-satoshi text-sm xl:text-base text-brandPrimaryWhite px-5 xl:px-0">
					Oct 2019 - Apr 2020 | Internship | On-site
				</p>
				<Divider />
				<div class="block xl:hidden px-4 xl:px-8">
					<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite">Intern</p>
					<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-4">
						<li :class="bulletItemClasses" v-for="item in bulletPointsIntern" :key="item">
							<span :class="bulletItemTextClasses">
								{{ item }}
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div :class="rightExperienceClasses">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite -mt-3">Intern</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-4">
					<li :class="bulletItemClasses" v-for="item in bulletPointsIntern" :key="item">
						<span :class="bulletItemTextClasses">
							{{ item }}
						</span>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup>
	import {
		Divider,
		purpleBackgroundClasses,
		gridBoxClasses,
		leftExperienceClasses,
		rightExperienceClasses,
		bulletItemClasses,
		bulletItemTextClasses,
		bulletPointsWebDeveloper,
		bulletPointsAchievementsWebDeveloper,
		bulletPointsFrontEndDeveloper,
		bulletPointsFreelanceWebDeveloper,
		bulletPointsFreelanceDesigner,
		bulletPointsIntern,
	} from "@/scripts/ExperiencesScript.js";
</script>
