<script lang="ts">
	import { getSRC } from "$lib/scripts/information";
	import { styleState } from "$lib/scripts/state";
	import type { styleData } from "$lib/scripts/types";

    export let people: any[] = []

    let style: styleData = {
		darkMode: false,
	} as styleData;

	styleState.subscribe((x) => {
		style = x;
	})
</script>

<div id="people" class={style.darkMode ? "dark" : "light"}>
    {#each people as person}
        <a href={person.linkedin} class="person">
            <img loading="lazy" src={getSRC(person.img)} alt={person.name} />
            <h3>{person.name}</h3>
            <p id="title">{person.title}</p>
            <p id="job">{person.job}</p>
        </a>
    {/each}
</div>

<style lang="scss">
    @import '../../app.scss';

    .dark {
        * {
            color: $textColor !important;
        }
    }

    #people {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
        justify-content: center;

        .person {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1rem;
            max-width: calc($maxWidth * 0.25);
            text-decoration: none;
            color: invert($color: $textColor);

            transition: all 200ms ease-out;

            &:hover {
                transform: scale(1.05);
            }

            img {
                width: 5rem;
                height: 5rem;
                object-fit: cover;
                border-radius: 50%;
            }

            h3 {
                font-size: 1.5rem;
                font-weight: 700;
                margin: 0;
                margin-top: 0.5rem;
                text-align: center;
            }

            #title {
                font-size: 1.2rem;
                margin: 0;
                font-weight: 500;
                text-align: center;
            }

            #job {
                font-size: 1rem;
                margin: 0;
                text-align: center;
                font-weight: 400;

            }
        }
    }
</style>