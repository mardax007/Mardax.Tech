<script lang="ts">
	import { getSRC } from "$lib/scripts/information";
    import { navState } from "$lib/scripts/state";
	import type { HomepageInfo, navData } from "$lib/scripts/types";
	import { onMount } from "svelte";

    export let homepageInfos: HomepageInfo[] = [];
    let nav: navData = {} as navData
    let info: HomepageInfo = {} as HomepageInfo

    info = homepageInfos[nav.index ?? 0]

    onMount(async () => {
        navState.subscribe((x) => {
            if (x.index != nav.index) document.getElementById("aboutMe")!.animate([
                { opacity: document.getElementById("aboutMe")!.style.opacity ?? 0 },
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: 800,
                easing: "ease-in-out",
                fill: "forwards"
            })

            setTimeout(() => {
                nav = x;
                info = homepageInfos[nav.index ?? 0]
            }, 400);
        });
    })
</script>

<div id="aboutMe">
    <h1 id="title" style="background-image: {info?.titleColor ?? "black"}">{info?.title}</h1>
    <div id="location">
        <img loading="lazy" alt="Mappin" src={getSRC(info?.mapPin)} />
        <p style="background-image: {info?.locationColor ?? "black"}">{info?.location}</p>
    </div>
    <p id="description" style="background-image: {info?.descriptionColor ?? "black"}">{info?.description}</p>
</div>

<style lang="scss">
    @import '../../app.scss';

    #title {
        font-size: 4.5rem;
        text-align: center;
        letter-spacing: -1.25px;

        position: relative;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        align-items: center;
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
        opacity: 0;
        max-width: 750px;
        margin: 0 auto;
        margin-bottom: 100px;
        padding: 0 15vw;
    }

    #location {
        display: flex;
        justify-content: center;

        p {
            font-size: 1.5rem;
            text-align: center;
            color: #5e5e63;

            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;

            background-size: 200%;
            animation: titleAnimation 30s linear infinite;
        }

        img {
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200%;
            animation: titleAnimation 30s linear infinite;
            padding-right: 0.25rem;
        }
    }

    #description {
        font-size: 1rem;
        text-align: center;
        color: #5e5e63;

        max-width: 500px;
        margin: 0 auto;

        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200%;
        animation: titleAnimation 30s linear infinite;
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