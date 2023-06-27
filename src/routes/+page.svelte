<script lang="ts">
    import Category from '$lib/components/category.svelte';
    import Menu from '$lib/components/menu.svelte';

    import state from "$lib/scripts/state"

    import { getHomepageInfo } from '$lib/scripts/information'

    const homepageInfo = getHomepageInfo()

    // state.subscribe((x) => {
        
    // })
</script>

<div id="wrapper">
    <div id="navbar">
        <Menu />
        <Category options={Object.keys(homepageInfo.categories)} />
    </div>
    <div id="content">
        {#if $state.categoryId == 0}
            <h1>Work</h1>
        {:else if $state.categoryId == 1}
            <h1>Play</h1>
        {:else}
            <h1>404</h1>
        {/if}
    </div>
</div>

<style lang="scss">
    @import '../app.scss';

    #wrapper {
        width: 100vw;
        height: 100vh;
        background-color: #f6f6f6;
    }

    #navbar {
        height: 4rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5vw;
    }
</style>