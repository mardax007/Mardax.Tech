<script lang="ts">
	import AboutMe from '$lib/components/aboutMe.svelte';
	import Footer from '$lib/components/footer.svelte';
    import Nav from '$lib/components/nav.svelte';
	import Project from '$lib/components/project.svelte';
    import { getFirebaseApp, getHomepageInfo, getProjectsInfo } from '$lib/scripts/information';

    import { navState } from '$lib/scripts/state'
	import type { navData } from '$lib/scripts/types';
	import { onMount } from 'svelte';

	let nav: navData = {} as navData;

	onMount(() => {
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

{#await getHomepageInfo()}
    <div id="loading">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)"><g><animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2s" repeatCount="indefinite"></animateTransform><path d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20" fill="#727272"></path></g></g></svg>
    </div>
{:then homepageInfos}
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
        <Footer />
    </div>
{/await}

<style lang="scss">
    @import '../app.scss';

    #loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #wrapper {
        max-width: ($maxWidth * 0.75);
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        max-width: none;
        opacity: 0;
        animation: fadeIn 0.65s 0.5s ease-in-out forwards;
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
        will-change: transform;

        animation: moveInFromTop 0.65s 0.5s ease-in-out forwards;
        z-index: 100;
        max-width: calc($maxWidth * 0.75);;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes moveInFromTop {
        0% {
            top: -4rem;
            opacity: 0;
        }

        80% {
            top: 2.5rem;
        }

        100% {
            top: 2rem;
            opacity: 1;
        }
    }

    @keyframes moveIn {
        0% {
            left: 250%;
        }

        50% {
            opacity: 1;
        }

        100% {
            rotate: 0deg;
            left: 100%;
            opacity: 1;
        }
    }
</style>