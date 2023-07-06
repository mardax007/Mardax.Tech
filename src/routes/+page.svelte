<script lang="ts">
	import AboutMe from '$lib/components/aboutMe.svelte';
    import Nav from '$lib/components/nav.svelte';
	import Project from '$lib/components/project.svelte';
    import { getHomepageInfo, getProjectsInfo } from '$lib/scripts/information';

    import { navState } from '$lib/scripts/state'
	import { onMount } from 'svelte';

	let nav: any;
	let homepageInfo: any;

	onMount(async () => {
        homepageInfo = await getHomepageInfo()
        navState.subscribe((x) => {
            if (!nav || x.index != nav.index) {
                nav = x
                document.getElementById("projects")?.animate([
                    { opacity: 0 },
                    { opacity: 1 }
                ], {
                    duration: 1500,
                    easing: "ease-in-out",
                    fill: "forwards"
                })
            }

            nav = x
        })
    })
</script>

{#await getHomepageInfo() then homepageInfo}
    <div id="wrapper">
        <div id="navbar">
            <Nav homepageInfo={homepageInfo} />
        </div>
        <div id="content">
            <AboutMe homepageInfo={homepageInfo} />
            <div id="projects">
                {#if nav}
                    {#await getProjectsInfo() then projects}
                        {#each projects.filter(project => project.categories.includes(nav.id)) as project}
                            <Project {project} />
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
        max-width: 750px;
    }

    #projects {
        opacity: 0;
    }
</style>