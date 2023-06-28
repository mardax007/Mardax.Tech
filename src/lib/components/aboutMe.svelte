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
            document.getElementById("aboutMe")!.animate([
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

        let angle = 0;

        setInterval(() => {
            function getAngleFactor(angle: number) {
                const absDiff90 = Math.abs(angle - 90);
                const absDiff270 = Math.abs(angle - 270);

                if (absDiff90 < absDiff270) {
                    return 0.1;
                } else {
                    return 0.5;
                }
            }

            angle = (angle + (getAngleFactor(angle) * Math.random() * 5)) % 360;
            document.getElementById("title")!.style.backgroundImage = homepageInfo.categories[Object.keys(homepageInfo.categories)[nav.categoryId]]?.titleColor.replace("ANGLE", (angle) + "")
        }, 1)
    })
</script>

<div id="aboutMe">
    <h1 id="title" style="background-image: {homepageInfo.categories[Object.keys(homepageInfo.categories)[nav.categoryId]]?.titleColor.replace("ANGLE", "141") ?? "black"}">{homepageInfo.title}</h1>
    <div id="location">
        <img alt="Mappin" src="./MapPin.svg" />
        <p>{homepageInfo.location}</p>
    </div>
    <p id="description">{homepageInfo.description}</p>
</div>

<style lang="scss">
    @import '../../app.scss';

    #title {
        font-size: 4.5rem;
        text-align: center;
        letter-spacing: -1.25px;

        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;

        position: relative;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10rem;
    }

    #aboutMe {
        height: 75vh;
        opacity: 0;
    }

    #location {
        display: flex;
        justify-content: center;

        p {
            font-size: 1.5rem;
            text-align: center;
            color: #5e5e63;
        }
    }

    #description {
        font-size: 1rem;
        text-align: center;
        color: #5e5e63;
    }
</style>