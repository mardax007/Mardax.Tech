
<script lang="ts">

</script>

<div id="header">
    <div id="main">
        <img src="avatar.png" alt="avatar" id="avatar" >
        <div id="separator" />
        <h1>Martijn Vriesman</h1>
        <p>Webdeveloper</p>
    </div>
    <!-- svelte-ignore a11y-missing-content -->
    <a href="#aboutMe" class="scroll-down" />
</div>

<style lang="scss">
    #header {
        position: relative;
        overflow: hidden;
        width: 100vw;
        height: 100vh;

        max-height: 100vw;

        background: linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(14, 20, 27, 1)), url("water.jpg");
        background-size: cover;

        #main {
            width: 100%;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);

            h1 {
                margin: 0;
                line-height: calc(10vw - 2vh);
                font-size: calc(10vw - 2vh);
                font-weight: 400;
                text-align: center;
                color: white;
                text-shadow: 1px 2px 3px #212121;
            }

            p {
                margin: 0;
                line-height: calc(7vw - 1vh);
                font-size: calc(5vw - 1vh);
                text-align: center;
                font-weight: 400;
                color: white;
                text-shadow: 1px 2px 3px #212121;
            }

            #avatar {
                width: calc(10vh + 10vw);
                display: block;
                margin: 0 auto;
                border-radius: 50%;
            }

            #separator {
                display: block;
                margin: 0 auto;
                width: 12.5%;
                height: calc(0.5vw - 0.35vh);
                background-color: #0e141b;
                opacity: 0.75;
                margin-top: 2vw;
                margin-bottom: 2vw;
            }
        
        }
    }

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
        width: calc(5vh - 5vw);
        height: calc(5vh - 5vw);
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
        transform: translate(-50%, 0%) rotate(45deg);
        animation: fade_move_down 3s ease-in-out infinite;
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