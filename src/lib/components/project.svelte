<script lang="ts">
    import { onMount } from "svelte";
	import { getSRC } from "$lib/scripts/information";
	import type { Project } from "$lib/scripts/types";
	import Button from "./button.svelte";

    export let project: Project;
    export let index: number;

    const style = {
        darkMode: false
    }

    onMount(() => {
        addEventListener("styleUpdated", () => {
			style.darkMode = document.documentElement.getAttribute("data-theme") == "dark";
		})

        addEventListener("resize", () => {
            width = window.innerWidth;
        });

        style.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    let width = window.innerWidth;

    console.log(project.name, project.fadeInfo)
</script>

<a href={project.disabled ? "" : project.link} download="{project.download}" class="project {project.isvertical ? "vertical" : ""} {project.disabled ? "disable" : ""}">
    <div id="info" style={(project.fadeInfo && style.darkMode == project.backgroundOnlyOnDarkmode) ? `background: linear-gradient(${project.isvertical || width < 888 ? "180deg" : "90deg"}, transparent 95%, ${project.background ?? "var(--secondary-color)"} 100%, ${project.background ?? "var(--secondary-color)"} 110%);` : ""}>
        <img
            class="{style.darkMode ? 'dark' : ''}"
            loading={index < 3 ? "eager" : "lazy"}
            id="icon"
            style="{project.rounded ? "border-radius: 0.5rem;" : ""}"
            src={getSRC(project.icon)}
            alt="Project Icon"
        />
        <h2 id="name">{@html project.name}</h2>
        <span id="items">
            <p id="tag">{@html project.tag}</p>
            <p id="sep">•</p>
            <p id="date">{@html project.date}</p>
        </span>
        <p id="description">{@html project.shortText}</p>
        <Button link={project.disabled ? "" : project.link} text={project.buttonText ?? "Ga naar project"} />
    </div>
    <div id="projectImage"
        class={project.noImagePadding ? "noPadding" : "padding"}
        style="background-color: {(project.backgroundOnlyOnDarkmode && !style.darkMode) ? "transparent" : project.background ?? "var(--secondary-color)"};">
        <img
            loading={index < 3 ? "eager" : "lazy"}
            src={getSRC(project.image)} alt="Project"
            class="{project.coverImage ? 'coverImage' : ''}"
        />
    </div>
</a>

<style lang="scss">

    .disable {
        cursor: not-allowed;
        filter: grayscale(100%);
        opacity: 0.5;
    }

    .dark {
        filter: invert(1);
    }

    .project {
        text-decoration: none;
        color: var(--text-color);
        max-width: min(70vw, $maxWidth);
        margin: 0 auto;
        border-radius: 2rem;
        height: auto;
        will-change: transform;
        box-shadow: var(--box-shadow);

        margin-bottom: 4rem;

        background-color: var(--secondary-color);

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "info projectImage";

        transition: all 200ms ease-out;

        &:not(.disable):hover {
            transform: scale(1.025);
        }

        #projectImage {
            grid-area: projectImage;
            width: 100%;
            border-radius: 0 2rem 2rem 0;

            img {
                width: 90%;
                padding-left: 5%;
                height: 80%;
                padding-top: 10%;
                object-fit: contain;
                border-radius: 0 2rem 2rem 0;
            }

            .noPadding {
                width: 100%;
            }
        }

        #info {
            padding: 2rem;

            img {
                grid-area: icon;
                width: max(calc(10vh - 7vw), 2rem);
                height: max(calc(10vh - 7vw), 2rem);
                object-fit: cover;
            }

            #name {
                grid-area: name;
                font-size: 1.5rem;
                font-weight: 600;
                margin: 0;
                margin-top: 0.5rem;
            }

            #items {
                grid-area: items;
                display: flex;
                align-items: center;
                justify-content: left;
                margin: 0;
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;

                #tag {
                    font-weight: 600;
                    margin: 0;
                    margin-right: 0.5rem;
                }

                #sep {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin: 0;
                    margin-right: 0.5rem;
                    align-items: center;
                }

                #date {
                    font-weight: 600;
                    margin: 0;
                    align-items: center;
                }
            }

            #description {
                grid-area: description;
                font-size: 1.25rem;
                font-weight: 400;
                margin: 0;
            }
        }
    }

    .vertical {
        grid-template-areas: "info" "projectImage";
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;

        #projectImage {
            grid-area: projectImage;
            object-fit: cover;
            border-radius: 0 0 2rem 2rem !important;
            padding-top: 2.5%;

            img {
                padding: 0% !important;
                border-radius: 0 !important;
                width: 95% !important;
            }

            .padding {
                width: 95% !important;
                border-radius: 0;
            }
        }
    }

    @media (max-width: $maxWidth) {
        .project {
            grid-template-areas: "info" "projectImage";
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            max-width: min(90vw, $maxWidth);
        }

        #projectImage {
            border-radius: 0 0 2rem 2rem !important;
            max-height: 50vw;

            img {
                padding: 0 !important;
                height: 100% !important;
                // center
                width: 95% !important;
                margin-left: 2.5% !important;
                border-radius: 0 !important;
            }
        }
    }
</style>