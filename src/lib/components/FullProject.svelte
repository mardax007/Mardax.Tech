<script lang="ts">
    import type { Project } from "$lib/scripts/interfaces";
	import { onMount } from "svelte";
	import MainContentItem from "./projectComponents/MainContentItem.svelte";

    export let project: Project;

    onMount(() => {
        const header = document.getElementById("header");
        // if(header) header.style.backgroundImage = `url(${project.projectInfo.headerImage})`;
        // if(header) header.style.backgroundSize = `contain no-repeat;`;
    })
</script>

<div id="project">
    <div id="header">
        <img id="headerImage" src={project.projectInfo.headerImage} alt="">
        <div id="main">
            {#if !project.projectInfo.hideTitle}<h1>{project.title}</h1>{/if}
            {#if project.projectInfo.tagline}<p>{project.projectInfo.tagline}</p>{/if}
        </div>
    </div>

    <div id="content">
        {#each project.projectInfo.texts as textElement}
            {#if ["imageText", "textImage", "videoText"].includes(textElement.type)}
                <MainContentItem textElement={textElement} />
            {/if}
        {/each}
    </div>
</div>

<style lang="scss">
    #project {
        width: 100%;

        #content {
            width: 80%;
            margin: 0 auto;
        }

        #header {
            position: relative;
            overflow: hidden;
            width: 100vw;

            max-height: 50vw;
            margin-bottom: -2.5%;

            #headerImage {
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
                    color: white;
                    text-shadow: 1px 2px 3px #212121;
                }

                p {
                    margin: 0;
                    font-size: 125%;
                    text-align: center;
                    font-weight: 400;
                    color: white;
                    text-shadow: 1px 2px 3px #212121;
                }
            
            }
        }


    }
</style>