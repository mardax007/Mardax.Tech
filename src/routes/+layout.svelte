<script lang="ts">
	import { getFirebaseApp } from "$lib/scripts/information";
	import { styleState } from "$lib/scripts/state";
	import type { styleData } from "$lib/scripts/types";
	import { onMount } from "svelte";

    let darkModeTimeout = 0;

    let style: styleData = {
        darkMode: false,
    } as styleData;

    styleState.subscribe((x) => {
        style = x;
    })

    onMount(async () => {
        const getAnalytics = (await import('firebase/analytics')).getAnalytics;
        getAnalytics(getFirebaseApp());

        addEventListener("keydown", (e) => {
            if (e.key == "d") {
                if (darkModeTimeout < Date.now()) {
                    darkModeTimeout = Date.now() + 100;
                    // fade to dark or light mode
                    document.body.animate(
                        [
                            { opacity: 1 },
                            { opacity: 0 },
                            { opacity: 1 },
                        ],
                        {
                            duration: 1500,
                            easing: 'ease-in-out',
                            fill: 'forwards',
                        }
                    );
                    setTimeout(() => {
                        styleState.update((x) => {
                            x.darkMode = !x.darkMode;
                            return x;
                        });
                    }, 750);
                }
            }
        })
    });
</script>

<slot></slot>

<style lang="scss">
</style>