<script lang="ts">
	import { onMount } from "svelte";


    export let startDate: number = 1472319999999;
    let time: number[] = get(Date.now() - startDate);

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

<span class='excludeHover'>
    {`${time[6]}y ${time[5]}m ${time[4]}d ${extend(time[3], 2)}:${extend(time[2], 2)}:${extend(time[1], 2)}.${extend(time[0], 3)}`}
</span>