<script lang="ts">
	import { getSRC } from "$lib/scripts/information";
	import { onMount } from "svelte";

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

        addEventListener("styleUpdated", () => {
			style.darkMode = document.documentElement.getAttribute("data-theme") == "dark";
		})
        style.darkMode = localStorage.getItem("darkMode") ? localStorage.getItem("darkMode") == "true" : window.matchMedia('(prefers-color-scheme: dark)').matches;;
    })

    const style = {
        darkMode: false,
    };
</script>

<a href="../" id="backButton" class="{style.darkMode ? "dark" : ""}">
    <img loading="lazy" src={getSRC("/arrow.svg")} alt="Back arrow" />
</a>

<style lang="scss">
    a {
        text-decoration: none;
        margin: 0;
        will-change: transform;
    }

    .dark {
        filter: invert(1);
    }

    img {
        padding: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #fff;

        box-shadow: var(--big-box-shadow);

        cursor: pointer;

        transition: all 200ms ease-out;

        &:hover {
            transform: scale(0.9);
        }
    }
</style>