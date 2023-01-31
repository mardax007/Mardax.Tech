<script lang="ts">
    import type { TextElement } from "$lib/scripts/interfaces";
    import loadImage from "$lib/scripts/loadImage";

    export let textElement: TextElement;
</script>

<div id="wrapper" class={textElement.type}>
    {#if textElement.type == "imageText"}
        {#await loadImage(textElement.image ?? "") then image}
            <img loading="lazy" src={image} alt="">
        {/await}
    {:else if textElement.type == "videoText"}
        <iframe src={textElement.video} title="Player" frameborder="0" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen />
    {/if}
    <div id="textBox">
        <h2>{@html textElement.title}</h2>
        <p>{@html textElement.text}</p>
    </div>
    {#if textElement.type == "textImage"}
        {#await loadImage(textElement.image ?? "") then image}
            <img loading="lazy" src={image} alt="">
        {/await}
    {/if}
</div>

<style lang="scss">
    @import '$lib/variables.scss';

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        color: $fontColor;
    }
    #wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 5%;
        margin-top: 5%;
        background-color: $primaryColor;
        border-radius: 30px;

        img, iframe {
            width: 50%;
            animation: fadeIn 1s;
            margin: 0 auto;
            object-fit: fill;
        }

        #textBox {
            width: 50%;
            padding: 2.5%;
            h2 {
                font-size: calc(3vw + 2vh);
                word-wrap: break-word;
            }
            p {
                font-size: calc(.5vw + 1vh);
            }
        }

        .imageText {
            img {
                border-radius: 30px 0px 0px 30px;
            }

            #textBox {
                border-radius: 0px 30px 30px 0px;
            }
        }

        .textImage {
            img {
                border-radius: 30px 0px 0px 30px;
            }

            #textBox {
                border-radius: 0px 30px 30px 0px;
            }
        }

        .videoText {
            iframe {
                border-radius: 30px;
            }

            #textBox {
                border-radius: 0px 30px 30px 0px;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        #wrapper {
            flex-direction: column;
            img, iframe {
                width: 100%;
            }

            iframe {
                height: 33vh;
            }

            #textBox {
                width: 100%;
            }
        }

        .imageText {
            img {
                border-radius: 30px 30px 0px 0px;
            }

            #textBox {
                border-radius: 0px 0px 30px 30px;
            }
        }

        .textImage {
            img {
                border-radius: 30px 30px 0px 0px;
            }

            #textBox {
                border-radius: 0px 0px 30px 30px;
            }
        }
}

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>