<script lang="ts">
	import { getSRC } from "$lib/scripts/information";
	import { styleState } from "$lib/scripts/state";
	import type { Project, styleData } from "$lib/scripts/types";
	import Button from "./button.svelte";

    export let project: Project;

    let style: styleData = {
		darkMode: false,
	} as styleData;

	styleState.subscribe((x) => {
		style = x;
	})
</script>

<a href={project.disabled ? "" : project.link} download="{project.download}" class="project {project.isvertical ? "vertical" : ""} {project.disabled ? "disable" : ""} {style.darkMode ? "dark" : ""}">
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

    .dark {
        background-color: #2d2d2d !important;
        color: #fff !important;
        box-shadow: $lightBoxShadowDark !important;

        #projectImage {
            background-color: #f8f8f8 !important;
        }

        #icon {
            filter: invert(1);
        }

        &:not(.disable):hover {
            box-shadow: $lightBoxShadowDark !important;
        }
    }

    .project {
        text-decoration: none;
        color: invert($color: $textColor);
        max-width: min(70vw, $maxWidth);
        margin: 0 auto;
        border-radius: 2rem;
        height: auto;
        will-change: transform;
        box-shadow: 5px 20px 1rem 10px #e4e4e4;

        margin-bottom: 4rem;

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
            grid-area: projectImage;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0 0 2rem 2rem !important;
            padding-top: 5%;

            max-height: 50vw;

            img {
                padding-top: 0 !important;
                padding-left: 0% !important;
                border-radius: 0 !important;
            }

            .padding {
                width: 95% !important;
                margin-left: 2.5%;
                border-radius: 0;
            }
        }
    }
</style>