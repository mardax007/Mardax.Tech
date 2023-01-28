<script lang="ts">
	import { getIntroduction } from "$lib/scripts/data";
    import { onMount } from "svelte";

    let intro = getIntroduction();

    export let time: number[] = get(Date.now() - intro.startDate);

    onMount(() => {
        setInterval(() => {
            time = get(Date.now() - intro.startDate);
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
        <img src={intro.icon} alt="laptop">
        <h1>{@html intro.title}</h1>
    </div>
    <p>{@html intro.text.replace("[INSERTTIME]", `${time[6]}y ${time[5]}m ${time[4]}d ${extend(time[3], 2)}:${extend(time[2], 2)}:${extend(time[1], 2)}.${extend(time[0], 3)}`)}</p>
</div>