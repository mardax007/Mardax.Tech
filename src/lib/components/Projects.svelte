<script lang="ts">
	import ProjectItem from "$lib/components/ProjectItem.svelte";
    import {getProjects} from "$lib/scripts/data";

    export let max: number | undefined;
</script>

<div id="projects">
    <h1>School projecten</h1>
    {#await getProjects() then projects}
        {#each projects.sort((a,b) => b.date.seconds - a.date.seconds) as project}
            <ProjectItem {project} index={projects.indexOf(project)} hide={max ? projects.indexOf(project) > max -1 : false} />
        {/each}
    {/await}
</div>

<style lang="scss">
    @import '$lib/variables.scss';

    #projects {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        max-width: 1200px;
        min-width: 375px;

        h1 {
            font-size: calc((5vh + 3vw)*0.7);
            margin: 0;
            margin-bottom: 2.5%;
            color: $fontColor;
            text-align: center;
        }
    }
</style>