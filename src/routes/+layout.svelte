<script lang="ts">
    import "../app.scss"
	import { onMount } from "svelte";
    import { getAnalytics } from "firebase/analytics";
	import { app } from "$lib/scripts/firebase";
	import { getProjects } from "$lib/scripts/data";

    onMount(() => {
        const analytics = getAnalytics(app);
        getProjects(undefined, true)
    })
</script>

<div class="overlay-black" />
<slot />
<div id="footer">
    <p>© Mardax.Tech {new Date().getFullYear()}</p>
</div>

<style lang="scss">
    @import '$lib/variables.scss';
    .overlay-black {
        animation: fadeInAnimation ease 3s;
    }

    @keyframes fadeInAnimation {
        0% {
            opacity: 1;
        }

        20% {
            opacity: 1;
            z-index: 99;
        }

        80% {
            z-index: -1;
        }

        100% {
            opacity: 0;
            z-index: -1;
        }
    }

    #footer {
        bottom: 0;
        width: 100%;
        color: $fontColor;
        text-align: center;
    }
</style>