<script lang="ts">
	import FullProject from "$lib/components/FullProject.svelte";
	import type { Project } from "$lib/scripts/interfaces";
	import { getProjects } from "$lib/scripts/data";
    import { onMount } from "svelte";

    let project: Project = {} as Project;

    onMount(async () => {
        project = (await getProjects()).filter((project: Project) => {if ("?" + project.title == decodeURIComponent(window.location.search)) return project})[0]
    })
</script>

{#if project.title}
    <FullProject {project} />
{/if}