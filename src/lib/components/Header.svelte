
<script lang="ts">
    import { getIntroduction } from "$lib/scripts/data";
	import loadImage from "$lib/scripts/loadImage";

    export let flag: string = "default";
</script>

{#await getIntroduction(flag == "" ? "default" : flag) then intro}
    <div id="header">
        <div id="main">
            {#await loadImage(intro.avatar ?? "") then image}
                <img loading="lazy" src={image} alt="avatar" id="avatar">
            {/await}
            <div id="separator" />
            <h1>{@html intro.name}</h1>
            <p>{@html intro.tag}</p>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => {window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}} class="scroll-down" />
    </div>
{/await}

<style lang="scss">
    @import '$lib/variables.scss';
    #header {
        position: relative;
        overflow: hidden;
        width: 100vw;
        height: 100vh;

        max-height: 100vw;

        background: linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(14, 20, 27, 1)), url("https://firebasestorage.googleapis.com/v0/b/mardaxtech-portfolio.appspot.com/o/header.jpg?alt=media");
        background-size: cover;

        #main {
            width: 100%;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);

            h1 {
                margin: 0;
                line-height: 100%;
                font-size: 300%;
                font-weight: 400;
                text-align: center;
                color: $fontColor;
                text-shadow: 1px 2px 3px $tertiaryColor;
            }

            p {
                margin: 0;
                line-height: 150%;
                font-size: 200%;
                text-align: center;
                font-weight: 400;
                color: $fontColor;
                text-shadow: 1px 2px 3px $tertiaryColor;
            }

            #avatar {
                width: 20%;
                display: block;
                margin: 0 auto;
                border-radius: 50%;
            }

            #separator {
                display: block;
                margin: 0 auto;
                width: 12.5%;
                height: calc(0.5vw - 0.35vh);
                // background-color: $primaryColor;
                opacity: 0.75;
                margin-top: 2vw;
                margin-bottom: 2vw;
            }

        }
    }

    @media only screen and (min-width: 600px) {
        .scroll-down {
            position: absolute;
            left: 50%;
            bottom: 5%;
            display: block;
            text-align: center;
            z-index: 100;
            width: calc(2vh);
            height: calc(2vh);
            border-bottom: 2px solid #fff;
            border-right: 2px solid #fff;
            animation: fade_move_down 3s ease-in-out infinite;
            cursor: pointer;
        }
    }

    @keyframes fade_move_down {
        0% {
            opacity: 0;
            transform: translate(-50%, -10%) rotate(45deg);
        }
        75% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translate(-50%, 10%) rotate(45deg);
        }
    }
</style>