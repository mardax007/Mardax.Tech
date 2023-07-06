<script lang="ts">
	import { getSRC } from "$lib/scripts/information";
	import type { Project } from "$lib/scripts/types";
	import Button from "./button.svelte";

    export let project: Project;
</script>

<a href={project.disabled ? "" : project.link} download="{project.download}" id="project" class="{project.disabled ? "disable" : ""}">
    <div id="info">
        <img loading="lazy" id="icon" style="{project.rounded ? "border-radius: 0.5rem;" : ""}" src={getSRC(project.icon)} alt="Project Icon" />
        <h2 id="name">{@html project.name}</h2>
        <span id="items">
            <p id="tag">{@html project.tag}</p>
            <p id="sep">•</p>
            <p id="date">{@html project.date}</p>
        </span>
        <p id="description">{@html project.shortText}</p>
        <Button link={project.disabled ? "" : project.link} text={project.buttonText ?? "Ga naar project"} />
    </div>
    <div id="projectImage" style="background-color: {project.background ?? "transparent"};">
        <img loading="lazy" src={getSRC(project.image)} alt="Project" class="{project.noImagePadding ? "noPadding" : "padding"}" />
    </div>
</a>

<style lang="scss">
    @import '../../app.scss';

    .disable {
        cursor: not-allowed;
        filter: grayscale(100%);
        opacity: 0.5;
    }

    #project {
        text-decoration: none;
        color: invert($color: $textColor);
        max-width: min(70vw, 1000px);
        margin: 0 auto;
        border-radius: 2rem;
        height: auto;

        margin-bottom: 50px;

        background-color: #eceff1;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "info projectImage";

        transition: all 200ms ease-out;

        &:not(.disable):hover {
            transform: scale(1.025);
            background-color: #f6f6f6;
            box-shadow: $boxShadow;
        }

        #projectImage {
            grid-area: projectImage;
            width: 100%;
            border-radius: 0 2rem 2rem 0;

            img {
                width: 95%;
                height: 100%;
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
                width: 2rem;
                height: 2rem;
                object-fit: cover;
            }

            #name {
                grid-area: name;
                font-size: 2rem;
                font-weight: 600;
                margin: 0;
                margin-top: 0.5rem;
            }

            #items {
                grid-area: items;
                display: flex;
                align-items: center;
                margin: 0;
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;

                #tag {
                    font-size: 1rem;
                    font-weight: 600;
                    margin: 0;
                    margin-right: 0.5rem;
                    align-items: center;
                }

                #sep {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin: 0;
                    margin-right: 0.5rem;
                    align-items: center;
                }

                #date {
                    font-size: 1rem;
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
                margin-top: 0.5rem;
            }
        }

        @media (max-width: 888px) {
            grid-template-areas: "info" "projectImage";
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;

            #projectImage {
                grid-area: projectImage;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 0 0 2rem 2rem;

                .padding {
                    width: 95% !important;
                    margin-left: 2.5%;
                    border-radius: 0;
                }
            }
        }

    }
</style>