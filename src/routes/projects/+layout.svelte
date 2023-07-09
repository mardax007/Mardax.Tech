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