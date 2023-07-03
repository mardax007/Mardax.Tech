<script lang="ts">
    import { homepageInfoState, navState } from "$lib/scripts/state";
	import { onMount } from "svelte";

    let homepageInfo: any = {}
    let nav = {}

    homepageInfoState.subscribe((x) => {
        homepageInfo = x;
    });

    onMount(() => {
        navState.subscribe((x) => {
            if (x.categoryId != nav.categoryId) document.getElementById("aboutMe")!.animate([
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
            }, 400);
        });
    })
</script>

<div id="aboutMe">
    <h1 id="title" style="background-image: {homepageInfo.categories[Object.keys(homepageInfo.categories)[nav.categoryId]]?.titleColor ?? "black"}">{homepageInfo.title}</h1>
    <div id="location">
        <img alt="Mappin" src={homepageInfo.categories[Object.keys(homepageInfo.categories)[nav.categoryId]]?.mapPin} />
        <p style="background-image: {homepageInfo.categories[Object.keys(homepageInfo.categories)[nav.categoryId]]?.locationColor ?? "black"}">{homepageInfo.location}</p>
    </div>
    <p id="description" style="background-image: {homepageInfo.categories[Object.keys(homepageInfo.categories)[nav.categoryId]]?.descriptionColor ?? "black"}">{homepageInfo.categories[Object.keys(homepageInfo.categories)[nav.categoryId]]?.description}</p>
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