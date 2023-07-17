<script lang="ts">
	import { getSRC } from "$lib/scripts/information";
	import type { TechStack } from "$lib/scripts/types";

    export let techStack: TechStack[];
</script>

<h1>Tech stack</h1>
<div id="stack">
    {#each techStack as tech}
        <a href={tech.link} class="techstack__item">
            <img loading="lazy" src={getSRC(tech.logo)} alt={tech.name + ' logo'} />
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
        </a>
    {/each}
</div>

<style lang="scss">
    h1 {
        width: fit-content;
        margin: 1rem auto;
        margin-top: 3rem;
        text-align: center;
        font-size: 2rem;
        color: var(--text-color);
    }

    #stack {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;

        a {
            text-decoration: none;
        }

        .techstack__item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 1rem 0;

            img {
                width: 100px;
                height: 100px;
            }

            h3, p {
                color: var(--text-color);
            }

            h3 {
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
            }

            p {
                margin: 0;
            }
        }
    }
</style>