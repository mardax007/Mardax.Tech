<script lang="ts">
    import type { TextElement } from "$lib/scripts/interfaces";

    export let textElement: TextElement;
</script>

<div id="textImage" class="projectItem {["videoText", "textImage"].includes(textElement.type) ? 'imgtxt': 'txtimg'}">
    {#if textElement.type === "textImage"}
        <img src={textElement.image} alt="">
    {:else if textElement.type === "videoText"}
        <iframe src={textElement.video} title="Player" frameborder="0" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
    {/if}
    <div>
        <h1>{@html textElement.title}</h1>
        <p>{@html textElement.text}</p>
    </div>
    {#if textElement.type === "imageText"}
        <img src={textElement.image} alt="">
    {/if}
</div>

<style lang="scss">
    .projectItem {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 5%;
        margin-top: 5%;

        div {
            max-height: 100vw;
            color: white;
            background-color: #131314;

            h1, p {
                padding: 3%;
                padding-top: 1%;
                padding-bottom: 0%;
                margin: 0;
            }

            h1 {
                font-size: 300%;
                margin-top: 1%;
                margin-bottom: 3%;
                margin: 0;
            }

            p {
                font-size: 120%;
                padding-bottom: 3%;
            }
        }

        img, iframe {
            min-height: 20vw;
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
    }

    .imgtxt {
        div {
            border-radius: 0px 30px 30px 0px;
        }

        img, iframe {
            border-radius: 30px 0px 0px 30px;
        }
    }

    .txtimg {
        div {
            border-radius: 30px 0px 0px 30px;
        }

        img, iframe {
            border-radius: 0px 30px 30px 0px;
        }
    }

    @media only screen and (max-width: 900px) {
        #textImage {
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr;
        }

        .txtimg {
            div {
                border-radius: 30px 30px 0px 0px;
            }

            img, iframe {
                border-radius: 0px 0px 30px 30px;
            }
        }

        .imgtxt {
            div {
                border-radius: 0px 0px 30px 30px;
            }

            img, iframe {
                border-radius: 30px 30px 0px 0px;
            }
        }
    }
</style>