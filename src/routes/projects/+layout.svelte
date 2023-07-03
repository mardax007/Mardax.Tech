<script>
	import BackButton from "$lib/components/backButton.svelte";
</script>

<div id="navbar">
	<BackButton />
</div>


<slot></slot>

<style lang="scss">
	@import '../../app.scss';

    #navbar {
        height: 4rem;
        top: -4rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5vw;

        position: fixed;

        animation: moveInFromTop 0.65s 0.25s ease-in-out forwards;
        z-index: 100;
    }
</style>