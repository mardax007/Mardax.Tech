<script lang="ts">
    export let roleLearn: {
        roleTitle: string,
        role: string;
        responsibilityTitle: string;
        responsibilities: string[];
        learnTitle: string;
        learned: string;
        beta: string;
    };
</script>

<div id="role-learn">
    <div id="role">
        <h3>{@html roleLearn.roleTitle}</h3>
        <p>{@html roleLearn.role}</p>
        <h3>{@html roleLearn.responsibilityTitle}</h3>
        <div id="responsibilities">
            {#each roleLearn.responsibilities as responsibility}
                <li>{@html responsibility}</li>
            {/each}
        </div>
        <h3>Betawereld</h3>
        <p>{@html roleLearn.beta}</p>
    </div>
    <div id="learn">
        <h3>{@html roleLearn.learnTitle}</h3>
        <p>
            {@html roleLearn.learned}
        </p>
    </div>
</div>

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

        @media (max-width: 730px) {
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