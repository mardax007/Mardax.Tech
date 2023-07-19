<script lang="ts">
	import Intro from "$lib/components/intro.svelte";
	import People from "$lib/components/people.svelte";
	import Tags from "$lib/components/tags.svelte";
	import Statement from "$lib/components/statement.svelte";
	import TechStack from "$lib/components/techStack.svelte";
	import { getProject, getSRC } from "$lib/scripts/information";
</script>

<div>
	{#await getProject("22Rollingsticks") then projectInfo}
		<div id="wrapper">
			<div id="header">
				<img loading="lazy" src={getSRC("/rollingsticks-header.webp")} alt="Rollingsticks header" />
			</div>
			<Intro info={projectInfo} />
			<Tags tags={projectInfo.tags} />
			<Statement statement={projectInfo.problemStatement?.text ?? ""} statementTitle={projectInfo.problemStatement?.title ?? ""} />
			<People people={projectInfo.people} />
			<h1 class="centerTitle">Design</h1>
			<img loading="lazy" src={getSRC("/Player.webp")} alt="Player">
			<TechStack techStack={projectInfo.techStack ?? []} />
		</div>
	{/await}
</div>

<style lang="scss">
    #wrapper {
		max-width: calc($maxWidth * 0.75);
        width: 100vw;
		padding: 0 10vw;
		margin: 0 auto;

		img {
			width: 100%;
			object-fit: cover;
			border-radius: calc($borderRadius / 2);
		}

		#header {
			width: 100%;
			margin: 0 auto;
			text-align: center;
			padding: 0 0 2rem 0;

			img {
				width: 100%;
				max-width: calc($maxWidth * 0.5);
			}
		}

		.centerTitle {
			width: fit-content;
			margin: 1rem auto;
			margin-top: 3rem;
			text-align: center;
			color: var(--text-color);
			font-size: 2rem;
		}

		@media (max-width: $maxWidth) {
			padding: 0;
			max-width: 90vw;
		}
	}
</style>