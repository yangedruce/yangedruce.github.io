<template>
	<section id="skillsUses" class="m-4 xl:m-8">
		<div class="bg-brandSecondaryBlue p-4 xl:p-8 rounded-2xl h-screen">
			<p class="font-satoshi text-xl md:text-2xl xl:text-4xl text-brandPrimaryWhite -ml-1.5 xl:ml-0 -mt-3">03</p>
			<div class="relative h-full w-full">
				<h2
					class="absolute bottom-2.5 md:bottom-5 xl:bottom-10 2xl:bottom-6 3xl:-bottom-8 -ml-1.5 xl:ml-0 3xl:-ml-2 font-satoshi font-bold text-brandPrimaryWhite text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl 3xl:text-10xl leading-tight">
					Skills & Uses
				</h2>
			</div>
		</div>
		<div class="relative flex items-center gap-4 md:gap-6 h-8 mt-4 xl:mt-8 mx-4 xl:mx-8">
			<p class="font-satoshi text-xs text-brandNeutral-800 dark:text-brandPrimaryWhite">
				<span class="font-bold">03</span>/05
			</p>
			<div
				class="relative w-full md:w-[79.1%] lg:w-[85%] xl:w-[89%] 2xl:w-[92.4%] 3xl:w-[95.95%] h-full overflow-hidden whitespace-nowrap flex items-center px-4 rounded-full bg-brandSecondaryBlue">
				<div class="absolute flex items-center animate-marquee3 text-brandPrimaryWhite leading-none">
					<span>&nbsp;</span>
					<span class="uppercase font-satoshi text-xs">
						You are now entering SKILLS & USES section. You are now entering SKILLS & USES section. You are now entering
						SKILLS & USES section. You are now entering SKILLS & USES section. You are now entering SKILLS & USES
						section. You are now entering SKILLS & USES section. You are now entering SKILLS & USES section. You are now
						entering SKILLS & USES section. You are now entering SKILLS & USES section. You are now entering SKILLS &
						USES section. You are now entering SKILLS & USES section. You are now entering SKILLS & USES section. You
						are now entering SKILLS & USES section. You are now entering SKILLS & USES section. You are now entering
						SKILLS & USES section. You are now entering SKILLS & USES section.
					</span>
				</div>
				<div class="absolute flex items-center animate-marquee4 text-brandPrimaryWhite leading-none">
					<span>&nbsp;</span>
					<span class="uppercase font-satoshi text-xs">
						You are now entering SKILLS & USES section. You are now entering SKILLS & USES section. You are now entering
						SKILLS & USES section. You are now entering SKILLS & USES section. You are now entering SKILLS & USES
						section. You are now entering SKILLS & USES section. You are now entering SKILLS & USES section. You are now
						entering SKILLS & USES section. You are now entering SKILLS & USES section. You are now entering SKILLS &
						USES section. You are now entering SKILLS & USES section. You are now entering SKILLS & USES section. You
						are now entering SKILLS & USES section. You are now entering SKILLS & USES section. You are now entering
						SKILLS & USES section. You are now entering SKILLS & USES section.
					</span>
				</div>
			</div>
			<p class="font-satoshi font-bold text-xs text-brandNeutral-800 dark:text-brandPrimaryWhite">Skills & Uses.</p>
		</div>
		<div
			class="xl:mx-8 flex justify-center items-center gap-4 font-satoshi font-bold text-xl xl:text-2xl text-brandNeutral-800 dark:text-brandPrimaryWhite mt-8 xl:mt-16">
			<div class="border border-brandNeutral-500 w-full"></div>
			<p>Skills</p>
			<div class="border border-brandNeutral-500 w-full"></div>
		</div>
		<div :class="gridBoxClasses">
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Development Skills
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsDevelopmentSkills" :key="item">
						<span :class="bulletItemTextClasses">
							{{ item }}
						</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">Design Skills</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsDesignSkills" :key="item">
						<span :class="bulletItemTextClasses">
							{{ item }}
						</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">Soft Skills</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsSoftSkills" :key="item">
						<span :class="bulletItemTextClasses">
							{{ item }}
						</span>
					</li>
				</ul>
			</div>
		</div>
		<div
			class="xl:mx-8 flex justify-center items-center gap-4 font-satoshi font-bold text-xl xl:text-2xl text-brandNeutral-800 dark:text-brandPrimaryWhite mt-8 xl:mt-16">
			<div class="border border-brandNeutral-500 w-full"></div>
			<p>Uses</p>
			<div class="border border-brandNeutral-500 w-full"></div>
		</div>
		<div :class="gridBoxClasses">
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">Workstation</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsWorkstation" :key="item">
						<span :class="bulletItemTextClasses" v-html="item"></span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">Work Tools</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsWorkTools" :key="item">
						<span :class="bulletItemTextClasses">
							{{ item }}
						</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Productivity Tools
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsProductivityTools" :key="item">
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
		gridBoxClasses,
		bulletItemClasses,
		bulletItemTextClasses,
		bulletPointsDevelopmentSkills,
		bulletPointsDesignSkills,
		bulletPointsSoftSkills,
		bulletPointsWorkstation,
		bulletPointsWorkTools,
		bulletPointsProductivityTools,
	} from "@/scripts/SkillsUsesScript.js";
</script>
