<template>
	<section id="skillsUses" class="m-4 xl:m-8">
		<div class="bg-brandNeutral-200 p-4 xl:p-8 rounded-2xl h-screen">
			<p class="font-satoshi text-xl md:text-2xl xl:text-4xl text-brandNeutral-800 -ml-1.5 xl:ml-0 -mt-3">03</p>
			<div class="relative h-full w-full">
				<h2
					class="absolute bottom-2.5 md:bottom-5 xl:bottom-10 2xl:bottom-6 3xl:-bottom-8 -ml-1.5 xl:ml-0 3xl:-ml-2 font-satoshi font-bold text-brandNeutral-800 text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl 3xl:text-10xl leading-tight">
					Skills & Uses
				</h2>
			</div>
		</div>
		<div class="relative flex items-center gap-4 md:gap-6 h-8 mt-4 xl:mt-8 mx-4 xl:mx-8">
			<p class="font-satoshi text-xs text-brandNeutral-800 dark:text-brandPrimaryWhite">
				<span class="font-bold">03</span>/05
			</p>
			<div
				class="relative w-full md:w-[79.1%] lg:w-[85%] xl:w-[89%] 2xl:w-[92.4%] 3xl:w-[95.95%] h-full overflow-hidden whitespace-nowrap flex items-center px-4 rounded-full bg-brandNeutral-200">
				<div class="absolute flex items-center animate-marquee3 text-brandNeutral-800 leading-none">
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
				<div class="absolute flex items-center animate-marquee4 text-brandNeutral-800 leading-none">
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

		<!-- Technical Skills Section -->
		<div
			class="xl:mx-8 flex justify-center items-center gap-4 font-satoshi font-bold text-xl xl:text-2xl text-brandNeutral-800 dark:text-brandPrimaryWhite mt-8 xl:mt-16">
			<div class="border border-brandNeutral-500 w-full"></div>
			<p class="whitespace-nowrap">Technical Skills</p>
			<div class="border border-brandNeutral-500 w-full"></div>
		</div>
		<div :class="gridBoxClasses">
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Programming & Frameworks
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsProgrammingFrameworks" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Backend & API Development
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsBackendAPI" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					DevOps & Infrastructure
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsDevOps" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
		</div>
		<div :class="gridBoxClasses">
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Cloud, CDN & Security
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsCloudSecurity" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Databases
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsDatabases" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Geospatial Processing
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsGeospatial" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
		</div>
		<div :class="gridBoxClasses">
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					AI, Automation & Integration
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsAIAutomation" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Server Management
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsServerManagement" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Development Tools
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsDevelopmentTools" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- Design & Documentation Section -->
		<div
			class="xl:mx-8 flex justify-center items-center gap-4 font-satoshi font-bold text-xl xl:text-2xl text-brandNeutral-800 dark:text-brandPrimaryWhite mt-8 xl:mt-16">
			<div class="border border-brandNeutral-500 w-full"></div>
			<p class="whitespace-nowrap">Design & Documentation</p>
			<div class="border border-brandNeutral-500 w-full"></div>
		</div>
		<div :class="gridBoxClasses">
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Architecture & Documentation
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsArchitectureDoc" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					CMS & Web Platforms
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsCMSPlatforms" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					UI / Frontend
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsUIFrontend" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
		</div>
		<div :class="gridBoxClasses">
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Design & Prototyping
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsDesignPrototyping" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Others / Interests
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsOthersInterests" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Operating Systems
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsOperatingSystems" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- Softwares & Platforms Section -->
		<div
			class="xl:mx-8 flex justify-center items-center gap-4 font-satoshi font-bold text-xl xl:text-2xl text-brandNeutral-800 dark:text-brandPrimaryWhite mt-8 xl:mt-16">
			<div class="border border-brandNeutral-500 w-full"></div>
			<p class="whitespace-nowrap">Softwares & Platforms</p>
			<div class="border border-brandNeutral-500 w-full"></div>
		</div>
		<div :class="gridBoxClasses">
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl md:col-span-3">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Softwares / Platforms / Tools
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsSoftwareTools" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- Soft Skills & Languages Section -->
		<div
			class="xl:mx-8 flex justify-center items-center gap-4 font-satoshi font-bold text-xl xl:text-2xl text-brandNeutral-800 dark:text-brandPrimaryWhite mt-8 xl:mt-16">
			<div class="border border-brandNeutral-500 w-full"></div>
			<p class="whitespace-nowrap">Soft Skills & Languages</p>
			<div class="border border-brandNeutral-500 w-full"></div>
		</div>
		<div :class="gridBoxClassesFull">
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">Soft Skills</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsSoftSkills" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">Languages</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsLanguages" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- Uses Section -->
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
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div class="h-full w-full bg-brandNeutral-700 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl">
				<p class="font-satoshi font-bold text-base xl:text-xl text-brandPrimaryWhite px-5 xl:px-0">
					Productivity Tools
				</p>
				<ul class="font-satoshi text-sm xl:text-base list-outside list-disc ml-7 xl:ml-4 mt-2">
					<li :class="bulletItemClasses" v-for="item in bulletPointsProductivityTools" :key="item">
						<span :class="bulletItemTextClasses">{{ item }}</span>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup>
	import {
		gridBoxClasses,
		gridBoxClassesFull,
		bulletItemClasses,
		bulletItemTextClasses,
		bulletPointsProgrammingFrameworks,
		bulletPointsBackendAPI,
		bulletPointsDevOps,
		bulletPointsCloudSecurity,
		bulletPointsGeospatial,
		bulletPointsDatabases,
		bulletPointsAIAutomation,
		bulletPointsServerManagement,
		bulletPointsDevelopmentTools,
		bulletPointsArchitectureDoc,
		bulletPointsCMSPlatforms,
		bulletPointsUIFrontend,
		bulletPointsDesignPrototyping,
		bulletPointsSoftwareTools,
		bulletPointsOperatingSystems,
		bulletPointsSoftSkills,
		bulletPointsLanguages,
		bulletPointsOthersInterests,
		bulletPointsWorkstation,
		bulletPointsWorkTools,
		bulletPointsProductivityTools,
	} from "@/scripts/SkillsUsesScript.js";
</script>
