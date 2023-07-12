<script lang="ts">
	import { getSRC } from "$lib/scripts/information";
	import { styleState } from "$lib/scripts/state";
	import type { styleData } from "$lib/scripts/types";
	import { onMount } from "svelte";

    let style: styleData = {
		darkMode: false,
	} as styleData;

	styleState.subscribe((x) => {
		style = x;
	})

    onMount(() => {
        const backButton = document.getElementById('backButton');

        backButton?.addEventListener('mousemove', (e) => {
            const distanceX = (e.clientX - backButton.getBoundingClientRect().left - backButton.clientWidth / 2);
            const distanceY = (e.clientY - backButton.getBoundingClientRect().top - backButton.clientHeight / 2);


            backButton.animate(
                [
                    { transform: `translate(${distanceX / 20}px, ${distanceY / 10}px)` },
                ],
                {
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'forwards',
                }
            );
        });

        backButton?.addEventListener('mouseleave', () => {
            backButton.animate(
                [
                    { transform: `translate(0)` },
                ],
                {
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'forwards',
                }
            );
        });
    })
</script>

<a href="../" id="backButton" class={style.darkMode ? "dark" : "light"}>
    <img loading="lazy" src={getSRC("/arrow.svg")} alt="Back arrow" />
</a>

<style lang="scss">
    @import '../../app.scss';

    .dark {
        img {
            background-color: $darkContrast !important;
        }
    }

    .light {
        filter: invert(0);
    }

    a {
        text-decoration: none;
        margin: 0;
        will-change: transform;
    }

    img {
        padding: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #fff;

        box-shadow: $boxShadow;

        cursor: pointer;

        transition: all 200ms ease-out;

        &:hover {
            transform: scale(0.9);
        }
    }
</style>