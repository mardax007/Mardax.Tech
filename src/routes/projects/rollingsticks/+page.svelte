<script lang="ts">
	import Intro from "$lib/components/intro.svelte";
	import People from "$lib/components/people.svelte";
	import Tags from "$lib/components/tags.svelte";
	import Statement from "$lib/components/statement.svelte";
	import TechStack from "$lib/components/techStack.svelte";
	import { getProject } from "$lib/scripts/information";
</script>

{#await getProject("22Rollingsticks") then projectInfo}
	<div id="wrapper">
		<div id="header">
			<img src="/rollingsticks-header.png" alt="Rollingsticks header" />
		</div>
		<Intro info={projectInfo} />
		<Tags tags={projectInfo.tags} />
		<Statement statement={projectInfo.problemStatement?.text ?? ""} statementTitle={projectInfo.problemStatement?.title ?? ""} />
		<People people={projectInfo.people} />
		<h1 class="centerTitle">Design</h1>
		<img src="/Player.jpg" alt="Player">
		<h1 class="centerTitle">Tech stack</h1>
		<TechStack techStack={projectInfo.techStack ?? []} />
	</div>
{/await}

<style lang="scss">
    @import '../../../app.scss';

    .centerTitle {
		width: fit-content;
		margin: 1rem auto;
		margin-top: 3rem;
		text-align: center;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(141deg, #626266, #1e1e22);
		font-size: 2.5rem;
	}

    #wrapper {
        width: 100vw;
		padding: 0 10vw;
		margin: 0 auto;
		max-width: 750px;
		min-width: 370px;

		img {
			width: 100%;
			object-fit: cover;
		}

		#header {
			width: 100%;
			margin: 0 auto;
			text-align: center;
			padding: 0 0 2rem 0;

			img {
				width: 100%;
				max-width: 500px;
			}
		}

		@media (max-width: 730px) {
			padding: 0;
			max-width: 90vw;
		}
	}
</style>