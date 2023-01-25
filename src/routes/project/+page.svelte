<script lang="ts">
	import ProjectItem from "$lib/components/ProjectItem.svelte";
    import { projects } from "$lib/scripts/projects";
	import type { Project } from "$lib/scripts/interfaces";
    import { onMount } from "svelte";
    
    let project: Project = {} as Project;


    onMount(() => {
        project = (projects.filter((project: Project) => {
            console.log("?" + project.title, decodeURIComponent(window.location.search))
			if ("?" + project.title == decodeURIComponent(window.location.search)) {
				return project as Project;
			}
		}))[0]
    })
</script>

{#if project.title}
    <ProjectItem {project} />
{/if}