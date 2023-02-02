<script lang="ts">
    import "../app.scss"
	import { onMount } from "svelte";
    import { getAnalytics } from "firebase/analytics";
	import { app } from "$lib/scripts/firebase";
	import { getIntroduction, getProjects } from "$lib/scripts/data";

    onMount(() => {
        getAnalytics(app);
        const flag = decodeURIComponent(window.location.search).replace("?", "") == "" ? "default" : decodeURIComponent(window.location.search).replace("?", "");
        if (flag == "school") getProjects(true, flag)
        getIntroduction(flag)
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
        color: $fontColor;
        width: 100%;
        text-align: center;
    }
</style>