<script lang="ts">
	import ProjectItem from "$lib/components/ProjectItem.svelte";
    import {getProjects} from "$lib/scripts/data";

    export let max: number | undefined;
    const projects = getProjects().slice(0, max);
</script>

<div id="projects">
    {#each projects as project}
        <ProjectItem {project} />
    {/each}
</div>