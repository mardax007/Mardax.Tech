<script lang="ts">
	import FullProject from "$lib/components/FullProject.svelte";
	import type { Project } from "$lib/scripts/interfaces";
	import { getProjects } from "$lib/scripts/data";
    import { onMount } from "svelte";

    let project: Project = {} as Project;

    onMount(async () => {
        const [flag, title] = decodeURIComponent(window.location.search).replace("?", "") == "" ? "default" : decodeURIComponent(window.location.search).replace("?", "").split("-");
        console.log(flag, title)
        project = (await getProjects(false, flag)).filter((project: Project) => {console.log(project.title); if (project.title == title) return project})[0]
    })
</script>

{#if project.title}
    <FullProject {project} />
{/if}