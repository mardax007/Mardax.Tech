<script lang="ts">
    import AboutMe from "$lib/components/AboutMe.svelte";
    import Header from "$lib/components/Header.svelte";
	import MoreProjects from "$lib/components/MoreProjects.svelte";
	import Projects from "$lib/components/Projects.svelte";
</script>

<div id="wrapper">
	<Header />
	<AboutMe />
	<Projects max={3} />
	<MoreProjects />
</div>

<style lang="scss">
	#wrapper {
        max-width: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
		max-width: 1200px;
		min-width: 425px;
	}
</style>