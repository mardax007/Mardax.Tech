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
        width: 90vw;

        opacity: 0;


        margin: 0 5vw;
        top: 2rem;

        position: fixed;

        animation: moveInFromTop 0.65s 0.25s ease-in-out forwards;
        z-index: 100;
    }

    @media (max-width: calc($maxWidth / 2)) {
        #navbar {
            display: none;
            opacity: 0;
        }
    }
</style>