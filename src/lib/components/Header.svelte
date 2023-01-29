
<script lang="ts">
    import { getIntroduction } from "$lib/scripts/data";
	import loadImage from "$lib/scripts/loadImage";
</script>

{#await getIntroduction() then intro}
    <div id="header">
        <div id="main">
            {#await loadImage(intro.avatar ?? "") then image}
                <img src={image} alt="avatar" id="avatar">
            {/await}
            <div id="separator" />
            <h1>{@html intro.name}</h1>
            <p>{@html intro.tag}</p>
        </div>
        <!-- svelte-ignore a11y-missing-content -->
        <a href="#aboutMe" class="scroll-down" />
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
                background-color: $primaryColor;
                opacity: 0.75;
                margin-top: 2vw;
                margin-bottom: 2vw;
            }

        }
    }

    @media only screen and (min-width: 600px) {
        .scroll-down {
            position: absolute;
            left: 49vw;
            bottom: 5vh;
            display: block;
            text-align: center;
            font-size: 1.25rem;
            z-index: 100;
            text-decoration: none;
            text-shadow: 0;
            width: calc(1vh);
            height: calc(1vh);
            border-bottom: 2px solid #fff;
            border-right: 2px solid #fff;
            transform: translate(-50%, 0%) rotate(45deg);
            animation: fade_move_down 3s ease-in-out infinite;
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