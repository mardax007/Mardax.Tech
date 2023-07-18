<script lang="ts">
	import Intro from '$lib/components/intro.svelte';
	import People from '$lib/components/people.svelte';
	import ProcesTimeline from '$lib/components/proces-timeline.svelte';
	import Tags from '$lib/components/tags.svelte';
	import Statement from '$lib/components/statement.svelte';
	import TechStack from '$lib/components/techStack.svelte';
	import { getProject, getSRC } from '$lib/scripts/information';
</script>

{#await getProject("22Proliad") then projectInfo}
	<div id="wrapper">
		<div id="header">
			<img loading="lazy" src={getSRC("/proliad.jpg")} alt="Proliad header" />
			<img loading="lazy" id="proliadLogo" src={getSRC("/proliadLogo.webp")} alt="Proliad logo" />
		</div>
		<Intro info={projectInfo} />
		<Tags tags={projectInfo.tags} />
		<Statement statement={projectInfo.problemStatement?.text ?? ""} statementTitle={projectInfo.problemStatement?.title ?? ""} />
		<People people={projectInfo.people} />

		<div id="timeline">
			<ProcesTimeline timeline={projectInfo.timeline ?? []} />
		</div>

		<div id="techstack">
			<TechStack techStack={projectInfo.techStack ?? []} />
		</div>

		<div id="website">
			<h1 class="centerTitle">Webpagina</h1>
			<iframe src="https://proliad.netlify.app/" title="Proliad designed webpage" width="100%" height="500px" />
		</div>
	</div>
{/await}

<style lang="scss">
	

	#wrapper {
		max-width: ($maxWidth * 0.75);
		height: 100vh;
		padding: 0 10vw;
		margin: 0 auto;

		#header {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				border-radius: $borderRadius;
				width: 110vw;
			}

			#proliadLogo {
				position: absolute;
				top: 15vw;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 50%;
				max-width: calc(5vh + 15vw);
				filter: drop-shadow(5px 10px 10px rgba(0, 0, 0, 0.5));
				border-radius: 50%;

			}
		}

		#timeline {
			min-width: 370px;
		}

		.centerTitle {
			width: fit-content;
			margin: 1rem auto;
			margin-top: 3rem;
			text-align: center;
			color: var(--text-color);
			font-size: 2rem;
		}

		#website {
			padding-bottom: 2rem;
			display: flex;
			flex-direction: column;
			align-items: center;

			iframe {
				min-width: 550px;
				border: none;
				border-radius: calc($borderRadius / 2);
			}
		}

		@media (max-width: $maxWidth) {
			padding: 0;
			max-width: 90vw;
		}
	}
</style>
