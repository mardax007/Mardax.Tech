<script lang="ts">
	import { getIntroduction } from "$lib/scripts/data";
	import loadImage from "$lib/scripts/loadImage";
    import type { DocumentData } from "@firebase/firestore";
    import { onMount } from "svelte";

    let intro: DocumentData = {startDate: 1472319999999};

    async function loadIntroduction() {
        intro = await getIntroduction();
        return intro;
    }

    export let time: number[] = get(Date.now() - intro.startDate);

    onMount(() => {
        let stopTime = false;

        setInterval(() => {
            if (!stopTime) time = get(Date.now() - intro.startDate);
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

{#await loadIntroduction() then intro}
    <div id="aboutMe">
        <div id="tag">
            {#await loadImage(intro.icon ?? "") then image}
                <img src={image} alt="laptop">
            {/await}
            <h1>{@html intro.title}</h1>
        </div>
        <p id="introText">{@html intro.text.replace("[INSERTTIME]", `${time[6]}y ${time[5]}m ${time[4]}d ${extend(time[3], 2)}:${extend(time[2], 2)}:${extend(time[1], 2)}`).replace("[INSERTNAME]", `<span>${intro.name}</span>`)}</p>
    </div>
{/await}