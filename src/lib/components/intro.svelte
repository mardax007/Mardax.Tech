<script lang="ts">
	import { getSRC } from "$lib/scripts/information";
	import type { Project } from "$lib/scripts/types";

    export let info: Project;
</script>

<div id="intro">
    <img
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
    @import '../../page-variables.scss';

    #intro {
        margin-top: 1rem;

        p {
            color: invert($color: $textColor);
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
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            width: fit-content;
            background-image: linear-gradient(141deg, #626266, #1e1e22);
        }
    }
</style>