<script lang="ts">
	import { onMount } from "svelte";
    import type { styleData } from "$lib/scripts/types";

    onMount(() => {
        const socials = document.getElementsByClassName("social");

        for (let i = 0; i < socials.length; i++) {
            const social = socials[i];

            social?.addEventListener('mousemove', (e) => {
                const distanceX = (e.clientX - social.getBoundingClientRect().left - social.clientWidth / 2);
                const distanceY = (e.clientY - social.getBoundingClientRect().top - social.clientHeight / 2);


                social.animate(
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

            social?.addEventListener('mouseleave', () => {
                social.animate(
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
        };

        addEventListener("styleUpdated", () => {
			style.darkMode = document.documentElement.getAttribute("data-theme") == "dark";
		})

        style.darkMode = localStorage.getItem("darkMode") ? localStorage.getItem("darkMode") == "true" : window.matchMedia('(prefers-color-scheme: dark)').matches;;
    });

    const style = {
        darkMode: false,
    };
</script>

<div id="footer">
    <div id="socials" class={style.darkMode ? "dark" : ""}>
        <a class="social" href="https://github.com/mardax007">
            <img alt="Github logo" src="./github.svg" />
        </a>
        <a class="social" href="https://www.linkedin.com/in/vriesman/">
            <img alt="LinkedIn logo" src="./linkedIn.svg" />
        </a>
        <a class="social" href="mailto:mardax007@gmail.com">
            <img src="./mail.svg" alt="email" />
        </a>
    </div>
    <p>Copyright © 2023 Martijn Vriesman. All rights reserved.</p>
</div>

<style lang="scss">
    #footer {
        width: 100%;
        height: 12rem;
        background: linear-gradient(180deg, var(--background-color), var(--secondary-color));

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
            text-align: center;
        }

        .dark {
            filter: invert(1);
        }

        #socials {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            a {
                margin: 0 1rem;
                padding: .5rem;
                border-radius: calc($borderRadius / 2);
                transition: background-color 0.15s ease-in-out;

                &:hover {
                    transform: scale(1.1);
                    background-color: #ffffff;
                }
            }

            img {
                display: flex;
                cursor: pointer;
                width: 3rem;
                height: 3rem;

                transition: all 0.1s ease-in-out;
            }
        }
    }
</style>