<script lang="ts">
	import FullProject from "$lib/components/FullProject.svelte";
	import type { Project } from "$lib/scripts/interfaces";
	import getProjects from "$lib/scripts/projects";
    import { onMount } from "svelte";

    
    
    let project: Project = {} as Project;


    onMount(() => {
        project = getProjects().filter(project => {if ("?" + project.title == decodeURIComponent(window.location.search)) return project})[0]
    })
</script>

{#if project.title}
    <FullProject {project} />
{/if}