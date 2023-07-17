<script lang="ts">
	import { getFirebaseApp } from "$lib/scripts/information";
	import { onMount } from "svelte";

    onMount(async () => {
        const getAnalytics = (await import('firebase/analytics')).getAnalytics;
        getAnalytics(getFirebaseApp());
    });
</script>

<slot></slot>
