<script lang="ts">
    import AboutMe from "$lib/components/AboutMe.svelte";
	import GithubDisplay from "$lib/components/GithubDisplay.svelte";
    import Header from "$lib/components/Header.svelte";
	import MoreProjects from "$lib/components/MoreProjects.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import { getIntroduction } from "$lib/scripts/data";
	import { onMount } from "svelte";
	import "../app.scss";

	let flag: string | undefined;

	onMount(() => {
        flag = decodeURIComponent(window.location.search).replace("?", "") == "" ? "default" : decodeURIComponent(window.location.search).replace("?", "");
    })
</script>

{#if flag != undefined}
	<div id="wrapper">
		<Header flag={flag} />
		<AboutMe flag={flag} />
		{#if flag === "school"}
			<Projects max={1} flag={flag} />
		{:else}
			{#await getIntroduction(flag) then projects}
				{#if projects.showGithub}
					<GithubDisplay />
				{/if}
			{/await}
		{/if}
	</div>
{/if}

<style lang="scss">
	@import '$lib/variables.scss';
	#wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
		max-width: 1300px;
		min-width: 375px;
	}
</style>