<script lang="ts">
	import Button from "$lib/components/button.svelte";
	import Intro from "$lib/components/intro.svelte";
	import Statement from "$lib/components/statement.svelte";
	import TechStack from "$lib/components/techStack.svelte";
	import { getProject, getSRC } from "$lib/scripts/information";
	import type { Project } from "$lib/scripts/types";
	import { onMount } from "svelte";

	onMount(async () => {
		const params = new URLSearchParams(window.location.search);

		if (params.get("lang") == "en") {
			projectInfo = await getProject("22DTC-en")
		} else {
			projectInfo = await getProject("22DTC")
		}

		style.darkMode = localStorage.getItem("darkMode") ? localStorage.getItem("darkMode") == "true" : window.matchMedia('(prefers-color-scheme: dark)').matches;;
	});

	const style = {
		darkMode: false
	}

	let projectInfo: Project
</script>

{#if projectInfo}
	<div id="wrapper">
		<div id="header">
		<img loading="lazy" src={getSRC(style.darkMode ? "/DTClogoDark.webp" : "/DTClogo.webp")} alt="DTC logo" />
		</div>
		<Intro info={projectInfo} />
		<Statement statement={projectInfo.goalStatement?.text ?? ""} statementTitle={projectInfo.goalStatement?.title ?? ""} />
		<div id="techstack">
			<TechStack techStack={projectInfo.techStack ?? []} />
		</div>
		<Button text="Ga naar de app" link="https://drivetransfercode.web.app/" />
	</div>
{/if}

<style lang="scss">
    #wrapper {
		max-width: ($maxWidth * 0.75);
        width: 100vw;
		padding: 0 10vw;
		margin: 0 auto;

        #header {
			width: 100%;
			margin: 0 auto;
			text-align: center;
			padding: 0 0 2rem 0;

			img {
				width: 100%;
				max-width: calc($maxWidth * 0.5);
                margin-top: 2rem;
                margin-bottom: -1rem;
			}
		}

		@media (max-width: $maxWidth) {
			padding: 0;
			max-width: 90vw;
		}
    }
</style>