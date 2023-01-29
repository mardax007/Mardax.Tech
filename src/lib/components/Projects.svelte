<script lang="ts">
	import ProjectItem from "$lib/components/ProjectItem.svelte";
    import {getProjects} from "$lib/scripts/data";

    export let max: number | undefined;
</script>

<div id="projects">
    <h1>School projecten</h1>
    {#await getProjects(max) then projects}
        {#each projects as project}
            <ProjectItem {project} index={projects.indexOf(project)} />
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
        }
    }
</style>