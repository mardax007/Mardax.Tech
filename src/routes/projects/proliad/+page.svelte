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
			<img loading="lazy" id="proliadLogo" src={getSRC("/proliadLogo.png")} alt="Proliad logo" />
		</div>
		<Intro info={projectInfo} />
		<Tags tags={projectInfo.tags} />
		<Statement statement={projectInfo.problemStatement?.text ?? ""} statementTitle={projectInfo.problemStatement?.title ?? ""} />
		<People people={projectInfo.people} />

		<div id="timeline">
			<h1 class="centerTitle">Proces</h1>
			<ProcesTimeline timeline={projectInfo.timeline ?? []} />
		</div>

		<div id="techstack">
			<h1 class="centerTitle">Tech stack</h1>

			<TechStack techStack={projectInfo.techStack ?? []} />
		</div>

		<div id="website">
			<h1 class="centerTitle">Webpagina</h1>
			<iframe src="https://proliad.netlify.app/" title="Proliad designed webpage" width="100%" height="500px" />
		</div>
	</div>
{/await}

<style lang="scss">
	@import '../../../app.scss';

	#wrapper {
		height: 100vh;
		padding: 0 10vw;
		margin: 0 auto;
		max-width: 750px;

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
				max-width: 200px;
				filter: drop-shadow(5px 10px 10px rgba(0, 0, 0, 0.5));
				border-radius: 50%;

			}
		}

		#website {
			padding-bottom: 2rem;
			iframe {
				border: none;
				border-radius: calc($borderRadius / 2);
			}
		}

		#timeline {
			min-width: 370px;
		}

		@media (max-width: 777px) {
			padding: 0;
			max-width: 90vw;
		}
	}
</style>
