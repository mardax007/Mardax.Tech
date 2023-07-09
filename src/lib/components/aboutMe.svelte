<script lang="ts">
	import { getSRC } from "$lib/scripts/information";
    import { navState } from "$lib/scripts/state";
	import type { HomepageInfo, navData } from "$lib/scripts/types";
	import { onMount } from "svelte";

    export let homepageInfos: HomepageInfo[] = [];
    let nav: navData = {} as navData
    let info: HomepageInfo = {} as HomepageInfo

    $: info = homepageInfos[nav.index ?? 0]

    onMount(async () => {
        navState.subscribe((x) => {
            if (x.index != nav.index) {
                const aboutMe = document.getElementById("aboutMe")
                if (!aboutMe) return

                aboutMe.animate([
                    { opacity: aboutMe.style.opacity },
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

                description.style.maxHeight = (description.clientHeight ?? 0) + "px"
                description.style.overflow = "hidden"

                setTimeout(() => {
                    description.style.maxHeight = "none"
                    description.style.overflow = "hidden"
                }, 500)

                setTimeout(() => nav = x, 300);
            }
        });
    })
</script>

<div id="aboutMe">
    <h1 id="title" style="background-image: {info.titleColor ?? "black"}">{info.title}</h1>
    <div id="location">
        <img width="24px" height="auto" loading="lazy" alt="Mappin" src={getSRC(info.mapPin)} />
        <p>{info.location}</p>
    </div>
    <p id="description">{info.description}</p>
</div>

<style lang="scss">
    @import '../../app.scss';

    #title {
        font-size: min(10vw, 4.5rem);
        letter-spacing: -1.25px;

        position: relative;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        justify-content: center;

        margin-top: 150px;
        margin-bottom: 0;

        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;

        background-size: 200%;
        animation: titleAnimation 30s linear infinite;
    }

    #aboutMe {
        will-change: transform;
        opacity: 0;
        max-width: calc($maxWidth * 0.9);
        margin: 0 auto;
        margin-bottom: 4rem;

        * {
            overflow: hidden;
            white-space: nowrap;
        }
    }

    #location {
        display: flex;
        justify-content: center;

        p {
            font-size: min(5vw, 1.5rem);
            color: #3b3b3b;
        }

        img {
            padding-right: 0.25rem;
        }
    }

    #description {
        font-size: 1rem;
        text-align: center;
        color: #3b3b3b;

        max-width: calc($maxWidth * 0.5);
        margin: 0 auto;
        white-space: normal;

        padding: 0 1rem;
    }

    @keyframes titleAnimation {
        0% {
            background-position: 0%;
        }

        100% {
            background-position: 200%;
        }
    }
</style>