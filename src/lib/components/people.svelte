<script lang="ts">
    export let people: any[] = []
</script>

<div id="people">
    {#each people as person}
        <a href={person.linkedin} class="person">
            <img src={person.img} alt={person.name} />
            <h3>{person.name}</h3>
            <p id="title">{person.title}</p>
            <p id="job">{person.job}</p>
        </a>
    {/each}
</div>

<style lang="scss">
    @import '../../app.scss';
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
            max-width: 15rem;
            text-decoration: none;
            color: invert($color: $textColor);

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