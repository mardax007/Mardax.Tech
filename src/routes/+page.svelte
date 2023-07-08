<script lang="ts">
	import AboutMe from '$lib/components/aboutMe.svelte';
    import Nav from '$lib/components/nav.svelte';
	import Project from '$lib/components/project.svelte';
    import { getHomepageInfo, getProjectsInfo } from '$lib/scripts/information';

    import { navState } from '$lib/scripts/state'
	import type { navData } from '$lib/scripts/types';
	import { onMount } from 'svelte';

	let nav: navData = {} as navData;

	onMount(async () => {
        navState.subscribe((x) => {
            if (x.index != nav.index) {
                document.getElementById("projects")?.animate([
                    { opacity: 1 },
                    { opacity: 0 },
                    { opacity: 0 },
                    { opacity: 1 }
                ], {
                    duration: 700,
                    easing: "ease-in-out",
                    fill: "forwards"
                })
            }

            setTimeout(() => nav = x, 350);
        })
    })
</script>

{#await getHomepageInfo() then homepageInfos}
    <div id="wrapper">
        <div id="navbar">
            <Nav homepageInfos={homepageInfos} />
        </div>
        <div id="content">
            <AboutMe homepageInfos={homepageInfos} />
            <div id="projects">
                {#if nav}
                    {#await getProjectsInfo() then projects}
                        {#each projects as project}
                            {#if project.categories.includes(nav.id)}
                                <Project {project} />
                            {/if}
                        {/each}
                    {/await}
                {/if}
            </div>
        </div>
    </div>
{/await}

<style lang="scss">
    @import '../app.scss';

    #wrapper {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        max-width: none;
    }

    #navbar {
        height: 4rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5vw;

        position: fixed;
        top: -4rem;
        left: 50%;
        transform: translateX(-50%);

        animation: moveInFromTop 0.65s 0.5s ease-in-out forwards;
        z-index: 100;
        max-width: calc($maxWidth * 0.75);;
    }

    #projects {
        opacity: 0;

        animation: fadeIn 0.65s 0.5s ease-in-out forwards;
    }
</style>