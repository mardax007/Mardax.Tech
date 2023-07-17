<script lang="ts">
	import type { Tags } from "$lib/scripts/types";

    export let tags: Tags | undefined;
    export let version = 1;
</script>

{#if tags}
    <div id="role-learn">
        <div id="role">
            {#if tags.roleTitle}
                <h3>{@html tags.roleTitle}</h3>
                <p>{@html tags.role}</p>
            {/if}
            {#if tags.responsibilities}
                <h3>{@html tags.responsibilityTitle}</h3>
                <div id="responsibilities">
                    {#each tags.responsibilities as responsibility}
                        <li>{@html responsibility}</li>
                    {/each}
                </div>
            {/if}

            {#if version == 1 && tags.beta}
                <h3>Betawereld</h3>
                <p>{@html tags.beta}</p>
            {/if}
        </div>
        <div id="learn">
            <h3>{@html tags.learnTitle}</h3>
            <p>
                {@html tags.learned}
            </p>
            {#if version == 2 && tags.beta}
                <h3>Betawereld</h3>
                <p>{@html tags.beta}</p>
            {/if}
        </div>
    </div>
{/if}

<style lang="scss">
    h3 {
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0;
        line-height: 50%;
        margin-top: 1rem !important;
        margin-bottom: 0.5rem !important;
    }

    p {
        font-size: 1.2rem;
        margin: 0;
    }

    #role-learn {
        grid-area: role-learn;
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;

        #role {
            max-width: 45%;
        }

        #learn {
            max-width: 60%;
        }

        h3 {
            margin-bottom: 0.5rem !important;
        }

        #responsibilities {
            margin-top: 1rem;

            li {
                font-size: 1.2rem;
            }
        }

        @media (max-width: 777px) {
            flex-direction: column;

            #role {
                max-width: 100%;
                margin-bottom: 1rem;
            }

            #learn {
                max-width: 100%;
            }
        }
    }
</style>