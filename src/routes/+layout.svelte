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
                    darkModeTimeout = Date.now() + 1000;

                    const overlay = document.createElement("div");
                    overlay.style.position = "fixed";
                    overlay.style.top = "0";
                    overlay.style.left = "0";
                    overlay.style.width = "100vw";
                    overlay.style.height = "100vh";
                    overlay.style.backgroundColor = !style.darkMode ? "#090909" : "#f6f6f6";
                    overlay.style.zIndex = "1000";
                    overlay.style.opacity = "0";
                    overlay.style.transition = "opacity 0.5s ease-in-out";
                    document.body.appendChild(overlay);

                    overlay.animate([
                        { opacity: 0 },
                        { opacity: 1 },
                        { opacity: 0 }
                    ], {
                        duration: 1500,
                        easing: "ease-in-out",
                        fill: "forwards"
                    })

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