<script lang="ts">
	import AboutMe from '$lib/components/aboutMe.svelte';
	import Footer from '$lib/components/footer.svelte';
    import Nav from '$lib/components/nav.svelte';
	import Project from '$lib/components/project.svelte';
    import { getHomepageInfo, getProjectsInfo } from '$lib/scripts/information';

    import { navState } from '$lib/scripts/state'
	import type { HomepageInfo, navData } from '$lib/scripts/types';
	import { onMount } from 'svelte';

	let nav: navData = {} as navData;

    let homepageInfos: HomepageInfo[] = []

	onMount(async () => {
        homepageInfos = await getHomepageInfo();
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

{#if homepageInfos.length != 0}
    <Nav homepageInfos={homepageInfos} />
    <div id="content">
        <AboutMe homepageInfos={homepageInfos} />
        <div style="will-change: opacity;" id="projects">
            {#if nav}
                {#await getProjectsInfo() then projects}
                    {#each projects as project, i}
                        {#if project.categories.includes(nav.id)}
                            <Project {project} index={i} />
                        {/if}
                    {/each}
                {/await}
            {/if}
        </div>
    </div>
    <Footer />
{/if}

<style lang="scss">
    #content {
        min-height: calc(100vh - 12rem);
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>