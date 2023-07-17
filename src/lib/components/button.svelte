<script lang="ts">
	import { getSRC } from "$lib/scripts/information";
	import { onMount } from "svelte";

    export let text: string = "Button";
    export let link: string = "";

    const id = Math.random().toString(36).substring(2, 15)

    onMount(() => {
        const whiteButton = document.getElementById(id);

        whiteButton?.addEventListener('mousemove', (e) => {
            const distanceX = (e.clientX - whiteButton.getBoundingClientRect().left - whiteButton.clientWidth / 2);
            const distanceY = (e.clientY - whiteButton.getBoundingClientRect().top - whiteButton.clientHeight / 2);


            whiteButton.animate(
                [
                    { transform: `translate(${distanceX / 30}px, ${distanceY / 10}px)` },
                ],
                {
                    duration: 500,
                    easing: 'ease-in-out',
                    fill: 'forwards',
                }
            );
        });

        whiteButton?.addEventListener('mouseleave', () => {
            whiteButton.animate(
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

<a href={link} id={id} class="whiteButton">
    <h3 id="view">{text}</h3>
    <img loading="lazy" src={getSRC("/arrow.svg")} alt="Arrow Right" />
</a>

<style lang="scss">

    .whiteButton {
        will-change: transform;
        text-decoration: none;
        max-width: calc($maxWidth * 0.3);
        grid-area: whiteButton;
        display: flex;
        align-items: center;
        margin: 0;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;

        width: fit-content;

        background-color: #ffffff;

        border-radius: calc($borderRadius / 2);
        padding: 0.5rem 0.5rem;
        border: 2px solid #eceff1;

        transition: all 100ms ease-out;

        &:hover {
            filter: brightness(0.75);
            border: 2px solid var(--border-color);

            img {
                transform: translateX(-0.5rem);
            }
        }

        #view {
            background-image: linear-gradient(107deg, #2b2b2e, #1e1e22);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 500;
            margin: 0.5rem;
            margin-left: 1rem;
        }

        img {
            width: 1.5rem;
            height: 1.5rem;
            object-fit: cover;
            margin-right: 1rem;
            transition: all 300ms ease-out;
            rotate: 180deg;
        }
    }
</style>