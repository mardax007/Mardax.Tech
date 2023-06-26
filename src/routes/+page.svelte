<script lang="ts">
    import Category from '$lib/components/category.svelte';
    import Menu from '$lib/components/menu.svelte';

</script>

<div id="wrapper">
    <div id="navbar">
        <Menu />
        <Category />
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