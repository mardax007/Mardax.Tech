<script lang="ts">
	import { getFirebaseApp } from "$lib/scripts/information";
	import { styleState } from "$lib/scripts/state";
	import type { styleData } from "$lib/scripts/types";
	import { onMount } from "svelte";

    let style: styleData = {
        darkMode: false,
    } as styleData;

    styleState.subscribe((x) => {
        style = x;
    })

    onMount(async () => {
        const getAnalytics = (await import('firebase/analytics')).getAnalytics;
        getAnalytics(getFirebaseApp());
    });
</script>

<slot></slot>
