<script lang="ts">
    import type { Project } from "$lib/scripts/interfaces";
	import loadImage from "$lib/scripts/loadImage";
	import MainContentItem from "./projectComponents/MainContentItem.svelte";

    export let project: Project;
</script>

<div id="project">
    <div id="header">
        {#await loadImage(project.projectInfo?.headerImage ?? "") then image}
            <img loading="lazy" id="headerImage" src={image} alt="">
        {/await}
        <div id="main">
            {#if !project.projectInfo.hideTitle}<h1>{@html project.title}</h1>{/if}
            {#if project.projectInfo.tagline}<p>{project.projectInfo.tagline}</p>{/if}
        </div>
    </div>

    <div id="content">
        {#if project.links}
            <div id="links">
                {#each project.links as link}
                    <a href={link.url} class={project.links.indexOf(link) == 0 ? "first" + (project.links.indexOf(link) == project.links.length - 1 ? "last" : "") : project.links.indexOf(link) == project.links.length - 1 ? "last" : ""}>
                        {#await loadImage(link.icon ?? "") then image}
                            <img loading="lazy" src={image} alt={link.name}>
                        {/await}
                    </a>
                {/each}
            </div>
        {/if}
        {#each project.projectInfo.texts as textElement}
            {#if ["imageText", "textImage", "videoText"].includes(textElement.type)}
                <MainContentItem textElement={textElement} />
            {/if}
        {/each}
        {#if project.projectInfo.bottomVideo}
            <iframe width="100%" style="height: 50vw;" src={project.projectInfo.bottomVideo} title="Player" frameborder="0" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
        {/if}
    </div>
</div>

<style lang="scss">
    @import '$lib/variables.scss';
    #project {
        width: 100%;

        #links {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            margin-top: 5vh;
            height: 100%;

            a {
                background-color: $primaryColor;
                padding: 2%;

                img {
                    height: 5vh;
                    transition: .5s;

                    &:hover {
                        scale: 1.1;
                    }
                }
            }

            .first {
                padding-left: 5%;
                border-radius: 30px 0px 0px 30px;
            }

            .last {
                padding-right: 5%;
                border-radius: 0px 30px 30px 0px;
            }
        }

        #content {
            width: 90%;
            margin: 0 auto;
            margin-bottom: 2.5vh;
        }

        #header {
            animation: fadeIn 1s;
            position: relative;
            overflow: hidden;
            width: 100vw;
            height: 100%;

            max-height: 50vw;
            margin-bottom: -2.5%;

            #headerImage {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }

            #main {
                width: 100%;
                position: absolute;
                top: 50%;
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
                    font-size: 125%;
                    text-align: center;
                    font-weight: 400;
                    color: $fontColor;
                    text-shadow: 1px 2px 3px $tertiaryColor;
                }

            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
</style>