<script lang="ts">
	import ProjectItem from "$lib/components/ProjectItem.svelte";
    import { projects } from "$lib/scripts/projects";
</script>

<div id="projects">
    {#each projects as project}
        <ProjectItem {project} />
    {/each}
</div>

<style lang="scss">
</style>