<script lang="ts">
	import { getSRC } from "$lib/scripts/information";
	import type { Project } from "$lib/scripts/types";
    import { onMount } from "svelte";

    export let info: Project;

    const style = {
        darkMode: false,
    };

    onMount(() => {
        addEventListener("styleUpdated", () => {
			style.darkMode = document.documentElement.getAttribute("data-theme") == "dark";
		})
        style.darkMode = localStorage.getItem("darkMode") ? localStorage.getItem("darkMode") == "true" : window.matchMedia('(prefers-color-scheme: dark)').matches;;
    })
</script>

<div id="intro">
    <img
        class={style.darkMode ? 'dark' : ''}
        id="icon"
        style={info.rounded ? 'border-radius: 0.5rem;' : ''}
        src={getSRC(info.icon)}
        alt="Project Icon"
    />
    <h2 id="name">{@html info.name}</h2>
    <span id="items">
        <p id="tag">{@html info.tag}</p>
        <p id="sep">•</p>
        <p id="date">{@html info.date}</p>
    </span>
    <p id="callout">
        {@html info.description}
    </p>
</div>

<style lang="scss">
    #intro {
        margin-top: 1rem;

        p {
            color: var(--text-color);
            line-height: 150%;
        }

        #callout {
            grid-area: description;
            font-size: 1.2rem;
            margin-top: .5rem;
        }

        #icon {
            grid-area: icon;
            width: 2rem;
            height: 2rem;
            object-fit: cover;
        }

        .dark {
            #icon {
                filter: invert(1);
            }
        }

        #items {
            grid-area: items;
            display: flex;
            align-items: center;

            p {
                font-size: 1.2rem;
                margin: 0;
            }

            #sep {
                margin: 0 0.5rem;
            }
        }

        #name {
            grid-area: name;
            font-size: 2rem;
            margin: 0.5rem 0;
            // -webkit-background-clip: text;
            // background-clip: text;
            // -webkit-text-fill-color: transparent;
            width: fit-content;
            // background-image: linear-gradient(141deg, #626266, #1e1e22);
        }
    }
</style>