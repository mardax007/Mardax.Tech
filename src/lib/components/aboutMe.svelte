<script lang="ts">
    import { navState } from "$lib/scripts/state";
	import type { HomepageInfo, navData } from "$lib/scripts/types";
	import { onMount } from "svelte";

    export let homepageInfos: HomepageInfo[] = [];
    let nav: navData = {} as navData
    let info: HomepageInfo = {} as HomepageInfo

    $: info = homepageInfos[nav.index ?? 0]

    const style = {
        darkMode: false
    }

    onMount(async () => {
        navState.subscribe((x) => {
            if (x.index != nav.index) {
                const aboutMe = document.getElementById("aboutMe")
                if (!aboutMe) return

                aboutMe.animate([
                    { opacity: aboutMe.style.opacity ?? 0 },
                    { opacity: 0 },
                    { opacity: 1 }
                ], {
                    duration: 800,
                    easing: "ease-in-out",
                    fill: "forwards"
                })

                const keepHeight = aboutMe.clientHeight
                const keepWidth = aboutMe.clientWidth

                aboutMe.animate([
                    { width: keepWidth + "px", height: keepHeight + "px" },
                    { width: "0px", height: keepHeight + "px" },
                    { width: keepWidth + "px", height: keepHeight + "px" },
                ], {
                    duration: 500,
                    easing: "linear"
                })

                const description = document.getElementById("description")
                if (!description) return

                const descriptionHeight = description.clientHeight ?? 0

                description.style.maxHeight = descriptionHeight + "px"
                description.style.overflow = "hidden"

                setTimeout(() => {
                    description.style.maxHeight = "none"
                    description.style.overflow = "hidden"
                }, 500)

                setTimeout(() => nav = x, 300);
            }
        });

        addEventListener("styleUpdated", () => {
			style.darkMode = document.documentElement.getAttribute("data-theme") == "dark";
		})

        style.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    })
</script>

<div id="aboutMe">
    <h1 id="title">{info.title}</h1>
    <div id="location">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="url(#paint0_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="url(#paint0_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
            <linearGradient id="paint0_linear" x1="1" y1="3" x2="28.5129" y2="6.7563" gradientUnits="userSpaceOnUse">
            <stop stop-color={info.colors[style.darkMode ? 'dark' : 'light'].pinColors[0] ?? "#DFDFDF"}/>
            <stop offset="0.313154" stop-color={info.colors[style.darkMode ? 'dark' : 'light'].pinColors[1] ?? "#4C5055"}/>
            <stop offset="1" stop-color={info.colors[style.darkMode ? 'dark' : 'light'].pinColors[2] ?? "#191E24"}/>
            </linearGradient>
            </defs>
        </svg>
        <p>{info.location}</p>
    </div>
    <p id="description">{info.description}</p>
</div>

<style lang="scss">
    #aboutMe {
        opacity: 0;
        max-width: calc($maxWidth * 0.9);
        margin: 0 auto;
        margin-bottom: 4rem;
        will-change: auto;

        * {
            overflow: hidden;
            white-space: nowrap;
        }

        #title {
            font-size: min(10vw, 4.5rem);
            text-align: center;
            letter-spacing: -1.25px;

            margin-top: 150px;
            margin-bottom: 0;
        }

        #location {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                font-size: min(5vw, 1.2rem);
                text-align: center;
            }

            svg {
                padding-right: 0.25rem;
            }
        }

        #description {
            font-size: 1rem;
            text-align: center;

            max-width: calc($maxWidth * 0.65);
            margin: 0 auto;

            white-space: normal;

            min-height: 2.5rem;
            padding: 0 1rem;
        }
    }
</style>