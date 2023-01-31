<script lang="ts">
    import AboutMe from "$lib/components/AboutMe.svelte";
	import GithubDisplay from "$lib/components/GithubDisplay.svelte";
    import Header from "$lib/components/Header.svelte";
	import MoreProjects from "$lib/components/MoreProjects.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import { getIntroduction } from "$lib/scripts/data";
	import { onMount } from "svelte";
	import "../app.scss";

	let flag = "";

	onMount(() => {
        flag = decodeURIComponent(window.location.search)
    })
</script>

<div id="wrapper">
	<Header />
	<AboutMe />
	{#if flag === "?school"}
		<Projects max={1} flag={flag.replace("?", "")} />
	{:else}
		{#await getIntroduction("school") then projects}
			{#if projects.showGithub}
				<GithubDisplay />
			{/if}
		{/await}
	{/if}
</div>

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