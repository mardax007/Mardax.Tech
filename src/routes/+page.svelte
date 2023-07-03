<script lang="ts">
	import AboutMe from '$lib/components/aboutMe.svelte';
    import Category from '$lib/components/category.svelte';
	import Project from '$lib/components/project.svelte';
    import { getProjectsInfo } from '$lib/scripts/information';

    import { homepageInfoState, navState } from '$lib/scripts/state'
	import { onMount } from 'svelte';

	let nav: any;
	let homepageInfo: any;

	onMount(() => {
        navState.subscribe((x) => {
            if (!nav || x.categoryId != nav.categoryId) {
                nav = x
                document.getElementById("projects")!.animate([
                    { opacity: 0 },
                    { opacity: 1 }
                ], {
                    duration: 1200,
                    easing: "ease-in-out",
                    fill: "forwards"
                })
            }

            nav = x
        })
    })

    homepageInfoState.subscribe((x) => {
        homepageInfo = x
    })
</script>

<div id="wrapper">
    <div id="navbar">
        <Category />
    </div>
    <div id="content">
        <AboutMe />
        <div id="projects">
            {#if nav}
                {#each getProjectsInfo().filter((project) => project.categories.includes(Object.keys(homepageInfo.categories)[nav.categoryId])) as project}
                    <Project {project} />
                {/each}
            {/if}
        </div>
    </div>
</div>

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