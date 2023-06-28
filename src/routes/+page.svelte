<script lang="ts">
	import AboutMe from '$lib/components/aboutMe.svelte';
    import Category from '$lib/components/category.svelte';

    import { homepageInfoState } from "$lib/scripts/state"

    let homepageInfo: any = {}

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
    </div>
</div>

<style lang="scss">
    @import '../app.scss';

    #wrapper {
        width: 100vw;
        height: 100vh;
        background-color: $backgroundColor;
        overflow: hidden;
    }

    #navbar {
        height: 4rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5vw;

        position: relative;
        top: -4rem;
        margin: 0 10vh;

        animation: moveInFromTop 0.65s 1s ease-in-out forwards;
    }
</style>