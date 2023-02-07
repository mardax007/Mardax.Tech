<script lang="ts">
	import ProjectItem from "$lib/components/ProjectItem.svelte";
    import {getProjects} from "$lib/scripts/data";
	import MoreProjects from "./MoreProjects.svelte";

    export let max: number | undefined;
    export let flag: string = "default";
    export let title: string = "School projecten";
    export let moreProj = true;
</script>

<div id="projects">
    {#await getProjects(false, flag) then projects}
        <h1>{title}</h1>
        {#each projects as project}
            <ProjectItem {project} flag={flag} index={projects.indexOf(project)} hide={max ? projects.indexOf(project) > max -1 : false} />
        {/each}
        {#if moreProj && projects.length > (max ?? 0)}
            <MoreProjects />
        {/if}
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
            font-size: calc((5vh + 3vw)*0.8);
            margin: 5% 0;
            color: $fontColor;
            text-align: center;
        }
    }
</style>