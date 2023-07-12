<script lang="ts">
	import BackButton from "$lib/components/backButton.svelte";
	import { styleState } from "$lib/scripts/state";
	import type { styleData } from "$lib/scripts/types";

    let style: styleData = {
        darkMode: false,
    };

    styleState.subscribe((x) => {
        style = x;
    })
</script>

<div id="navbar">
	<BackButton />
</div>

<div id="background" class={style.darkMode ? "dark" : "light"}></div>

<slot></slot>

<style lang="scss">
	@import '../../app.scss';

    #background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }

    .light {
		background-color: $lightModeBackground;
	}

	.dark {
		background-color: $darkModeBackground;
	}

    #navbar {
        height: 4rem;
        width: 90vw;

        opacity: 0;

        margin: 0 5vw;
        top: 2rem;

        position: fixed;

        will-change: transform, opacity;

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