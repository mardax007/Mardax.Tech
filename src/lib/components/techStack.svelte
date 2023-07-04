<script lang="ts">
	import type { TechStack } from "$lib/scripts/types";

    export let techStack: TechStack[];
</script>

<div id="stack">
    {#each techStack as tech}
        <a href={tech.link} class="techstack__item">
            <img src={tech.logo} alt={tech.name + ' logo'} />
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
        </a>
    {/each}
</div>

<style lang="scss">
    @import '../../app.scss';

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
                color: invert($color: $textColor);
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