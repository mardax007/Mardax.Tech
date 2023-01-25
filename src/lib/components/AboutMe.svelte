<script lang="ts">
    import { onMount } from "svelte";

    let startDate = Date.parse("2016-08-21T19:05:00.941Z");

    export let time: number[] = get(Date.now() - startDate);

    onMount(() => {
        setInterval(() => {
            time = get(Date.now() - startDate);
        }, 1);
    })

    function get(num: number): number[] {
        const mili = Math.floor(num);
        const seconds = Math.floor(num / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);
        return [mili % 1000, seconds % 60, minutes % 60, hours % 24, days % 30, months % 12, years];
    }
    function extend(num: number, digits: number) {
        let _num = num.toFixed(0).toString();
        return ("0".repeat(Math.max(0, digits - _num.length))) + _num; 
    }
</script>

<div id="aboutMe">
    <div id="tag">
        <img src="laptop.svg" alt="laptop">
        <h1>Introductie</h1>
    </div>
    <p>
        Welkom op mijn portfolio! Mijn naam is Martijn Vriesman en ik heb
        <span class="excludeHover">
            {time[6]}y
            {time[5]}m
            {time[4]}d
            {extend(time[3], 2)}:{extend(time[2], 2)}:{extend(time[1], 2)}.{extend(time[0], 3)}
        </span> ervaring met software ontwikkeling.
        Momenteel zit ik in 5VWO op het Antoniuscollege in <span class="excludeHover">Gouda, Nederland</span> waar ik het N&T profiel volg.
        Ik heb ervaring met het ontwikkelen van websites en applicaties met behulp van:<br>
        <span style="color: #dd4b25;">HTML</span>,
        <span style="color: #2449d8;">CSS</span>,
        <span style="color: #2e72bc;">Typescript</span>,
        <span style="color: #f23b00;">Svelte</span>,
        <span style="color: #f2cb40;">Python</span>,
        <span style="color: #549453;">NodeJS</span>,
        <span style="color: #651471;">C#</span>
            en
        <span>
            <span style="color: #eeb205;">Firebase</span>
        </span>.
    </p>
</div>

<style lang="scss">
    #aboutMe {
        width: 100vw;
        height: 100%;
        padding-bottom: 5vh;

        max-width: 125vh;
        margin: 0 auto;

        #tag {
            display: flex;
            padding-top: 2.5vh;
            justify-content: center;
            align-items: center;

            h1 {
                font-size: 10vw;
                font-weight: 400;
                margin: 0;
                color: white;

                &::after {
                    display: block;
                    content: '';
                    width: 97.5%;
                    height: calc(0.1vh + 0.1vw);
                    background: linear-gradient(135deg, #ffa361 0%, #638de0 100%);
                    position: relative;
                    top: -1.75vw;
                    left: 0.875vw;
                }
            }

            img {
                width: 16%;
            }
        }

        p {
            width: 75%;
            margin: 0 auto;
            font-size: calc(1.5vw + 2vh);
            font-weight: 200;
            color: white;
            line-height: calc(2.5vw + 2.5vh);
            text-align: justify;

            span {
                display: inline-flex;
                text-align: center;
                font-weight: 500;
                background-color: #202837;
                padding: 0.25vw;
                border-radius: 15px;
                text-shadow: 1px 2px 2.5px #202837;
                transition: 0.5s;
                cursor: pointer;
            }

            span:hover:not(.excludeHover) {
                text-shadow: 1px 2px 3px #212121;

                background-color: #e0e0e0;

            }
        }
    }
</style>