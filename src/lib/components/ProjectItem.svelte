<script lang="ts">
	import type { Project } from "$lib/scripts/interfaces";
	import loadImage from "$lib/scripts/loadImage";

    export let project: Project;
    export let index: number;
    export let hide: boolean;
    export let flag: string;

    addEventListener("ShowMoreProj", () => {
        hide = false;
    })
</script>

{#if project && !hide}
    <a href="/project?{flag}-{project.id ?? project.title}" class="project" id={index.toString()}>
        <div id="top">
            <div id="left">
                <p>{@html project.textDate}</p>
                <h1>{@html project.title}</h1>
                <div id="links">
                    {#if project.links}
                        {#each project.links as link}
                            <a href={link.url}>
                                {#await loadImage(link.icon ?? "") then image}
                                    <img loading="lazy" src={image} alt={link.name}>
                                {/await}
                            </a>
                        {/each}
                    {/if}
                </div>
            </div>
            <div id="right">
                <p>{project.description}</p>
            </div>
        </div>
        <div id="media">
            <div id="content">
                {#if project.mediaType == "yt"}
                    <iframe width="560" height="315" src={project.media} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {:else}
                    {#await loadImage(project.media ?? "") then image}
                        <img loading="lazy" src={image} alt="">
                    {/await}
                {/if}
            </div>
        </div>
    </a>
{/if}

<style lang="scss">
    @import '$lib/variables.scss';
    .project {
        transition: 0.5s;
        width: 80%;
        color: $fontColor;
        margin: 0 auto;

        backdrop-filter: blur(2px);
        box-shadow: 2px 3px 10px 5px rgba(0,0,0,0.75);
        background-color: $primaryColor;
        padding: 2%;
        border-radius: 15px;
        text-decoration: none;

        margin-bottom: 5vh;

        #top {
            display: grid;
            grid-template-columns: 40% 60%;

            #left {
                h1 {
                    font-size: 250%;
                    margin: 0;
                    width: 90%;
                    word-wrap: break-word;
                }

                p {
                    font-size: 150%;
                    margin: 0 auto;
                }

                #links {
                    margin-top: calc(.25vh + .25vw);

                    display: flex;
                    gap: 10%;
                    align-items: center;
                    img:hover {
                        scale: 1.1;
                    }

                    img {
                        transition: 0.5s;
                        height: calc(.5vw + 5vh);
                    }
                }
            }

            #right {
                p {
                    font-size: 150%;
                    line-height: 120%;
                    margin: 0;
                    margin-bottom: 5%;
                }
            }
        }

        #media {
            display: flex;
            justify-content: center;
            align-items: center;
            #content {
                max-width: 60%;
                cursor: default;

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: contain;

                    border-radius: 30px;
                    cursor: pointer;
                }

                iframe {
                    height: 25vh;
                    width: 70vw;
                    border-radius: 30px;
                }
            }
        }

        @media (max-width: 1000px) { // 100000px is a placeholder for "infinity"
            #top {
                display: block;

                #right {
                    margin-top: 1vh;
                    p {
                        font-size: 150%;
                        line-height: 120%;
                        margin: 0 auto;
                    }
                }
            }
        }

        padding-bottom: calc(1vh + 1vw);
    }

    .project:hover {
        scale: 1.05;
    }
</style>